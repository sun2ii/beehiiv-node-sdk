const request = require('../utils/request');

class ReferralProgram {
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

  async getReferralProgram() {
    const url = `${this.baseURL}/publications/${this.publicationId}/referral_program`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }
}

module.exports = ReferralProgram;
