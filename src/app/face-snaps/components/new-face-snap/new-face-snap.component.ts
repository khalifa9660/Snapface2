import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { FaceSnap } from '../../../core/models/face.snap.models';
import { faceSnapsService } from '../../../core/services/face-snaps.services';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.css']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp; 

  constructor(private formBuilder: FormBuilder, private facesnapService: faceSnapsService, private router: Router){}
  
  
  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    }, {
      updateOn: 'blur'
    });
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue =>({
        ...formValue,
        createdDate: new Date(),
        id: 0,
        snaps: 0
      }))
    )
  }

  onSubmitForm(): void {
    console.log(this.snapForm.value);
    this.facesnapService.addFaceSnap(this.snapForm.value).pipe(
      tap(()=> {
        this.router.navigateByUrl('/facesnaps')
      })
    ).subscribe();
  }



}
