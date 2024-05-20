import { NgModule } from "@angular/core";
import { SingleSnapFaceComponent } from "./components/single-snap-face/single-snap-face.component";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";
import { NewFaceSnapComponent } from "./components/new-face-snap/new-face-snap.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/guard/auth.guard";

const routes: Routes = [
    
    { path: 'create', component: NewFaceSnapComponent, canActivate: [AuthGuard]},
    { path: ':id', component: SingleSnapFaceComponent, canActivate: [AuthGuard] },
    { path: '', component: FaceSnapListComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class FaceSnapsRoutingModule {}