require('dotenv').config();
const BeehiivSDK = require('../../src/beehiiv-sdk');

// Initialize the SDK with your API key and publication ID from .env
const sdk = new BeehiivSDK();

(async () => {
  try {
    // Retrieve all segments
    const segments = await sdk.segments.getAllSegments();
    console.log('Segments:', segments);
  } catch (error) {
    console.error('Error:', error);
  }
})();
