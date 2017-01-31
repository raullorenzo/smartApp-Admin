/**
 * Created by raul on 5/12/16.
 */

//main.js
const chariot       = 'ws://192.168.0.195:1337';
const CHARIOT       = 'coap://chariot.';
const SOURCE        = 'c352';
const DEST          = '.local/';
const SENSOR        = 'sensors/tmp275-c?get';
const BATHROOM      = 'Chariot 3528';
const BEDROOM       = 'Chariot 3529';
const OFFICE        = 'Chariot 3527';
const KITCHEN       = 'Chariot 3526';
const AVG           = 'Temperatura Media';

angular
    .module('app')
    .controller('cardChartCtrl1', cardChartCtrl1)
    .controller('cardChartCtrl2', cardChartCtrl2)
    .controller('cardChartCtrl3', cardChartCtrl3)
    .controller('cardChartCtrl4', cardChartCtrl4)
    .controller('trafficDemoCtrl', trafficDemoCtrl)
    .controller('nodesTableCtrl', nodesTableCtrl)
    .controller('socialBoxCtrl', socialBoxCtrl)
    .controller('sparklineChartCtrl', sparklineChartCtrl)
    .controller('barChartCtrl', barChartCtrl)
    .controller('horizontalBarsCtrl', horizontalBarsCtrl)
    .controller('horizontalBarsType2Ctrl', horizontalBarsType2Ctrl)
    .controller('usersTableCtrl', usersTableCtrl)

//convert Hex to RGBA
function convertHex(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = 'rgba('+r+','+g+','+b+','+opacity/50+')';
    return result;
}

