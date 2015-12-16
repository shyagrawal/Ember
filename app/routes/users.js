import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    return [{
      name: "Shyam Agrawal",
      email: "shyagrawal@infocepts.com"
    }, {
      name: "Nilesh Sahni",
      email: "nsahni@infocepts.com"
    }];
  }
});
