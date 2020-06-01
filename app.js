(function() {
    'use strict'
    const newLocal = 'Appcontroller';
    angular.module('DependencyInjectionWithAngular', [])

    .controller(newLocal, Appcontroller);

    //Here two services are used: scope and filter. So the filter service is a service that lets
    // us create filtering functions that are used for formatting the data that eventually gets displayed to the user.
    //So let's go ahead and create a function that our view will declaratively call when the text box loses the focus.
    //So for now, we'll just go ahead and call it $scope. We need to put in on the scope service since we need to be able
    // to expose it to our view. And we'll call it upper. And upper is a function, we don't need a name.
    function Appcontroller($scope, $filter, $injector) {
        $scope.name = "";
        $scope.upper = function() {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
        console.log($injector.annotate(Appcontroller));
    }

    function annotateMe(name, job, blah) {
        return "Blah!!"
    }
})();