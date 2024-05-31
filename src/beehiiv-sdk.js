const Posts = require('./categories/posts');
const EmailBlasts = require('./categories/emailBlasts');

class BeehiivSDK {
  constructor(apiKey = process.env.BEEHIIV_API_KEY, publicationId = process.env.PUBLICATION_ID) {
    this.baseURL = 'https://api.beehiiv.com/v2';
    this.apiKey = apiKey;
    this.publicationId = publicationId;

    this.posts = new Posts(this.baseURL, this.apiKey, this.publicationId);
    this.emailBlasts = new EmailBlasts(this.baseURL, this.apiKey, this.publicationId);
  }
}

module.exports = BeehiivSDK;