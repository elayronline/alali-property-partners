/**
 * Alali Property Partners — Deal mailing-list collector
 * =====================================================
 * Receives POSTs from the website (/api/mailing-list) and appends each
 * signup as a row in the bound Google Sheet.
 *
 * SETUP (one time, ~3 minutes)
 * ----------------------------
 * 1. Open the mailing-list Google Sheet:
 *    https://docs.google.com/spreadsheets/d/1eAF_YdDVuJqzEZ2W5_IrbtKVNMNjY0es9y6x39aiZfo/edit
 * 2. Extensions ▸ Apps Script. Delete any boilerplate, paste THIS whole file, Save.
 * 3. Deploy ▸ New deployment ▸ (gear) Web app.
 *      - Description:  Mailing list collector
 *      - Execute as:   Me
 *      - Who has access: Anyone
 *    Click Deploy, authorise when prompted, and COPY the "Web app" URL
 *    (it ends in /exec).
 * 4. Add that URL to the site's environment as MAILING_LIST_WEBHOOK_URL:
 *      - Local:  add to .env.local  →  MAILING_LIST_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
 *      - Vercel: Project ▸ Settings ▸ Environment Variables ▸ add the same key/value, then redeploy.
 *
 * Re-deploying after edits: Deploy ▸ Manage deployments ▸ (pencil) ▸ Version: New version ▸ Deploy.
 * The /exec URL stays the same, so you don't need to update the env var again.
 */

// Header row written automatically on first run if the sheet is empty.
var HEADERS = ['Timestamp', 'Email', 'Name', 'Source']

function doPost(e) {
  var lock = LockService.getScriptLock()
  lock.waitLock(30000) // serialise writes so concurrent signups don't collide
  try {
    var data = {}
    try {
      data = JSON.parse(e.postData.contents)
    } catch (err) {
      return _json({ success: false, error: 'Invalid JSON' })
    }

    var email = (data.email || '').toString().trim()
    if (!email) {
      return _json({ success: false, error: 'Email required' })
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS)
    }

    var name = (data.name || '').toString().trim()
    var source = (data.source || 'website').toString().trim()
    var timestamp = data.submittedAt || new Date().toISOString()

    // De-dupe: skip if this email is already in column B.
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

// Lets you confirm the deployment is live by visiting the /exec URL in a browser.
function doGet() {
  return _json({ ok: true, service: 'Alali mailing list' })
}

function _json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  )
}
