const request = require('../utils/request');

class Posts {
  constructor(baseURL, apiKey, publicationId) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
    this.publicationId = publicationId;
  }

  getHeaders() {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    };
  }

  async getAllPosts() {
    const url = `${this.baseURL}/publications/${this.publicationId}/posts`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data; 
  }

  async getPostById(postId) {
    const url = `${this.baseURL}/publications/${this.publicationId}/posts/${postId}`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }

  async deletePostById(postId) {
    const url = `${this.baseURL}/publications/${this.publicationId}/posts/${postId}`;
    const headers = this.getHeaders();
    return await request('delete', url, null, headers);
  }
}

module.exports = Posts;