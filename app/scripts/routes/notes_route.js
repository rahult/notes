Notes.NotesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('note');
  }
});

Notes.NoteRoute = Ember.Route.extend({
  model: function(note) {
    return this.store.find('note', note.note_id)
  }
});
