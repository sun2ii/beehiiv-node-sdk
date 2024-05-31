const request = require('../utils/request');

class EmailBlasts {
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

  async getAllEmailBlasts() {
    const url = `${this.baseURL}/publications/${this.publicationId}/email_blasts`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }

  async getEmailBlastById(emailBlastId) {
    const url = `${this.baseURL}/publications/${this.publicationId}/email_blasts/${emailBlastId}`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }
}

module.exports = EmailBlasts;
