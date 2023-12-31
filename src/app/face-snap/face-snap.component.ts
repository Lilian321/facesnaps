import { Component,Input,OnInit  } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
 @Input() faceSnap!: FaceSnap;
  buttonTexte!: string;

constructor(private faceSnapsService: FaceSnapsService, private router: Router) {} 
 
  
ngOnInit(): void {
    this.buttonTexte = 'Oh Snap !';
}

onSnap() {
   if(this.buttonTexte === 'Oh Snap !' ){
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.buttonTexte ='Oops, unSnap!'
  }else{
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.buttonTexte = 'Oh Snap !'
 }
}

onViewFaceSnap(){
  this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}

}
