require('dotenv').config();
const BeehiivSDK = require('../../src/beehiiv-sdk');

// Initialize the SDK with your API key and publication ID from .env
const sdk = new BeehiivSDK();

(async () => {
  try {
    const referralProgram = await sdk.referralProgram.getReferralProgram();
    console.log('Referral Program:', referralProgram);
  } catch (error) {
    console.error('Error:', error);
  }
})();
