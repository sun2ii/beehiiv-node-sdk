require('dotenv').config();
const BeehiivSDK = require('../../src/beehiiv-sdk');

// Initialize the SDK with your API key and publication ID from .env
const sdk = new BeehiivSDK();

(async () => {
  try {
    // Retrieve a specific segment by ID
    const segmentId = 'your-segment-id';
    const segment = await sdk.segments.getSegmentById(segmentId);
    console.log('Segment:', segment);
  } catch (error) {
    console.error('Error:', error);
  }
})();