import Backbone from 'backbone';
import Character from '../models/Character';

const People = Backbone.Collection.extend({
  url: 'http://swapi.co/api/people/',

  model: Character,

  parse(response) {
    const data = response.results;
    return data;
  }
});

export default People;
