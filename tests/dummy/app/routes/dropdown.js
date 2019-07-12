import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    controller.set('model', model);
    controller.activar();
  }
});
