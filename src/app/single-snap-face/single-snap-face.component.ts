import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face.snap.models';
import { faceSnapsService } from '../services/face-snaps.services';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-single-snap-face',
  templateUrl: './single-snap-face.component.html',
  styleUrls: ['./single-snap-face.component.scss']
})
export class SingleSnapFaceComponent implements OnInit {

  faceSnap$!: Observable<FaceSnap>
  textButton!: string
  
  constructor(private faceSnapsService: faceSnapsService,
    private route: ActivatedRoute) {}

ngOnInit(): void {
this.textButton = 'Oh Snap';
const faceSnapId = +this.route.snapshot.params['id']
this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId)
}

onSnap(faceSnapId: number){
if(this.textButton === 'Oh Snap'){
this.faceSnapsService.getFaceSnapById(faceSnapId); 
this.textButton = 'Oops unSnap'
} else {
this.faceSnapsService.getFaceSnapById(faceSnapId)
this.textButton = 'Oh Snap'
}
}

}