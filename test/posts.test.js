require('dotenv').config(); // Load environment variables from .env
const BeehiivSDK = require('../src/beehiiv-sdk');
const request = require('../src/utils/request'); // Import the request function

jest.mock('../src/utils/request'); // Mock the request function

const sdk = new BeehiivSDK();

describe('BeehiivSDK Posts', () => {
  test('getAllPosts', async () => {
    const mockResponse = { data: [
      {
        id: 'post_7125a615-2985-4169-83f3-353b4dd24348',
        title: 'Daily Crypto Newsletter',
        // Add other properties as needed
      }
    ]};
    request.mockResolvedValue(mockResponse);

    const posts = await sdk.posts.getAllPosts();
    console.log('Received posts:', posts); // Log the posts to the console
    expect(Array.isArray(posts)).toBe(true);
  });

  test('getPostById', async () => {
    const mockPost = {
      data: {
        id: 'post_7125a615-2985-4169-83f3-353b4dd24348',
      }
    };
    request.mockResolvedValue(mockPost);

    const postId = 'post_7125a615-2985-4169-83f3-353b4dd24348';
    const post = await sdk.posts.getPostById(postId);
    console.log('Received post:', post); 
    expect(post).toHaveProperty('id', postId);
  });

  test('deletePostById', async () => {
    const mockResponse = { message: 'Post deleted successfully' };
    request.mockResolvedValue(mockResponse);

    const postId = 'post_7125a615-2985-4169-83f3-353b4dd24348'; 
    const response = await sdk.posts.deletePostById(postId);
    console.log('Delete response:', response); 
    expect(response).toHaveProperty('message', 'Post deleted successfully');
  });
});