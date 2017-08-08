import Backbone from 'backbone';
import PeopleListItem from './PeopleListItem';
import Handlebars from 'handlebars';

const PeopleDetail = Backbone.View.extend({
  template: Handlebars.compile(`
    <div>
      <h1>Star Wars Charracters</h1>
      <ul id="list"></ul>
    </div>
  `),

  initialize() {
    this.collection.on('reset', this.render, this);
    this.$el.html(this.template());
  },

  render() {
    this.collection.forEach(character => {
      const itemView = new PeopleListItem({ model: character });
      this.$el.find('#list').append(itemView.render().el);
    });
  }
});

export default PeopleDetail;
