import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face.snap.models';
import { faceSnapsService } from '../services/face-snaps.services';

@Component({ //Décorateur : Apporte des modifications à une classe
  selector: 'app-face-snap',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss']
})
export class SnapFaceComponent implements OnInit{
  @Input() faceSnap!: FaceSnap
          textButton!: string
          
          constructor(private faceSnapsService: faceSnapsService,
            private router: Router) {}

  ngOnInit(): void {
    this.textButton = 'Oh Snap'
  }

  onSnap(){
    if(this.textButton === 'Oh Snap'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap'); 
      this.textButton = 'Oops unSnap'
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.textButton = 'Oh Snap'
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
