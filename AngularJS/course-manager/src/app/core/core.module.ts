import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarCoponent } from "./component/nav-bar/nav-bar.component";
import { Error404Component } from "./component/Error-404/error-404.component";


@NgModule({
    declarations: [
        NavBarCoponent,
        Error404Component
    ],
    imports:[
        RouterModule.forChild([
            // {
            //     path: '**', component: Error404Component//quando não se acha a rota certa!
            // }
        ])
    ],
    exports: [
        NavBarCoponent
    ]
})
export class CoreModule {

}