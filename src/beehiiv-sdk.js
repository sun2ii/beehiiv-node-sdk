const Posts = require('./categories/posts');
const EmailBlasts = require('./categories/emailBlasts');
const Automations = require('./categories/automations');
const AutomationJourneys = require('./categories/automationJourneys');
const BulkSubscriptionUpdates = require('./categories/bulkSubscriptionUpdates');
const CustomFields = require('./categories/customFields');
const Publications = require('./categories/publications');
const ReferralProgram = require('./categories/referralProgram');
const Segments = require('./categories/segments');
const SubscriptionTags = require('./categories/subscriptionTags');
// Import other categories similarly

class BeehiivSDK {
  constructor(apiKey = process.env.BEEHIIV_API_KEY, publicationId = process.env.PUBLICATION_ID) {
    this.baseURL = 'https://api.beehiiv.com/v2';
    this.apiKey = apiKey;
    this.publicationId = publicationId;

    this.posts = new Posts(this.baseURL, this.apiKey, this.publicationId);
    this.emailBlasts = new EmailBlasts(this.baseURL, this.apiKey, this.publicationId);
    this.automations = new Automations(this.baseURL, this.apiKey, this.publicationId);
    this.automationJourneys = new AutomationJourneys(this.baseURL, this.apiKey, this.publicationId);
    this.bulkSubscriptionUpdates = new BulkSubscriptionUpdates(this.baseURL, this.apiKey, this.publicationId);
    this.customFields = new CustomFields(this.baseURL, this.apiKey, this.publicationId);
    this.publications = new Publications(this.baseURL, this.apiKey);
    this.referralProgram = new ReferralProgram(this.baseURL, this.apiKey, this.publicationId);
    this.segments = new Segments(this.baseURL, this.apiKey, this.publicationId);
    this.subscriptionTags = new SubscriptionTags(this.baseURL, this.apiKey, this.publicationId);
    // Initialize other categories similarly
  }
}

module.exports = BeehiivSDK;