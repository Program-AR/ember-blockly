import Controller from '@ember/controller';

export default Controller.extend({
  blocksWithCategories: [
    {
      category: 'Logic',
      blocks: ['controls_if', 'controls_if_else']
    },
    {
      isSeparator: true
    },
    {
      category: 'Bloques adicionales',
      blocks: ['controls_repeat']
    }
  ],

});
