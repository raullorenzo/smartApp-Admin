/**
 * Created by raul on 5/12/16.
 */

//routes
angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider',  function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
        $stateProvider
            .state('app.icons', {
                url: "/icons",
                abstract: true,
                template: '<ui-view></ui-view>',
                ncyBreadcrumb: {
                    label: 'Icons'
                }
            })
            .state('app.icons.fontawesome', {
                url: '/font-awesome',
                templateUrl: 'views/icons/font-awesome.html',
                ncyBreadcrumb: {
                    label: 'Font Awesome'
                }
            })
            .state('app.icons.simplelineicons', {
                url: '/simple-line-icons',
                templateUrl: 'views/icons/simple-line-icons.html',
                ncyBreadcrumb: {
                    label: 'Simple Line Icons'
                }
            })
            .state('app.components', {
                url: "/components",
                abstract: true,
                template: '<ui-view></ui-view>',
                ncyBreadcrumb: {
                    label: 'Components'
                }
            })
            .state('app.components.buttons', {
                url: '/buttons',
                templateUrl: 'views/components/buttons.html',
                ncyBreadcrumb: {
                    label: 'Buttons'
                }
            })
            .state('app.components.social-buttons', {
                url: '/social-buttons',
                templateUrl: 'views/components/social-buttons.html',
                ncyBreadcrumb: {
                    label: 'Social Buttons'
                }
            })
            .state('app.components.cards', {
                url: '/cards',
                templateUrl: 'views/components/cards.html',
                ncyBreadcrumb: {
                    label: 'Cards'
                }
            })
            .state('app.components.forms', {
                url: '/forms',
                templateUrl: 'views/components/forms.html',
                ncyBreadcrumb: {
                    label: 'Forms'
                }
            })
            .state('app.components.switches', {
                url: '/switches',
                templateUrl: 'views/components/switches.html',
                ncyBreadcrumb: {
                    label: 'Switches'
                }
            })
            .state('app.components.tables', {
                url: '/tables',
                templateUrl: 'views/components/tables.html',
                ncyBreadcrumb: {
                    label: 'Tables'
                }
            })
            .state('app.nodes', {
                url: "/nodes",
                abstract: true,
                template: '<ui-view></ui-view>',
                ncyBreadcrumb: {
                    label: 'Nodes'
                }
            })
            .state('app.nodes.nodo1', {
                url: '/nodo1',
                templateUrl: 'views/nodes/nodo1.html',
                ncyBreadcrumb: {
                    label: 'chariot.c3526'
                },
                //page subtitle goes here
                params: { subtitle: 'Temperature of Node 1' },
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load([
                            {
                                serie: true,
                                name: 'chart.js',
                                files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
                            },
                        ]);
                    }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load controllers
                        return $ocLazyLoad.load({
                            files: ['js/controllers/coap.js', 'js/controllers/sensTemp.js']
                        });
                    }]
                }
            })
            .state('app.nodes.nodo2', {
                url: '/nodo2',
                templateUrl: 'views/nodes/nodo2.html',
                ncyBreadcrumb: {
                    label: 'chariot.c3527'
                },
                //page subtitle goes here
                params: { subtitle: 'Temperature of Node 2' },
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load([
                            {
                                serie: true,
                                name: 'chart.js',
                                files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
                            },
                        ]);
                    }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load controllers
                        return $ocLazyLoad.load({
                            files: ['js/controllers/coap.js', 'js/controllers/sensTemp.js']
                        });
                    }]
                }
            })
            .state('app.nodes.nodo3', {
                url: '/nodo3',
                templateUrl: 'views/nodes/nodo3.html',
                ncyBreadcrumb: {
                    label: 'chariot.c3528'
                },
                //page subtitle goes here
                params: { subtitle: 'Temperature of Node 3' },
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load([
                            {
                                serie: true,
                                name: 'chart.js',
                                files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
                            },
                        ]);
                    }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load controllers
                        return $ocLazyLoad.load({
                            files: ['js/controllers/coap.js', 'js/controllers/sensTemp.js']
                        });
                    }]
                }
            })
            .state('app.nodes.nodo4', {
                url: '/nodo4',
                templateUrl: 'views/nodes/nodo4.html',
                ncyBreadcrumb: {
                    label: 'chariot.c3529'
                },
                //page subtitle goes here
                params: { subtitle: 'Temperature of Node 4' },
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load([
                            {
                                serie: true,
                                name: 'chart.js',
                                files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
                            },
                        ]);
                    }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load controllers
                        return $ocLazyLoad.load({
                            files: ['js/controllers/coap.js', 'js/controllers/sensTemp.js']
                        });
                    }]
                }
            })
            .state('app.forms', {
                url: '/forms',
                templateUrl: 'views/forms.html',
                ncyBreadcrumb: {
                    label: 'Forms'
                },
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                serie: true,
                                files: ['js/libs/moment.min.js']
                            },
                            {
                                serie: true,
                                files: ['js/libs/daterangepicker.min.js', 'js/libs/angular-daterangepicker.min.js']
                            },
                            {
                                files: ['js/libs/mask.min.js']
                            },
                            {
                                files: ['js/libs/select.min.js']
                            }
                        ]);
                    }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['js/controllers/forms.js']
                        });
                    }]
                }
            })
            .state('app.widgets', {
                url: '/widgets',
                templateUrl: 'views/widgets.html',
                ncyBreadcrumb: {
                    label: 'Widgets'
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load controllers
                        return $ocLazyLoad.load({
                            files: ['js/controllers/widgets.js']
                        });
                    }]
                }
            })
            .state('app.charts', {
                url: '/charts',
                templateUrl: 'views/charts.html',
                ncyBreadcrumb: {
                    label: 'Charts'
                },
                resolve: {
                    // Plugins loaded before
                    // loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                    //     return $ocLazyLoad.load([
                    //         {
                    //             serial: true,
                    //             files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
                    //         }
                    //     ]);
                    // }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['js/controllers/charts.js']
                        });
                    }]
                }
            })
    }]);
