/**
 * Alali Property Partners — Deal mailing-list collector (DEPLOYED VERSION)
 * =======================================================================
 * Bound to the deal mailing-list Google Sheet. Receives POSTs from the
 * website (/api/mailing-list) and appends a row. Columns: Timestamp, Email,
 * Name, Source. De-dupes on Email (column B). Uses openById so it works
 * whether or not the script is container-bound.
 *
 * Deployed as a Web app: Execute as = Me, Who has access = Anyone.
 * The owner must run authorize() once (▶ Run in the editor) to grant the
 * Sheets scope before doPost can write.
 *
 * Live web app URL is stored in Vercel as MAILING_LIST_WEBHOOK_URL.
 */

var SPREADSHEET_ID = '1eAF_YdDVuJqzEZ2W5_IrbtKVNMNjY0es9y6x39aiZfo'
var HEADERS = ['Timestamp', 'Email', 'Name', 'Source']

// Run ONCE from the editor (▶ Run) to grant the Sheets permission.
function authorize() {
  return SpreadsheetApp.openById(SPREADSHEET_ID).getName()
}

function doPost(e) {
  var lock = LockService.getScriptLock()
  lock.waitLock(30000)
  try {
    var data = {}
    try { data = JSON.parse(e.postData.contents) }
    catch (err) { return _json({ success: false, error: 'Invalid JSON' }) }

    var email = (data.email || '').toString().trim()
    if (!email) return _json({ success: false, error: 'Email required' })

    var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0]
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS)

    var name = (data.name || '').toString().trim()
    var source = (data.source || 'website').toString().trim()
    var timestamp = data.submittedAt || new Date().toISOString()

    var existing = sheet.getRange(2, 2, Math.max(sheet.getLastRow() - 1, 0), 1).getValues()
    for (var i = 0; i < existing.length; i++) {
      if (existing[i][0] && existing[i][0].toString().trim().toLowerCase() === email.toLowerCase()) {
        return _json({ success: true, duplicate: true })
      }
    }

    sheet.appendRow([timestamp, email, name, source])
    return _json({ success: true })
  } finally {
    lock.releaseLock()
  }
}

function doGet() { return _json({ ok: true, service: 'Alali mailing list' }) }

function _json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}
