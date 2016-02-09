import Ember from 'ember';

export default Ember.Controller.extend(
  {
    title: null,

    completedTodos: Ember.computed.filterBy('model', 'isCompleted'),

    completed: Ember.computed('completedTodos', function () {
      return this.get('completedTodos.length');
    }),

    remaining: Ember.computed('completed', function () {
      return this.get('model.length') - this.get('completed');
    }),

    s: Ember.computed('completed', function () {
      return this.get('remaining') === 1 ? '' : 's';
    }),

    actions: {
      createTodo(title) {
        this.set('title', '');
        todo = this.store.createRecord('todo', {title: title.target.value});
        todo.save();
      },

      toggleComplete(todo) {
        todo.toggleProperty('isComplete');
        todo.save();
      }
    }
  }
);
