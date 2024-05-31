const axios = require('axios');

const request = async (method, url, data = {}, headers = {}) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

module.exports = request;
