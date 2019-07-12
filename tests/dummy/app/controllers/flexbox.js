import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    flipFlexboxDirection() {
      this.toggleProperty('flexboxColumn');
      setTimeout(() => {
        $(window).trigger('resize');
      }, 1);
    }
  }
});
