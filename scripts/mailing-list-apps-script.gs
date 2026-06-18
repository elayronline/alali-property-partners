/**
 * Alali Property Partners — website mailing-list collector (DEPLOYED VERSION)
 * ==========================================================================
 * Bound to the "Investor List" Google Sheet. Receives POSTs from the website
 * (/api/mailing-list — both the mailing-list band and the contact-form opt-in)
 * and appends each signup as an investor-list row, de-duped on the real Email
 * column (F).
 *
 * Investor List columns:
 *   A Name | B Source | C Role | D Location | E Strategy | F Email | G Phone | H Notes
 *
 * A website signup maps to:
 *   Name   = submitted name (blank if none)
 *   Source = "Website"
 *   Email  = submitted email (column F — this is what de-dupe checks)
 *   Notes  = "Joined mailing list <timestamp> via website (<source tag>)"
 *   Role / Location / Strategy / Phone = left blank for the sourcer to qualify
 *
 * Deploy: Web app, Execute as = Me (USER_DEPLOYING), Who has access = Anyone.
 * Managed via clasp; the live web app URL is stored in Vercel as
 * MAILING_LIST_WEBHOOK_URL. Updating the script: `clasp push` then
 * `clasp deploy --deploymentId <id>` for each live deployment (the URL/ID is
 * preserved, so no Vercel env change is needed).
 */
var SPREADSHEET_ID = '1eAF_YdDVuJqzEZ2W5_IrbtKVNMNjY0es9y6x39aiZfo'
var HEADERS = ['Name', 'Source', 'Role', 'Location', 'Strategy', 'Email', 'Phone', 'Notes']
var EMAIL_COL = 6 // column F

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
    var rawSource = (data.source || 'website').toString().trim()

    // When did they join — readable, in the sheet's timezone.
    var when = data.submittedAt ? new Date(data.submittedAt) : new Date()
    var stamp = Utilities.formatDate(when, 'Europe/London', 'yyyy-MM-dd HH:mm')

    // De-dupe on the real Email column (F).
    var lastRow = sheet.getLastRow()
    if (lastRow >= 2) {
      var emails = sheet.getRange(2, EMAIL_COL, lastRow - 1, 1).getValues()
      for (var i = 0; i < emails.length; i++) {
        var v = emails[i][0]
        if (v && v.toString().trim().toLowerCase() === email.toLowerCase()) {
          return _json({ success: true, duplicate: true })
        }
      }
    }

    // Append aligned to the Investor List schema. Role/Location/Strategy/Phone
    // are left blank for the sourcer to qualify; provenance goes in Notes.
    var notes = 'Joined mailing list ' + stamp + ' via website (' + rawSource + ')'
    sheet.appendRow([name, 'Website', '', '', '', email, '', notes])
    return _json({ success: true })
  } finally {
    lock.releaseLock()
  }
}

function doGet() { return _json({ ok: true, service: 'Alali mailing list' }) }

function _json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}
