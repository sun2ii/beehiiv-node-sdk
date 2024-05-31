require('dotenv').config();
const BeehiivSDK = require('../../src/beehiiv-sdk');
const sdk = new BeehiivSDK();
const postId = 'post_7125a615-2985-4169-83f3-353b4dd24348';

(async () => {
  try {
    const post = await sdk.posts.getPostById(postId);
    console.log('Post:', post);
  } catch (error) {
    console.error('Error:', error);
  }
})();
