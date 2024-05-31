require('dotenv').config();
const BeehiivSDK = require('../../src/beehiiv-sdk');
const sdk = new BeehiivSDK();
const postId = 'your-post-id';

(async () => {
  try {
    const post = await sdk.posts.getPostById(postId);
    console.log('Post:', post);
  } catch (error) {
    console.error('Error:', error);
  }
})();
