import Backbone from 'backbone';

const Character = Backbone.Model.extend({
  urlRoot: 'http://swapi.co/api/people/',

  parse(response) {
    const data = { ...response, id: response.url.substr(-2).slice(0, -1) };
    return data;
  }
});

export default Character;
