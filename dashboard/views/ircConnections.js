define([
  "text!dashboard/tmpls/ircConnections.html",
  "dashboard/models/ircConnections",
  "common/js/RView",
  "css!dashboard/styles/ircConnections.css"
], function(irConnectionsTmpl, ircConnectionsModel, RView) {


  function model() {
    return {
      connections: new ircConnectionsModel()
    };
  }


  return RView.extend({
    name: "ircConnections",
    template: irConnectionsTmpl,
    model: model
  });

});

