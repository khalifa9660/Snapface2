import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleSnapFaceComponent } from "./single-snap-face/single-snap-face.component";
import { ButtonComponent } from "./button/button.component";



const routes: Routes = [
    
        { path: 'facesnaps/:id', component: SingleSnapFaceComponent },
        { path: 'facesnaps', component: FaceSnapListComponent },
        { path: '', component: LandingPageComponent },
        { path: 'editingUser', component: ButtonComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule{}