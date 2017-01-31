/**
 * Created by raul on 5/12/16.
 */

//coap
angular
    // .module('app', ['ngTable', 'ngResource'])
    .module('app')
    .controller('node1Ctrl', node1Ctrl)
    .controller('node2Ctrl', node2Ctrl)
    .controller('node3Ctrl', node3Ctrl)
    .controller('node4Ctrl', node4Ctrl)
    .controller('nodesCtrl', nodesCtrl)
    .controller('TableCtrl', TableCtrl)

//convert Hex to RGBA
function convertHex(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);
    result = 'rgba('+r+','+g+','+b+','+opacity/50+')';
    return result;
}

node1Ctrl.$inject = ['$http', '$scope', '$state'];
function node1Ctrl($http, $scope, $state, $moment){
    $scope.location = 'Location: chariot.c3526';
    $http.get('/temp/GetTemp')
            .success(function (data) {
                var media26 = 0;
                var sum26 = 0;
                var loc26 = [];
                var temp26 = [];
                var data26 = [];
                var max26 = 0;
                var min26 = 0;
                var dateNow = new Date().getTime();
                var currentDay = moment(dateNow).calendar();
                console.log(currentDay);
                $scope.temps = data;            
                for (var i=0; i<data.length; i++){
                    if (data[i].location == 'chariot.c3526'){
                        loc26.push(data[i].location);
                        temp26.push(data[i].temperature);
                        var myDate26 = +new Date(data[i].created);
                        var currentDay26 = moment(myDate26).calendar();
                        data26.push(currentDay26);
                        sum26 = sum26 + parseFloat(data[i].temperature);
                    }
                }
                max26 = Math.max.apply(null, temp26);
                $scope.max26 = max26;
                min26 = Math.min.apply(null, temp26);
                $scope.min26 = min26;
                media26 = sum26 / data26.length;
                var mediaDec26 = media26.toFixed(1);
                $scope.media26 = mediaDec26;
                $scope.labels = data26;
                $scope.series = [KITCHEN];
                $scope.data = [
                    temp26
                ];
                $scope.onClick = function (points, evt) {
                    console.log(points, evt);
                };
                $scope.colors = [{
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                }];
                $scope.options = {
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            display: false
                        }],
                        yAxes: [{
                            display: false
                        }]
                    },
                    elements: {
                        line: {
                            borderWidth: 2
                        },
                        point: {
                            radius: 0,
                            hitRadius: 10,
                            hoverRadius: 4,
                        },
                    },
                }
        });
}

node2Ctrl.$inject = ['$http', '$scope', '$state'];
function node2Ctrl($http, $scope, $state, $moment){
    $scope.location = 'Location: chariot.c3527';
    $http.get('/temp/GetTemp')
            .success(function (data) {
                var media27 = 0;
                var sum27 = 0;
                var loc27 = [];
                var temp27 = [];
                var data27 = [];
                var max27 = 0;
                var min27 = 0;
                var dateNow = new Date().getTime();
                var currentDay = moment(dateNow).calendar();
                console.log(currentDay);
                $scope.temps = data;            
                for (var i=0; i<data.length; i++){
                    if (data[i].location == 'chariot.c3527'){
                        loc27.push(data[i].location);
                        temp27.push(data[i].temperature);
                        var myDate27 = +new Date(data[i].created);
                        var currentDay27 = moment(myDate27).calendar();
                        data27.push(currentDay27);
                        sum27 = sum27 + parseFloat(data[i].temperature);
                    }
                }
                max27 = Math.max.apply(null, temp27);
                $scope.max27 = max27;
                min27 = Math.min.apply(null, temp27);
                $scope.min27 = min27;
                media27 = sum27 / data27.length;
                var mediaDec27 = media27.toFixed(1);
                $scope.media27 = mediaDec27;
                $scope.labels = data27;
                $scope.series = [OFFICE];
                $scope.data = [
                    temp27
                ];
                $scope.onClick = function (points, evt) {
                    console.log(points, evt);
                };
                $scope.colors = [{
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                }];
                $scope.options = {
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            display: false
                        }],
                        yAxes: [{
                            display: false
                        }]
                    },
                    elements: {
                        line: {
                            borderWidth: 2
                        },
                        point: {
                            radius: 0,
                            hitRadius: 10,
                            hoverRadius: 4,
                        },
                    },
                }   
    });
}

