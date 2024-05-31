require('dotenv').config(); // Load environment variables from .env
const BeehiivSDK = require('../index');

const sdk = new BeehiivSDK();

async function testGetAllPosts() {
  try {
    const posts = await sdk.getAllPosts();
    console.log(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

testGetAllPosts();