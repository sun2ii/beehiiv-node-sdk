require('dotenv').config();
const BeehiivSDK = require('../../src/beehiiv-sdk');

// Initialize the SDK with your API key and publication ID from .env
const sdk = new BeehiivSDK();

(async () => {
  try {
    // Retrieve the results of a specific segment by ID
    const segmentId = 'your-segment-id';
    const results = await sdk.segments.getSegmentResults(segmentId);
    console.log('Segment Results:', results);
  } catch (error) {
    console.error('Error:', error);
  }
})();