node3Ctrl.$inject = ['$http', '$scope', '$state'];
function node3Ctrl($http, $scope, $state, $moment){
    $scope.location = 'Location: chariot.c3528';
    $http.get('/temp/GetTemp')
            .success(function (data) {
                var media28 = 0;
                var sum28 = 0;
                var loc28 = [];
                var temp28 = [];
                var data28 = [];
                var max28 = 0;
                var min28 = 0;
                var dateNow = new Date().getTime();
                var currentDay = moment(dateNow).calendar();
                console.log(currentDay);
                $scope.temps = data;            
                for (var i=0; i<data.length; i++){
                    if(data[i].location == 'chariot.c3528'){
                        loc28.push(data[i].location);
                        temp28.push(data[i].temperature);
                        var myDate28 = +new Date(data[i].created);
                        var currentDay28 = moment(myDate28).calendar();
                        data28.push(currentDay28);
                        sum28 = sum28 + parseFloat(data[i].temperature);
                    }
                }
                max28 = Math.max.apply(null, temp28);
                $scope.max28 = max28;
                min28 = Math.min.apply(null, temp28);
                $scope.min28 = min28;
                media28 = sum28 / data28.length;
                var mediaDec28 = media28.toFixed(1);
                $scope.media28 = mediaDec28;
                $scope.labels = data28;
                $scope.series = [BATHROOM];
                $scope.data = [
                    temp28
                ];
                $scope.onClick = function (points, evt) {
                    console.log(points, evt);
                };
                $scope.colors = [{
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                }];
                $scope.options = {
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            display: false
                        }],
                        yAxes: [{
                            display: false
                        }]
                    },
                    elements: {
                        line: {
                            borderWidth: 2
                        },
                        point: {
                            radius: 0,
                            hitRadius: 10,
                            hoverRadius: 4,
                        },
                    },
                }
    });
}

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

node4Ctrl.$inject = ['$http', '$scope', '$state'];
function node4Ctrl($http, $scope, $state, $moment){
    $scope.location = 'Location: chariot.c3529';
    $http.get('/temp/GetTemp')
            .success(function (data) {
                var media29 = 0;
                var sum29 = 0;
                var loc29 = [];
                var temp29 = [];
                var data29 = [];
                var max29 = 0;
                var min29 = 0;
                var dateNow = new Date().getTime();
                var currentDay = moment(dateNow).calendar();
                console.log(currentDay);
                $scope.temps = data;            
                for (var i=0; i<data.length; i++){
                    if(data[i].location == 'chariot.c3529'){
                        loc29.push(data[i].location);
                        temp29.push(data[i].temperature);
                        var myDate29 = +new Date(data[i].created);
                        var currentDay29 = moment(myDate29).calendar();
                        data29.push(currentDay29);
                        sum29 = sum29 + parseFloat(data[i].temperature);
                    }
                }
                max29 = Math.max.apply(null, temp29);
                $scope.max29 = max29;
                min29 = Math.min.apply(null, temp29);
                $scope.min29 = min29;
                media29 = sum29 / data29.length;
                var mediaDec29 = media29.toFixed(1);
                $scope.media29 = mediaDec29;
                $scope.labels = data29;
                $scope.series = [BEDROOM];
                $scope.data = [
                    temp29
                ];
                $scope.onClick = function (points, evt) {
                    console.log(points, evt);
                };
                $scope.colors = [{
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                }];
                $scope.options = {
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            display: false
                        }],
                        yAxes: [{
                            display: false
                        }]
                    },
                    elements: {
                        line: {
                            borderWidth: 2
                        },
                        point: {
                            radius: 0,
                            hitRadius: 10,
                            hoverRadius: 4,
                        },
                    },
                }
    }); 
}

