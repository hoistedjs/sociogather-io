define([
  "text!dashboard/tmpls/ircConnections.html",
  "dashboard/models/ircConnections",
  "common/js/RView",
  "css!dashboard/styles/ircConnections.css"
], function(irConnectionsTmpl, ircConnectionsModel, RView) {


  function modelFactory() {
    return {
      connections: new ircConnectionsModel()
    };
  }


  return RView.extend({
    className: "panel panel-default",
    name: "ircConnections",
    template: irConnectionsTmpl,
    model: modelFactory
  });

});

