import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    readUser() {
      this.store.findRecord('user', 1).then((user) => {
        alert(user.get('title') + ' ' + user.get('id'))
      })
    }
  }
});