nodesCtrl.$inject = ['$http', '$scope'];
function nodesCtrl($http, $scope, $moment){
    moment.updateLocale('es', {
            calendar : {
                lastDay : '[Ayer a las] LT',
                sameDay : '[Hoy a las] LT',
                lastWeek : '[último] dddd [a las] LT',
                nextWeek : 'dddd [a las] LT',
                sameElse : 'L'
            }
    });
    $http.get('/temp/GetTemp')
        .success(function (data) {
                var media26 = 0;
                var media27 = 0;
                var media28 = 0;
                var media29 = 0;
                var sum26 = 0;
                var sum27 = 0;
                var sum28 = 0;
                var sum29 = 0;
                var avg26 = [];
                var avg27 = [];
                var avg28 = [];
                var avg29 = [];
                var loc26 = [];
                var loc27 = [];
                var loc28 = [];
                var loc29 = [];
                var temp26 = [];
                var temp27 = [];
                var temp28 = [];
                var temp29 = [];
                var data26 = [];
                var data27 = [];
                var data28 = [];
                var data29 = [];
                var dateNow = new Date().getTime();
                var dateNow2 = new Date();
                var currentDay = moment(dateNow).calendar();
                //moment().format('LLLL'); // Wednesday, January 25, 2017 10:51 PM
                var today = moment(dateNow2).format('LLLL');;
                console.log(currentDay);
                console.log(today);
                console.log(dateNow2);
                console.log(dateNow);
                $scope.today = today;
                $scope.temps = data;            
                for (var i=0; i<data.length; i++){
                    if (data[i].location == 'chariot.c3526'){
                        loc26.push(data[i].location);
                        temp26.push(parseFloat(data[i].temperature));
                        var myDate26 = +new Date(data[i].created);
                        var currentDay26 = moment(myDate26).calendar();
                        data26.push(currentDay26);
                        var max26 = getMaxOfArray(temp26);
                        var min26 = getMinOfArray(temp26);
                        $scope.max26 = max26;
                        $scope.min26 = min26;
                        sum26 = sum26 + parseFloat(data[i].temperature);
                    } else if (data[i].location == 'chariot.c3527'){
                        loc27.push(data[i].location);
                        temp27.push(parseFloat(data[i].temperature));
                        var myDate27 = +new Date(data[i].created);
                        var currentDay27 = moment(myDate27).calendar();
                        data27.push(currentDay27);
                        var max27 = getMaxOfArray(temp27);
                        var min27 = getMinOfArray(temp27);
                        $scope.max27 = max27;
                        $scope.min27 = min27;
                        sum27 = sum27 + parseFloat(data[i].temperature);
                    } else if(data[i].location == 'chariot.c3528'){
                        loc28.push(data[i].location);
                        temp28.push(parseFloat(data[i].temperature));
                        var myDate28 = +new Date(data[i].created);
                        var currentDay28 = moment(myDate28).calendar();
                        data28.push(currentDay28);
                        var max28 = getMaxOfArray(temp28);
                        var min28 = getMinOfArray(temp28);
                        $scope.max28 = max28;
                        $scope.min28 = min28;
                        sum28 = sum28 + parseFloat(data[i].temperature);
                    } else if(data[i].location == 'chariot.c3529'){
                        loc29.push(data[i].location);
                        temp29.push(parseFloat(data[i].temperature));
                        var myDate29 = +new Date(data[i].created);
                        var currentDay29 = moment(myDate29).calendar();
                        data29.push(currentDay29);
                        var max29 = getMaxOfArray(temp29);
                        var min29 = getMinOfArray(temp29);
                        $scope.max29 = max29;
                        $scope.min29 = min29;
                        sum29 = sum29 + parseFloat(data[i].temperature);
                    }
                }
                media26 = sum26 / data26.length;
                var mediaDec26 = media26.toFixed(1);
                $scope.media26 = mediaDec26;
                media27 = sum27 / data27.length;
                var mediaDec27 = media27.toFixed(1);
                $scope.media27 = mediaDec27;
                media28 = sum28 / data28.length;
                var mediaDec28 = media28.toFixed(1);
                $scope.media28 = mediaDec28;
                media29 = sum29 / data29.length;
                var mediaDec29 = media29.toFixed(1);
                $scope.media29 = mediaDec29;
                for(i=0; i<data26.length; i++){
                    avg26.push(mediaDec26);
                }
                for(i=0; i<data27.length; i++){
                    avg27.push(mediaDec27);
                }
                for(i=0; i<data28.length; i++){
                    avg28.push(mediaDec28);
                }
                for(i=0; i<data29.length; i++){
                    avg29.push(mediaDec29);
                }
                console.log('media26:',media26);
                var maximoValor = [max26, max27, max28, max29];
                var mx = getMaxOfArray(maximoValor);
                console.log('maxTot:',mx);
                $scope.maxTot = mx;
                var minimoValor = [min26, min27, min28, min26];
                var mn = getMinOfArray(minimoValor);
                console.log('maxTot:',mx);
                $scope.minTot = mn;
                function getMaxOfArray(numArray) {
                    return Math.max.apply(null, numArray);
                }
                function getMinOfArray(numArray) {
                    return Math.min.apply(null, numArray);
                }
                $scope.verGraf = function (op){
                    if(op == 1){
                        console.log('Día');
                    } else if(op == 2){
                        console.log('Mes');
                    } else if(op == 3){
                        console.log('Año');
                    }
                }
                function dateTemp(data26,data27,data28,data29){
                    if(data26.length > data27.length){
                        console.log('data26',data26.length);
                        return data26;
                    }else if(data27.length > data28.length){
                        console.log('data27',data27.length);
                        return data27;
                    }else if(data28.length > data29.length){
                        console.log('data28',data28.length);
                        return data28;
                    }else{
                        console.log('data29',data29.length);
                        return data29;
                    }
                }
                $scope.labels = dateTemp(data26,data27,data28,data29);
                $scope.series = [KITCHEN, OFFICE, BATHROOM, BEDROOM];
                $scope.data = [
                    temp26,
                    temp27,
                    temp28,
                    temp29
                ];
                $scope.labels2 = data26;
                $scope.series2 = [KITCHEN, AVG];
                $scope.data2 = [
                    temp26,
                    avg26
                ];
                $scope.labels3 = data27;
                $scope.series3 = [OFFICE, AVG];
                $scope.data3 = [
                    temp27,
                    avg27
                ];
                $scope.labels4 = data28;
                $scope.series4 = [BATHROOM, AVG];
                $scope.data4 = [
                    temp28,
                    avg28
                ];
                $scope.labels5 = data29;
                $scope.series5 = [BEDROOM, AVG];
                $scope.data5 = [
                    temp29,
                    avg29
                ];
                $scope.colors = [{
                    backgroundColor: convertHex(brandInfo,10),
                    borderColor: brandInfo,
                    pointHoverBackgroundColor: '#fff'

                }, {
                    backgroundColor: 'transparent',
                    borderColor: brandSuccess,
                    pointHoverBackgroundColor: '#fff'
                },{
                    backgroundColor: 'transparent',
                    borderColor: brandDanger,
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 1,
                    borderDash: [8, 5]
                }];
                $scope.options = {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                drawOnChartArea: false,
                            },
                            
                        }],
                        yAxes: [{
                            // ticks: {
                            //     beginAtZero: false,
                            //     maxTicksLimit: 10
                            // }
                            ticks: {
                                display: true,
                                min: Math.min.apply(Math, $scope.data[0]) - 3,
                                max: Math.max.apply(Math, $scope.data[0]) + 3,
                            }
                        }]
                    },
                    elements: {
                        point: {
                            radius: 0,
                            hitRadius: 10,
                            hoverRadius: 4,
                            hoverBorderWidth: 3,
                        }
                    },
                }
    });
}

