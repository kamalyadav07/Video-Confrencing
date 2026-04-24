# Google Sheets Form Setup

This project is ready to send landing-page form submissions directly into a Google Sheet.

## 1. Create the Google Sheet

Create a sheet with this header row in `Sheet1`:

```text
Timestamp | Source | First Name | Last Name | Email | Phone | Company | Requirements
```

## 2. Open Apps Script

From the Google Sheet:

1. Click `Extensions`
2. Click `Apps Script`

Replace the default code with:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.source || "Landing Page",
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.phone || "",
      data.company || "",
      data.requirements || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3. Deploy the Script

1. Click `Deploy`
2. Click `New deployment`
3. Choose type `Web app`
4. Execute as: `Me`
5. Who has access: `Anyone`
6. Click `Deploy`
7. Copy the `Web app URL`

## 4. Add the URL to This Project

Create a `.env.local` file in the project root and add:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/your-web-app-id/exec
```

You can also add the same variable in your deployment platform.

## 5. Restart the App

After adding `.env.local`, restart your dev server so Vite picks up the new environment variable.

## How It Works

When `VITE_GOOGLE_SCRIPT_URL` is present:

- both landing-page forms post directly to the Google Apps Script URL
- the Apps Script appends the form data into the sheet
- the UI shows a Google Sheets success message

If the Google Script URL is not configured, the app falls back to the backend/email path already present.
