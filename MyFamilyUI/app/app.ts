require("angular");
require("angular-material");
//require("angular-material.css");
//import {module} from 'angular';
import {MainComponent} from "./modules/main/main.component";
import {MainService} from "./modules/main/main.service";

export let app = angular.module('app', [
    //"ngMaterial"
]);

app.component("mainWindow", new MainComponent());
app.service("mainService", MainService);