cardChartCtrl1.$inject = ['$http', '$scope', '$state'];
function cardChartCtrl1($http, $scope, $state, $moment){
        $scope.goTo26 = function () {
            console.log('go to sensor26');
            $state.go('app.nodes.nodo1');
        };
        $http.get('/temp/GetTemp')
            .success(function (data) {
                var media26 = 0;
                var sum26 = 0;
                var loc26 = [];
                var temp26 = [];
                var data26 = [];
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

cardChartCtrl2.$inject = ['$http', '$scope', '$state'];
function cardChartCtrl2($http, $scope, $state, $moment){
    $scope.goTo27 = function () {
        console.log('go to sensor27');
        $state.go('app.nodes.nodo2');
    };
    $http.get('/temp/GetTemp')
            .success(function (data) {
                var media27 = 0;
                var sum27 = 0;
                var loc27 = [];
                var temp27 = [];
                var data27 = [];
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

cardChartCtrl3.$inject = ['$http', '$scope', '$state'];
function cardChartCtrl3($http, $scope, $state, $moment){
        $scope.goTo28 = function () {
            console.log('go to sensor28');
            $state.go('app.nodes.nodo3');
        };
        $http.get('/temp/GetTemp')
            .success(function (data) {
                var media28 = 0;
                var sum28 = 0;
                var loc28 = [];
                var temp28 = [];
                var data28 = [];
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

cardChartCtrl4.$inject = ['$http', '$scope', '$state'];
function cardChartCtrl4($http, $scope, $state, $moment){
        $scope.goTo29 = function () {
            console.log('go to sensor29');
            $state.go('app.nodes.nodo4');
        };
    $http.get('/temp/GetTemp')
            .success(function (data) {
                var media29 = 0;
                var sum29 = 0;
                var loc29 = [];
                var temp29 = [];
                var data29 = [];
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

trafficDemoCtrl.$inject = ['$http', '$scope'];
function trafficDemoCtrl($http, $scope, $moment){
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
                    }
                }
                var maximoValor = [max26, max27, max28, max29];
                var mx = getMaxOfArray(maximoValor);
                // console.log('maxTot:',mx);
                $scope.maxTot = mx;
                var minimoValor = [min26, min27, min28, min26];
                var mn = getMinOfArray(minimoValor);
                // console.log('maxTot:',mx);
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
                $scope.series2 = [KITCHEN];
                $scope.data2 = [
                    temp26
                ];
                $scope.labels3 = data27;
                $scope.series3 = [OFFICE];
                $scope.data3 = [
                    temp27
                ];
                $scope.labels4 = data28;
                $scope.series4 = [BATHROOM];
                $scope.data4 = [
                    temp28
                ];
                $scope.labels5 = data29;
                $scope.series5 = [BEDROOM];
                $scope.data5 = [
                    temp29
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


nodesTableCtrl.$inject = ['$http', '$scope', '$stateParams', 'Temps', 'ngTableParams'];
function nodesTableCtrl($http, $scope, $stateParams, Temps, ngTableParams) {
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
dateRangeCtrl.$inject = ['$scope'];
function dateRangeCtrl($scope) {
    $scope.date = {
       startDate: moment().subtract(5, 'days'),
       endDate: moment()
   };
   $scope.opts = {
        drops: 'down',
        opens: 'left',
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 days': [moment().subtract(7, 'days'), moment()],
            'Last 30 days': [moment().subtract(30, 'days'), moment()],
            'This month': [moment().startOf('month'), moment().endOf('month')]
        }
    };

    //Watch for date changes
    $scope.$watch('date', function(newDate) {
        //console.log('New date set: ', newDate);
    }, false);

    function gd(year, month, day) {
        return new Date(year, month - 1, day).getTime();
    }
}

socialBoxCtrl.$inject = ['$scope'];
function socialBoxCtrl($scope) {

    $scope.labels = ['January','February','March','April','May','June','July'];
    $scope.data1 = [
        [65, 59, 84, 84, 51, 55, 40]
    ];
    $scope.data2 = [
        [1, 13, 9, 17, 34, 41, 38]
    ];
    $scope.data3 = [
        [78, 81, 80, 45, 34, 12, 40]
    ];
    $scope.data4 = [
        [35, 23, 56, 22, 97, 23, 64]
    ];
    $scope.colors = [{
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff'
    }];
    $scope.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display:false,
            }],
            yAxes: [{
                display:false,
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
}

sparklineChartCtrl.$inject = ['$scope'];
function sparklineChartCtrl($scope) {
    $scope.labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    $scope.data1 = [
        [65, 59, 84, 84, 51, 55, 40]
    ];
    $scope.data2 = [
        [1, 13, 9, 17, 34, 41, 38]
    ];
    $scope.data3 = [
        [78, 81, 80, 45, 34, 12, 40]
    ];
    $scope.data4 = [
        [35, 23, 56, 22, 97, 23, 64]
    ];
    $scope.default = [{
        backgroundColor: 'transparent',
        borderColor: '#d1d4d7',
    }];
    $scope.primary = [{
        backgroundColor: 'transparent',
        borderColor: brandPrimary,
    }];
    $scope.info = [{
        backgroundColor: 'transparent',
        borderColor: brandInfo,
    }];
    $scope.danger = [{
        backgroundColor: 'transparent',
        borderColor: brandDanger,
    }];
    $scope.warning = [{
        backgroundColor: 'transparent',
        borderColor: brandWarning,
    }];
    $scope.success = [{
        backgroundColor: 'transparent',
        borderColor: brandSuccess,
    }];
    $scope.options = {
        scales: {
            xAxes: [{
                display:false,
            }],
            yAxes: [{
                display:false,
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
}

horizontalBarsCtrl.$inject = ['$scope'];
function horizontalBarsCtrl($scope) {

    $scope.data = [
        {
            day: 'Monday',    new: 34, recurring: 78
        },
        {
            day: 'Tuesday',   new: 56, recurring: 94
        },
        {
            day: 'Wednesday', new: 12, recurring: 67
        },
        {
            day: 'Thursday',  new: 43, recurring: 91
        },
        {
            day: 'Friday',    new: 22, recurring: 73
        },
        {
            day: 'Saturday',  new: 53, recurring: 82
        },
        {
            day: 'Sunday',    new: 9,  recurring: 69
        }
    ];
}

horizontalBarsType2Ctrl.$inject = ['$scope'];
function horizontalBarsType2Ctrl($scope) {

    $scope.gender = [
        {
            title: 'Male',
            icon: 'icon-user',
            value: 43
        },
        {
            title: 'Female',
            icon: 'icon-user-female',
            value: 37
        },
    ];

    $scope.source = [
        {
            title: 'Organic Search',
            icon: 'icon-globe',
            value: 191235,
            percent: 56
        },
        {
            title: 'Facebook',
            icon: 'icon-social-facebook',
            value: 51223,
            percent: 15
        },
        {
            title: 'Twitter',
            icon: 'icon-social-twitter',
            value: 37564,
            percent: 11
        },
        {
            title: 'LinkedIn',
            icon: 'icon-social-linkedin',
            value: 27319,
            percent: 8
        }
    ];
}

usersTableCtrl.$inject = ['$scope', '$timeout'];
function usersTableCtrl($scope, $timeout) {

    $scope.users = [
        {
            avatar: '1.jpg',
            status: 'active',
            name: 'Yiorgos Avraamu',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'USA',
            flag: 'USA.png',
            usage: '50',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'mastercard',
            activity: '10 sec ago',
            satisfaction: '48'
        },
        {
            avatar: '2.jpg',
            status: 'busy',
            name: 'Avram Tarasios',
            new: false,
            registered: 'Jan 1, 2015',
            country: 'Brazil',
            flag: 'Brazil.png',
            usage: '10',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'visa',
            activity: '5 minutes ago',
            satisfaction: '61'
        },
        {
            avatar: '3.jpg',
            status: 'away',
            name: 'Quintin Ed',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'India',
            flag: 'India.png',
            usage: '74',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'stripe',
            activity: '1 hour ago',
            satisfaction: '33'
        },
        {
            avatar: '4.jpg',
            status: 'offline',
            name: 'Enéas Kwadwo',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'France',
            flag: 'France.png',
            usage: '98',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'paypal',
            activity: 'Last month',
            satisfaction: '23'
        },
        {
            avatar: '5.jpg',
            status: 'active',
            name: 'Agapetus Tadeáš',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'Spain',
            flag: 'Spain.png',
            usage: '22',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'google',
            activity: 'Last week',
            satisfaction: '78'
        },
        {
            avatar: '6.jpg',
            status: 'busy',
            name: 'Friderik Dávid',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'Poland',
            flag: 'Poland.png',
            usage: '43',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'amex',
            activity: 'Yesterday',
            satisfaction: '11'
        }
    ]
}

clientsTableCtrl.$inject = ['$scope', '$timeout'];
function clientsTableCtrl($scope, $timeout) {

    $scope.users = [
        {
            avatar: '1.jpg',
            status: 'active',
            name: 'Yiorgos Avraamu',
            registered: 'Jan 1, 2015',
            activity: '10 sec ago',
            transactions: 189,
            comments: 72
        },
        {
            avatar: '2.jpg',
            status: 'busy',
            name: 'Avram Tarasios',
            registered: 'Jan 1, 2015',
            activity: '5 minutes ago',
            transactions: 156,
            comments: 76
        },
        {
            avatar: '3.jpg',
            status: 'away',
            name: 'Quintin Ed',
            registered: 'Jan 1, 2015',
            activity: '1 hour ago',
            transactions: 189,
            comments: 72
        },
        {
            avatar: '4.jpg',
            status: 'offline',
            name: 'Enéas Kwadwo',
            registered: 'Jan 1, 2015',
            activity: 'Last month',
            transactions: 189,
            comments: 72
        },
        {
            avatar: '5.jpg',
            status: 'active',
            name: 'Agapetus Tadeáš',
            registered: 'Jan 1, 2015',
            activity: 'Last week',
            transactions: 189,
            comments: 72
        },
        {
            avatar: '6.jpg',
            status: 'busy',
            name: 'Friderik Dávid',
            registered: 'Jan 1, 2015',
            activity: 'Yesterday',
            transactions: 189,
            comments: 72
        }
    ]
}

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

barChartCtrl.$inject = ['$scope'];
function barChartCtrl($scope) {

    var elements = 16;
    var labels = [];
    var data = [];
    var data1 = [];
    var data2 = [];

    for (var i = 0; i <= elements; i++) {
        labels.push('1');
        data.push(random(40,100));
        data1.push(random(20,100));
        data2.push(random(60,100));
    }

    $scope.labels = labels;

    $scope.data = [data];
    $scope.data1 = [data1];
    $scope.data2 = [data2];

    $scope.options = {
        showScale: false,
        scaleFontSize: 0,
        scaleShowGridLines: false,
        barStrokeWidth : 0,
        barBackground: 'rgba(221, 224, 229, 1)',

        // pointDot :false,
        // scaleLineColor: 'transparent',
    };

    $scope.colors = [{
        backgroundColor : brandInfo,
		borderColor : 'rgba(0,0,0,1)',
		highlightFill: '#818a91',
        pointborderColor: '#000'
    }];
}
