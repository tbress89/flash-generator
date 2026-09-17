// =============================================================================
// Google Apps Script — Internal Referee Storage for FC Ik Dien Flash
// =============================================================================
//
// SETUP INSTRUCTIONS:
// 1. Create a new Google Sheet (e.g. "Flash Scheidsrechters")
// 2. Rename the first sheet tab to "Referees"
// 3. Add headers in row 1:  A1 = "matchId"  |  B1 = "refereeName"
// 4. Open Extensions > Apps Script
// 5. Paste this entire file into the script editor (replace any default code)
// 6. Click Deploy > New deployment
//    - Type: Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 7. Copy the deployment URL and paste it as REFEREE_API_URL in config.js
// =============================================================================

const SHEET_NAME = 'Referees';

/**
 * GET handler — fetches stored referee names for the requested match IDs.
 *
 * Query params:
 *   ?matchIds=id1,id2,id3
 *
 * Returns JSON:
 *   { "id1": "Jan Peeters", "id3": "Kris Mertens" }
 *   (only IDs that have a stored referee are included)
 */
function doGet(e) {
  const matchIdsParam = e.parameter.matchIds || '';
  const requestedIds = matchIdsParam.split(',').map(id => id.trim()).filter(Boolean);

  if (requestedIds.length === 0) {
    return jsonResponse({});
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();

  const result = {};
  // Skip header row (index 0)
  for (let i = 1; i < data.length; i++) {
    const matchId = String(data[i][0]).trim();
    const refereeName = String(data[i][1]).trim();
    if (requestedIds.includes(matchId) && refereeName) {
      result[matchId] = refereeName;
    }
  }

  return jsonResponse(result);
}

/**
 * POST handler — saves or updates an internal referee assignment.
 *
 * POST body (JSON):
 *   { "matchId": "abc123", "refereeName": "Jan Peeters" }
 *
 * If refereeName is empty, the existing row for that matchId is deleted.
 * If a row for matchId already exists, it is updated in place.
 * Otherwise a new row is appended.
 *
 * Returns JSON:
 *   { "success": true }
 */
function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  const matchId = String(body.matchId || '').trim();
  const refereeName = String(body.refereeName || '').trim();

  if (!matchId) {
    return jsonResponse({ success: false, error: 'matchId is required' });
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();

  // Find existing row for this matchId (skip header)
  let existingRow = -1;
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]).trim() === matchId) {
      existingRow = i + 1; // Sheet rows are 1-indexed
      break;
    }
  }

  if (refereeName === '') {
    // Empty name → delete the row if it exists
    if (existingRow > 0) {
      sheet.deleteRow(existingRow);
    }
  } else if (existingRow > 0) {
    // Update existing row
    sheet.getRange(existingRow, 2).setValue(refereeName);
  } else {
    // Append new row
    sheet.appendRow([matchId, refereeName]);
  }

  return jsonResponse({ success: true });
}

/**
 * Helper — builds a JSON response with proper CORS headers.
 */
function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
