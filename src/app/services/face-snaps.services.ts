import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FaceSnap } from 'src/app/models/face.snap.models';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class faceSnapsService {

  constructor(private http: HttpClient){}

    faceSnapsId$!: Observable<FaceSnap>;
    faceSnaps$!: Observable<FaceSnap[]>;

      getAllFaceSnaps(): Observable<FaceSnap[]>{
            return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
        };

        getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
          return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
        }

        snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
          // const faceSnap = this.getFaceSnapById(faceSnapId);
          // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
        };



}