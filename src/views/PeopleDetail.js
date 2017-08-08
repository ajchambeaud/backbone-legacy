import Backbone from 'backbone';
import Handlebars from 'handlebars';

const PeopleDetail = Backbone.View.extend({
  template: Handlebars.compile(`
    <div>
      <h1>{{name}}</h1>
      <h2>Data</h2>
      <ul>
        <li>height: {{height}}</li>
        <li>mass: {{mass}}</li>
        <li>hair_color: {{hair_color}}</li>
        <li>skin_color: {{skin_color}}</li>
        <li>eye_color: {{eye_color}}</li>
        <li>birth_year: {{birth_year}}</li>
        <li>gender: {{gender}}</li>
      </ul>
    </div>
  `),

  initialize() {
    this.model.on('change', this.render, this);
  },

  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

export default PeopleDetail;
