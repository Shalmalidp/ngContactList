let config = function($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root',{
      abstract : true,
      templateUrl : 'templates/layout.tpl.html'
    })
    .state('root.home',{
      url:'/',
      controller: 'HomeController as vm',
      templateUrl:'./templates/home.tpl.html'
    })
    .state('root.addContact',{
      url:'/contact/add',
      controller:'ContactAdd as vm',
      templateUrl:'./templates/contact-add-form.tpl.html'
    });
  

};

config.$inject = ['$stateProvider','$urlRouterProvider'];

export default config;