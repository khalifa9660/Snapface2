import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SnapFaceComponent } from './components/snap-face/snap-face.component';
import { SingleSnapFaceComponent } from './components/single-snap-face/single-snap-face.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaceSnapsRoutingModule } from './face-snaps-routing-module';



@NgModule({
  declarations: [
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SnapFaceComponent,
    SingleSnapFaceComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutingModule
  ],
  exports: [
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SnapFaceComponent,
    SingleSnapFaceComponent
  ]
})
export class FaceSnapsModule { }
