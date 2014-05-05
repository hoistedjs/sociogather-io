define(["rivets"], function(rivets) {

  rivets.adapters[":"] = {
    subscribe: function(obj, keypath, callback) {
      if ( obj instanceof Backbone.Collection ) {
        obj.on("add remove reset", callback);
      }
      else {
        obj.on("change:" + keypath, callback);
      }
    },
    unsubscribe: function(obj, keypath, callback) {
      if ( obj instanceof Backbone.Collection ) {
        obj.off("add remove reset", callback);
      }
      else {
        obj.off("change:" + keypath, callback);
      }
    },
    read: function(obj, keypath) {
      if ( obj instanceof Backbone.Collection ) {
        return obj.models;
      }
      else {
        return obj.get(keypath);
      }
    },
    publish: function(obj, keypath, value) {
      obj.set(keypath, value);
    }
  };

});