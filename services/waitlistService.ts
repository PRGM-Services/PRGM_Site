const API_ENDPOINT = "https://formspree.io/f/mpqdenen"; 

const STORAGE_KEY = 'prgm_waitlist_status';
const EMAIL_KEY = 'prgm_waitlist_email';

export interface WaitlistStatus {
  joined: boolean;
  email: string | null;
  timestamp: number | null;
}

export const waitlistService = {
  /**
   * Checks if the current user (browser) has already joined.
   */
  getStatus: (): WaitlistStatus => {
    try {
      const joined = localStorage.getItem(STORAGE_KEY) === 'true';
      const email = localStorage.getItem(EMAIL_KEY);
      return { 
        joined, 
        email, 
        timestamp: Date.now() 
      };
    } catch (e) {
      return { joined: false, email: null, timestamp: null };
    }
  },

  /**
   * Sends the email to the API endpoint.
   * Returns true if the request was successful (200 OK), false otherwise.
   */
  join: async (email: string): Promise<boolean> => {
    // Safety check for the placeholder to prevent confusion
    if (API_ENDPOINT.includes("YOUR_FORM_ID")) {
      console.warn("PRGM_SYSTEM_WARNING: API_ENDPOINT is not configured in services/waitlistService.ts");
      // We return false to trigger the "CONNECTION_REFUSED" effect in the UI
      return false;
    }

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          email,
          _subject: `PRGM Access Request: ${email}`, // Formspree subject line helper
          timestamp: new Date().toISOString(),
          source: 'landing_page_v1'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error(`Waitlist API Error: ${response.status}`, errorData);
        return false;
      }
      
      // On success, save local state
      waitlistService.saveLocalSuccess(email);
      return true;
    } catch (error) {
      console.error("Waitlist Network Error:", error);
      return false;
    }
  },

  /**
   * Helper to persist success state to localStorage
   */
  saveLocalSuccess: (email: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
      localStorage.setItem(EMAIL_KEY, email);
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  },

  /**
   * Resets the waitlist status (for testing purposes).
   */
  reset: () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(EMAIL_KEY);
  }
};