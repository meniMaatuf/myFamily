

interface IMainController extends ng.IController {
    
}

class MainController implements IMainController {
    constructor() {
    }
}

export class MainComponent implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public template: string;

    constructor() {
        this.bindings = {
        };
        this.controller = MainController;
        this.template = require("./main-template");
    }
}

