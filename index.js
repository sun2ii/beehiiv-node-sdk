require('dotenv').config(); // Load environment variables from .env

const request = require('./utils/request');

class BeehiivSDK {
  constructor() {
    this.baseURL = 'https://api.beehiiv.com/v2';
    this.apiKey = process.env.BEEHIIV_API_KEY; // Access the API key from the environment variables
    this.publicationId = process.env.PUBLICATION_ID; // Access the publicationId from the environment variables
  }

  getHeaders() {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    };
  }

  // Method to get all posts
  async getAllPosts() {
    const url = `${this.baseURL}/publications/${this.publicationId}/posts`;
    const headers = this.getHeaders();
    return await request('get', url, null, headers);
  }

  // Method to get a single post by ID
  async getPostById(postId) {
    const url = `${this.baseURL}/publications/${this.publicationId}/posts/${postId}`;
    const headers = this.getHeaders();
    return await request('get', url, null, headers);
  }
}

module.exports = BeehiivSDK;