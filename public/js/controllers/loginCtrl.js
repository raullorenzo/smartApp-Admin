/**
 * Created by raul on 5/12/16.
 */

//login
//var socket = io ({forceNew: true});
angular
    .module('app')
    .controller('loginCtrl', function ($state, $http, $scope, $window) {
        var box = {};
        $scope.userInfo = {};
        box = $scope.userInfo;
        $scope.login = function () {
            console.log("box", box);
            $http.post('/usuario/Login', box).success(function (data) {
                console.log(data);
                if (data.loginSuccessful == true) {
                    if (data.usuario[0].login == 'admin' || data.usuario[0].password == 'admin') {
                        //FlashService.Success('Login correcto', true);
                        //$window.location.href = '/administradorapp/administrador.html'
                        $state.go('app.main');
                    }
                    else {

                        //FlashService.Success('Login correcto', true);
                        $state.go('app.main');
                        //$window.location.href = ('/usuarioregistradoapp/usuarioregistrado.html?' + data.usuario[0]._id+ '?'+ data.usuario[0].login)
                    }
                }
                else {
                    console.log("LOGIN error");
                }
            }).error(function (error) {
                //FlashService.Error('Login incorrecto', true);
                $state.go('appSimple.login');
            })
        }; 
});
