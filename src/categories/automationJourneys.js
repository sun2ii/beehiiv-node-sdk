const request = require('../utils/request');

class AutomationJourneys {
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

  async addSubscriptionToAutomation(automationId, data) {
    const url = `${this.baseURL}/publications/${this.publicationId}/automations/${automationId}/journeys`;
    const headers = this.getHeaders();
    const response = await request('post', url, data, headers);
    return response.data;
  }

  async getAllAutomationJourneys(automationId) {
    const url = `${this.baseURL}/publications/${this.publicationId}/automations/${automationId}/journeys`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }

  async getAutomationJourneyById(automationId, automationJourneyId) {
    const url = `${this.baseURL}/publications/${this.publicationId}/automations/${automationId}/journeys/${automationJourneyId}`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }
}

module.exports = AutomationJourneys;