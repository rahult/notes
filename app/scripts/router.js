Notes.Router.map(function () {
  this.resource('notes', { path: "/" }, function() {
    this.route('note', { path: "/note/:note_id" });
  });
});
