import { Injectable } from '@angular/core';
import { MediaInterface } from '../interfaces/mediaInterface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

    // protected itemList: MediaInterface[] = [
    //     {
    //       id: 0,
    //       name: 'Acme Fresh Start Housing',
    //       city: 'Chicago',
    //       state: 'IL',
    //       photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    //       availableUnits: 4,
    //       wifi: true,
    //       laundry: true
    //     }
    //   ];

    // protected itemList: MediaInterface[] = [];
    // protected itemList: any = [];
    
    protected itemList: MediaInterface[] = [];

    constructor(private http : HttpClient) {

    this.http.get('http://localhost:9000/media').subscribe(data=>{
      this.itemList = <Array<MediaInterface>>data;
    });   
    
 
    }

  getAllMedia(): MediaInterface[] {
    // this.http.get('http://localhost:9000/media').subscribe(data=>{
    //   this.itemList = <Array<MediaInterface>>data;
    // });   
    
    return this.itemList;
    
  }
}