// nodesTableCtrl.$inject = ['$http', '$scope', '$state', '$location', 'Temps', '$stateParams', 'ngTableParams'];
// function nodesTableCtrl($http, $scope, $state, $location, Temps, $stateParams, ngTableParams) {
TableCtrl.$inject = ['$http', '$scope', '$stateParams', 'Temps', 'ngTableParams']; 
function TableCtrl($http, $scope, $stateParams, Temps, ngTableParams) {
    $scope.result = '--.- ºC';
    var location = $stateParams.location;
    var params;
    var settings;
    params =
        {
            page: 1,
            count: 8
        };
        settings =
        {
            total: 0,
            counts: [4, 8, 16, 32, 96, 192, 288],
            filterDelay: 100,
            getData: function ($defer, params) {
                Temps.get(params.url(), function (response) {
                    params.total(response.total);
                    $defer.resolve(response.results);

                });
            }
        };

    $scope.tableParams = new ngTableParams(params, settings);
    $scope.demotableParams = new ngTableParams(params, settings);
    console.log('$scope.tableParams:',$scope.tableParams);
    $scope.delTemp = function (temp) {
        console.log(temp);
        swal({
            title: "¿Estás Seguro/a?",
            text: "¡Vas a borrar la temperatura de " + temp.location + " (" + temp.temperature + "ºC) de la base de datos!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55", confirmButtonText: "Sí, borrar!",
            cancelButtonText: "No, cancelar!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function (isConfirm) {
            if (isConfirm) {
                if (temp) {
                    $http.delete('/temp/DelTempbyID/' + temp._id)
                        .success(function (data) {
                            swal("Eliminada temperatura ", temp.location + " (" + temp.temperature + "ºC) de la base de datos", "success");
                            $scope.tableParams.reload();
                        })
                        .error(function (data) {
                            console.log('Error: ' + data);
                        });
                }
            } else {
                swal("Cancelado", "Has decidido no borrar la temperatura " + temp.location + " (" + temp.temperature + "ºC) ", "error");
            }
        });
    };
}