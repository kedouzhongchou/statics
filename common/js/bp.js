(function () {
    var app = angular.module('projectShowcase', []);
    app.controller('panelController', function () {
        this.panel = 1;
        this.isPanelSet = function(panel){
            return this.panel === panel;
        };
        this.setPanel = function(panel){
            this.panel = panel;
            $("button.navbar-toggle").click()
        };
    });

})();