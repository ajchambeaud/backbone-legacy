import Backbone from 'backbone';
import HomeView from './views/Home';
import PeopleDetail from './views/PeopleDetail';
import PeopleList from './views/PeopleList';
import Character from './models/Character';
import People from './collections/People';
import $ from 'jquery';

const App = new (Backbone.Router.extend({
  routes: {
    '': 'index',
    'people(/)': 'people',
    'people/:id(/)': 'character'
  },

  index() {
    const homeView = new HomeView();
    homeView.render();
    $('#root').html(homeView.el);
  },

  character(id) {
    const character = new Character();
    character.set('id', id);
    character.fetch();

    const peopleDetail = new PeopleDetail({ model: character });
    peopleDetail.render();
    $('#root').html(peopleDetail.el);
  },

  people() {
    const people = new People();
    people.fetch({ reset: true });

    const peopleList = new PeopleList({ collection: people });
    peopleList.render();

    $('#root').html(peopleList.el);
  },

  start() {
    $('a').click(function(e) {
      e.preventDefault();
      Backbone.history.navigate(e.target.pathname, { trigger: true });
    });

    Backbone.history.start({ pushState: true });
  }
}))();

export default App;
