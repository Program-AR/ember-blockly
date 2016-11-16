import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
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
});

export default Router;
