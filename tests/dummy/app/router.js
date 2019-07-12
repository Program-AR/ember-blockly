import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('flexbox');
  this.route('context');
  this.route('parameters');
  this.route('categories');
  this.route('contextMenu');
  this.route('highlight');
  this.route('preview');
  this.route('custom');
  this.route('complexCustom');
  this.route('helperCustom');
  this.route('blocksCatalog');
  this.route('dropdown');
  this.route('topblock');
  this.route('playground');
});

export default Router;
