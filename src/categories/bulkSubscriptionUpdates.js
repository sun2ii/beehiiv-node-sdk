const request = require('../utils/request');

class BulkSubscriptionUpdates {
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

  async getAllSubscriptionUpdates() {
    const url = `${this.baseURL}/publications/${this.publicationId}/bulk_subscription_updates`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }

  async getSubscriptionUpdateById(updateId) {
    const url = `${this.baseURL}/publications/${this.publicationId}/bulk_subscription_updates/${updateId}`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }
}

module.exports = BulkSubscriptionUpdates;
