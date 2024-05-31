const request = require('../utils/request');

class SubscriptionTags {
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

  async createSubscriptionTags(subscriptionId, tags) {
    const url = `${this.baseURL}/publications/${this.publicationId}/subscriptions/${subscriptionId}/tags`;
    const headers = this.getHeaders();
    const response = await request('post', url, { tags }, headers);
    return response.data;
  }
}

module.exports = SubscriptionTags;
