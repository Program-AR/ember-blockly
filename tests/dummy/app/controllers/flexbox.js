import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    flipFlexboxDirection() {
      this.toggleProperty('flexboxColumn');
      setTimeout(() => {
        $(window).trigger('resize');
      }, 1);
    }
  }
});
