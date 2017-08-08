import Backbone from 'backbone';
import Handlebars from 'handlebars';

const PeopleDetail = Backbone.View.extend({
  template: Handlebars.compile(`
    <li><a href="/people/{{id}}">{{name}}</a></li>
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
