const request = require('../utils/request');

class Automations {
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

  async getAllAutomations() {
    const url = `${this.baseURL}/publications/${this.publicationId}/automations`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }

  async getAutomationById(automationId) {
    const url = `${this.baseURL}/publications/${this.publicationId}/automations/${automationId}`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }
}

module.exports = Automations;
