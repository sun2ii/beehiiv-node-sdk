require('dotenv').config();
const BeehiivSDK = require('../../src/beehiiv-sdk');

// Initialize the SDK with your API key and publication ID from .env
const sdk = new BeehiivSDK();

(async () => {
  try {
    // Create new subscription tags
    const subscriptionId = 'your-subscription-id';
    const tags = ['tag1', 'tag2'];
    const response = await sdk.subscriptionTags.createSubscriptionTags(subscriptionId, tags);
    console.log('Create Subscription Tags Response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
})();