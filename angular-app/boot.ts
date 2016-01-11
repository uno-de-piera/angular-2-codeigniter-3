import {bootstrap} from "angular2/platform/browser"
import {provide} from 'angular2/core';
import {App} from "./components/app/app"
import {
    LocationStrategy,
    HashLocationStrategy,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS
} from 'angular2/router';

bootstrap(App, [
    ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);