import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { token, meetingData } = req.body;

    // Validate inputs
    if (!token) {
      return res.status(401).json({ message: 'Missing OAuth access token' });
    }
    if (!meetingData) {
      return res.status(400).json({ message: 'Missing meeting data' });
    }

    // Initialize OAuth2 Client using credentials from .env.local
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.REDIRECT_URI
    );

    // Set the credentials (access token) received from the frontend
    oauth2Client.setCredentials({ access_token: token });

    // Initialize Calendar API
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // Create the event
    const event = {
      summary: `Consultation with ${meetingData.userName}`,
      description: `Notes: ${meetingData.notes}\nEmail: ${meetingData.userEmail}`,
      start: {
        dateTime: meetingData.start,
        timeZone: 'UTC', // Adjust if you want to capture user's timezone
      },
      end: {
        dateTime: meetingData.end,
        timeZone: 'UTC',
      },
      conferenceData: {
        createRequest: {
          requestId: Math.random().toString(36).substring(7),
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      conferenceDataVersion: 1, // Required to generate Google Meet link
    });

    return res.status(200).json({ 
      message: 'Meeting scheduled successfully',
      link: response.data.htmlLink 
    });

  } catch (error) {
    console.error('Google Calendar API Error:', error);
    
    // Return a descriptive error message
    return res.status(500).json({ 
      message: 'Failed to schedule meeting', 
      error: error.message 
    });
  }
}