require('dotenv').config();
const BeehiivSDK = require('../../src/beehiiv-sdk');

// Initialize the SDK with your API key and publication ID from .env
const sdk = new BeehiivSDK();

(async () => {
  try {
    const emailBlasts = await sdk.emailBlasts.getAllEmailBlasts();
    console.log('Email Blasts:', emailBlasts);
  } catch (error) {
    console.error('Error:', error);
  }
})();