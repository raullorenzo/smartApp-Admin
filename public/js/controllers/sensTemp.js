/**
 * Created by raul on 5/12/16.
 */

var promise26 = undefined;
var promise27 = undefined;
var promise28 = undefined;
var promise29 = undefined;
var dis26 = false;
var dis27 = false;
var dis28 = false;
var dis29 = false;

//sensTemp
angular
    .module('app')
    .controller('tempCtrl', tempCtrl)

tempCtrl.$inject = ['$http', '$scope', '$rootScope', '$window', '$interval'];
function tempCtrl($http, $scope, $rootScope, $window, $interval) {

    var connection = null;
    var count = 0;
    var i;

    //promises();
    promisesBK();
    $scope.result   = 'Connecting...';
    $scope.status   = 'Connecting...';
    $scope.location = 'Location: *****';
    $scope.contador = ' Lap number: ***** ';
    $scope.tiempo   = ' Response time: *****';
    $scope.place    = 'Place: *****';

    $scope.return = function(){
        console.log('function return');
        promises();
        $state.go('inicio');
    }

    $scope.exit = function(){
        console.log('function exit');
        promises();
        $state.go('login');
    }

    $scope.reload = function(){
        console.log('function reload');
        // promises();
        // $state.transitionTo($state.current, $stateParams, {
        //     reload: true,
        //     inherit: false,
        //     notify: true
        // });
        promises();
        //$location.path('/coap');
        $window.location.reload();
    }

    $scope.desconnection = function(){
        promises();
        connection.close();
    }

     $scope.stop_reload = function(){
        promises();
        console.log('Stop reload');
    }

    function promisesBK(){
        console.log('function promises');
        $interval.cancel(promise26);
        promise26 = undefined;
        $interval.cancel(promise27);
        promise27 = undefined;
        $interval.cancel(promise28);
        promise28 = undefined;       
        $interval.cancel(promise29);
        promise29 = undefined;
        console.log('promise26: '+angular.isDefined(promise26));
        console.log('promise27: '+angular.isDefined(promise27));
        console.log('promise28: '+angular.isDefined(promise28));
        console.log('promise29: '+angular.isDefined(promise29));
    }

    function promises(){
        console.log('function promises');
        if (angular.isDefined(promise26)) {
            $interval.cancel(promise26);
            promise26 = undefined;
        }
        if (angular.isDefined(promise27)) {
            $interval.cancel(promise27);
            promise27 = undefined;
        }
        if (angular.isDefined(promise28)) {
            $interval.cancel(promise28);
            promise28 = undefined;
        }
        if (angular.isDefined(promise29)) {
            $interval.cancel(promise29);
            promise29 = undefined;
        }
        console.log('promise26: '+angular.isDefined(promise26));
        console.log('promise27: '+angular.isDefined(promise27));
        console.log('promise28: '+angular.isDefined(promise28));
        console.log('promise29: '+angular.isDefined(promise29));
    }
    
    // if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // if browser doesn't support WebSocket, just show some notification and exit
    if (!window.WebSocket) {
        var status = 'Sorry, but your browser doesn\'t ' + 'support WebSockets.';
        $scope.$apply(function(){
            $scope.status = status;
            $scope.result = 'Push reload button';
            $scope.location = 'Location: #####';
            $scope.contador = ' Lap number: -- ';
            $scope.tiempo = ' Response time: --';
            $scope.place = ' Place: --';
            console.log('Error. status error 1');
        });  
    }

    // var connection = new WebSocket(chariot);
    // console.log(connection);

    // open connection--overwrite default string for your value.
    function start(){
        connection = new WebSocket(chariot);
        connection.onopen = function () {
            console.log('Server Status On');

            // first we want users to enter their names
            var status = 'Server Status On';
            $scope.$apply(function(){
                $scope.status = status;
                $scope.result = 'Server ready!';
                $scope.location = 'Location: -----';
                $scope.contador = ' Lap number: -- ';
                $scope.tiempo = ' Response time: --';
                $scope.place = ' Place: --';
            });
            
        };

        // most important part - incoming messages
        connection.onmessage = function (event) {
            var aux = event.data;
            if (aux.length < 15){
                console.log(aux);
                $scope.$apply(function(){
                    $scope.tiempo = ' - Response Time: '+aux;
                });
            }else{
                var location = event.data.substring(0,13);
                var temp = event.data;
                var result = event.data.substring(35,39);
                $scope.$apply(function(){
                    if(result == '    '){
                        $scope.result = 'NOT FOUND';
                    }else{
                         $scope.result = result+' ºC';
                    }
                    $scope.location = 'Location: '+location;
                    $scope.contador = ' - Loop: '+i;
                    if (location == 'chariot.c3527'){
                        $scope.place = ' - Place: '+OFFICE;
                    }else if(location == 'chariot.c3528'){
                        $scope.place = ' - Place: '+BATHROOM;
                    }else if(location == 'chariot.c3526'){
                        $scope.place = ' - Place: '+KITCHEN;
                    }else if(location == 'chariot.c3529'){
                        $scope.place = ' - Place: '+BEDROOM;
                    }else{
                         $scope.place = ' - Place: '+'NOT FOUND';
                    }
                });
                console.log('Lap number: '+i);
                console.log(result);
                console.log(temp);
            }
        };

        connection.onerror = function(event){
           
            // just in case there were some problems with connection...
            console.log('error type: ',event);
            promises();
            check();
            if (count < 30){
                var status = 'Sorry, but there\'s some problem with your ' 
                       + 'connection or the server is down.';
                $scope.$apply(function(){
                    $scope.status = status;
                    $scope.result = 'Trying restart the server...';
                    $scope.location = 'Location: #####';
                    $scope.contador = ' Lap number: -- ';
                    $scope.tiempo = ' Response time: --';
                    $scope.place = ' Place: --';
                    console.log('Error. status error 2');
                });
            }else{
                var status = 'Sorry, it has impossible restart the server. The server is down';
                $scope.$apply(function(){
                    $scope.status = status;
                    $scope.result = 'Restart server manually';
                    $scope.location = 'Location: xxxxx';
                    $scope.contador = ' Lap number: -- ';
                    $scope.tiempo = ' Response time: --';
                    $scope.place = ' Place: --';
                    console.log('Error. status error 3');
                });
            }
            console.log('check: ',count);
            count++;
        }; 

        connection.onclose = function(){

            //reconnect now
            promises();
            console.log('Restarting the server...');
            check();
        };
    }

    function check(){
        if(!connection || connection.readyState == 3) start();
    }

    //start();
    setInterval(check, 5000);

    /**
     * Send mesage when user presses the buttons
     */

    $scope.chariot26 = function(){
        // promises();
        promisesBK();
        dis26 = true;
        dis27 = false;
        dis28 = false;
        dis29 = false;
        i = 0;

        function repeat26(){
            var msg = CHARIOT+SOURCE+6+DEST+SENSOR;
            console.log(msg);
            console.log('isDefined26: '+angular.isDefined(promise26));
            console.log('promise26: '+promise26);
            connection.send(msg);
            i++;
        }
        repeat26();
        promise26 = $interval(function() 
        { 
            repeat26();
        }, 
        20000);
        console.log(promise26);
    }

    $scope.chariot27 = function(){
        // promises();
        promisesBK();
        dis26 = false;
        dis27 = true;
        dis28 = false;
        dis29 = false;
        i = 0;

        function repeat27(){
            var msg= CHARIOT+SOURCE+7+DEST+SENSOR;
            console.log(msg);
            console.log('isDefined27: '+angular.isDefined(promise27));
            console.log('promise27: '+promise27);
            connection.send(msg);
            i++;
        }
        repeat27();
        promise27 = $interval(function() 
        { 
            repeat27();
        }, 
        20000);  
        console.log(promise27);
    }

    $scope.chariot28 = function(){
        // promises();
        promisesBK();
        dis26 = false;
        dis27 = false;
        dis28 = true;
        dis29 = false;
        i = 0;

        function repeat28(){
            var msg= CHARIOT+SOURCE+8+DEST+SENSOR;
            console.log(msg);
            console.log('isDefined28: '+angular.isDefined(promise28));
            console.log('promise28: '+promise28);
            connection.send(msg);
            i++;
        }
        repeat28();
        promise28 = $interval(function() 
        { 
            repeat28();
        }, 
        20000);
        console.log(promise28);
    }

    $scope.chariot29 = function(){
        // promises();
        promisesBK();
        dis26 = false;
        dis27 = false;
        dis28 = false;
        dis29 = true;
        i = 0;
        // if (angular.isDefined(promise27)) {
        //     $interval.cancel(promise27);
        //     promise27 = undefined;
        // }
        // if (angular.isDefined(promise28)) {
        //     $interval.cancel(promise28);
        //     promise28 = undefined;
        // }
        // if (angular.isDefined(promise26)) {
        //     $interval.cancel(promise26);
        //     promise26 = undefined;
        // }
        // $interval.cancel(promise27);
        // promise27 = undefined;
        // $interval.cancel(promise28);
        // promise28 = undefined;
        // $interval.cancel(promise26);
        // promise26 = undefined;

        function repeat29(){
            var msg= CHARIOT+SOURCE+9+DEST+SENSOR;
            console.log(msg);
            console.log('isDefined29: '+angular.isDefined(promise29));
            console.log('promise29: '+promise29);
            connection.send(msg);
            i++;
        }
        repeat29();
        promise29 = $interval(function() 
        { 
            repeat29();
        }, 
        20000);
        console.log(promise29);
    }

    /**
     * This method is optional. If the server wasn't able to respond to the
     * in 30 seconds then show some error message to notify the user that
     * something is wrong. We're talking to an Arduino WoT!
     */

    setInterval(function() {
        if (connection.readyState !== 1) {
            var status = 'Error ' 
                        + 'Unable to communicate ' 
                        + 'with the WebSocket server.';
            $scope.$apply(function(){
                $scope.status = status;
                $scope.result = 'Restart server manually';
                $scope.location = 'Location: ------';
                $scope.contador = ' Lap number: -- ';
                $scope.tiempo = ' Response time: --';
                $scope.place = ' Place: --';
                console.log('Error. status error 3');
            });  
        }
    }, 5000);
}



