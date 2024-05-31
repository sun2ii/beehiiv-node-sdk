const request = require('../utils/request');

class Segments {
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

  async getAllSegments() {
    const url = `${this.baseURL}/publications/${this.publicationId}/segments`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }

  async getSegmentById(segmentId) {
    const url = `${this.baseURL}/publications/${this.publicationId}/segments/${segmentId}`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }

  async deleteSegment(segmentId) {
    const url = `${this.baseURL}/publications/${this.publicationId}/segments/${segmentId}`;
    const headers = this.getHeaders();
    const response = await request('delete', url, null, headers);
    return response.data;
  }

  async getSegmentResults(segmentId) {
    const url = `${this.baseURL}/publications/${this.publicationId}/segments/${segmentId}/results`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }
}

module.exports = Segments;
