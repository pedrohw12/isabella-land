import { google } from 'googleapis';

export default async function handler(req: any, res: any) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        // @ts-ignore
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1FqKHZ99065MY9kjLpJyfijeg-5S4stH5DdUeG8IKsHA', // Your Sheet ID
      range: 'cms',
    });

    res.status(200).json(response.data.values);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
