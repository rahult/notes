Notes.LSAdapter = DS.LSAdapter.extend({
    namespace: 'notes'
});

Notes.Store = DS.Store.extend({
  adapter: Notes.LSAdapter
});

