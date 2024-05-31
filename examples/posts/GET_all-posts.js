require('dotenv').config();
const BeehiivSDK = require('../../src/beehiiv-sdk');
const sdk = new BeehiivSDK();

(async () => {
  try {
    const posts = await sdk.posts.getAllPosts();
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error:', error);
  }
})();