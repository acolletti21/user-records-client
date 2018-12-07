import DS from 'ember-data';

// export default DS.JSONAPIAdapter.extend({
//   host: 'http://localhost:3000'
// });
var ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3000'
});
