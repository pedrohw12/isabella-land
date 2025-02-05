import { google } from "googleapis";

const SHEET_ID = "your_google_sheet_id";
const RANGE = "Sheet1"; // Fetch the whole sheet

export const fetchSheetData = async () => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        // @ts-ignore
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: RANGE,
    });

    return response.data.values || [];
  } catch (error) {
    console.error("Failed to fetch Google Sheets data:", error);
    return [];
  }
};
