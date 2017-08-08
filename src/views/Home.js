import Backbone from 'backbone';
import Handlebars from 'handlebars';

const HomeView = Backbone.View.extend({
  template: Handlebars.compile(`
    <h1>{{title}}</h1>
    <h2>Welcome to my lecagy app</h2>
    <p>The purpose of this project is to review some concepts of Backbone, as I'm working on a migration from Backbone to React</p>
    <p>This application is bootstraped with create-react-app, using webpack, babel, es6 and all the fancy stuff...</p>
    <p>But also Backbone, jquery, Handlebars and other no so fancy stuff</p>
    <a href="/people">Star Wars People</a>
  `),

  render() {
    this.$el.html(this.template({ title: 'Legacy Backbone App' }));
    return this;
  }
});

export default HomeView;
