const request = require('../utils/request');

class Publications {
  constructor(baseURL, apiKey) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
  }

  getHeaders() {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    };
  }

  async getAllPublications() {
    const url = `${this.baseURL}/publications`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }

  async getPublicationById(publicationId) {
    const url = `${this.baseURL}/publications/${publicationId}`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }
}

module.exports = Publications;
