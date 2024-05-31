const request = require('../utils/request');

class CustomFields {
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

  async getAllCustomFields() {
    const url = `${this.baseURL}/publications/${this.publicationId}/custom_fields`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }

  async createCustomField(data) {
    const url = `${this.baseURL}/publications/${this.publicationId}/custom_fields`;
    const headers = this.getHeaders();
    const response = await request('post', url, data, headers);
    return response.data;
  }

  async updateCustomField(id, data) {
    const url = `${this.baseURL}/publications/${this.publicationId}/custom_fields/${id}`;
    const headers = this.getHeaders();
    const response = await request('put', url, data, headers);
    return response.data;
  }

  async patchCustomField(id, data) {
    const url = `${this.baseURL}/publications/${this.publicationId}/custom_fields/${id}`;
    const headers = this.getHeaders();
    const response = await request('patch', url, data, headers);
    return response.data;
  }

  async deleteCustomField(id) {
    const url = `${this.baseURL}/publications/${this.publicationId}/custom_fields/${id}`;
    const headers = this.getHeaders();
    const response = await request('delete', url, null, headers);
    return response.data;
  }

  async getCustomFieldById(id) {
    const url = `${this.baseURL}/publications/${this.publicationId}/custom_fields/${id}`;
    const headers = this.getHeaders();
    const response = await request('get', url, null, headers);
    return response.data;
  }
}

module.exports = CustomFields;