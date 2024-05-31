require('dotenv').config();
const BeehiivSDK = require('../../src/beehiiv-sdk');

// Initialize the SDK with your API key and publication ID from .env
const sdk = new BeehiivSDK();

(async () => {
  try {
    // Delete a specific segment by ID
    const segmentId = 'your-segment-id';
    const response = await sdk.segments.deleteSegment(segmentId);
    console.log('Delete response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
})();
