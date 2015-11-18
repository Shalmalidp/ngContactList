import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';
import ContactAdd from './controllers/contact-add-form.controller';

import PARSE from './constants/parse.constant';
import ContactService from './services/contact.service';

angular
  .module('app',['ui.router'])
  .config(config)
  .service('ContactService',ContactService)
  .constant('PARSE', PARSE)
  .controller('HomeController', HomeController)
  .controller('ContactAdd', ContactAdd)
;
