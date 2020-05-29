import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface UnsplashResponce {

  urls:{
    regular:string
  }

}



@Injectable({
  providedIn: 'root'
})
export class FetchPhotoService {

  private key: string = 'kvva0mIUX24qEdl-Vr8U0sciHMc451L1wFII-0XNkNU';
  constructor(
    private httpCli: HttpClient
  ) { }


  getPhoto(){
    return this.httpCli.get<UnsplashResponce>(`https://api.unsplash.com/photos/random/?client_id=kvva0mIUX24qEdl-Vr8U0sciHMc451L1wFII-0XNkNU`)
    .pipe(pluck('urls','regular'))
}

}



