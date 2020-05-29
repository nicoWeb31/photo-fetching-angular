import { Component, OnInit, Input } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';

@Component({
  selector: 'app-dispaly-photo',
  templateUrl: './dispaly-photo.component.html',
  styleUrls: ['./dispaly-photo.component.css']
})

export class DispalyPhotoComponent implements OnInit {

  photoUrl = '';

  constructor(
    private servPhoto: FetchPhotoService
  ) {

      this.fetchPhoto();


  }

  onClick(){

    this.fetchPhoto()
  }

  fetchPhoto(){
    this.servPhoto.getPhoto().subscribe((response)=>{
      this.photoUrl = response;

    })
  }




  ngOnInit(): void {
  }

}
