import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { PipeModule } from "../shared/component/pipe/app-pipe.module";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        PipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent // caminho criado
            },
            {
                path: '', redirectTo: 'courses', pathMatch: 'full' // raiz da nossa aplicação
            },
        ])
    ]
})
export class CourseModule {

}