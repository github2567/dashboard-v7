import { Component, OnInit } from '@angular/core';
// import { Component } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// import { Medias } from 'src/app/gridcontent';
// import { Title } from '@angular/platform-browser';

// import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent implements OnInit  {
  // export class MediaComponent {

  // mediaService: MediaService = inject(MediaService);

  GridHeaderList = [
    { Column1: '', Column2: '', Column3: '', Column4: '', Column5: '' }
  ];

  // mediaList: any = [];
  // mediaList = new Array();
  // test1: string = "";
  // tempList: any = [];

  // constructor(private http : HttpClient) {

  // }


  constructor() {

  }

  ngOnInit(): void {
    this.getMedia();
  }



  getMedia() {
    this.GridHeaderList = [
      { Column1: 'Name', Column2: 'Type', Column3: 'Location', Column4: 'Phone', Column5: '' }
    ];

    // this.http.get('http://localhost:9000/media').subscribe(data=>{
    //   this.mediaList = data;
    //   // this.tempList = data;
    // });

    // this.mediaList = this.mediaService.getAllMedia();
  }




  // filterMedia(filterTxt: string) {
  //   // this.mediaList = this.tempList.filter((media: { Id: string; }) => media.Id === filterTxt)
  //   this.mediaList = this.mediaService.getAllMedia();
  //   this.tempList = this.mediaList.filter((media: { Id: string; }) => media.Id === filterTxt)
  // }
}
