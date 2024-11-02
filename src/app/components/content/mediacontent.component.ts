import { Component, Input, Output, inject } from '@angular/core';

// import { Medias } from 'src/app/gridcontent';

import { MediaService } from 'src/app/services/media.service';
import { MediaInterface } from 'src/app/interfaces/mediaInterface';

@Component({
  selector: 'app-mediacontent',
  templateUrl: './mediacontent.component.html'
})

export class MediaContentComponent {

  @Input() title: string = "";
  @Input() GridHeaderList: any;
  // @Input() employeeList: any;
  // @Input() employeeList = new Array();
  // @Input() mediaList = new Array();
  // @Input() mediaList: any;
  // @Input() test1: string = "";

  mediaList: MediaInterface[] = [];
  mediaAllList: MediaInterface[] = [];

  mediaService: MediaService = inject(MediaService);

  // @Output() mediaItemAddEvent = new EventEmitter<any>();
  // filterMedia(filterTxt: string) {
  //     // const emitObj: any = new Medias('','','','','','');
  //     // this.mediaItemAddEvent.emit(emitObj);
  //     this.mediaItemAddEvent.emit(filterTxt);
  // }

  constructor() {
    this.mediaAllList = this.mediaService.getAllMedia();
    this.mediaList = this.mediaAllList;

    // console.log('MediaContentComponent constructor');
  }

  
  filterMedia(filterTxt: string) {
    
    if(filterTxt == "")
    {
      this.mediaList = this.mediaAllList;
    }
    else
    {
      var filter = filterTxt.toLowerCase();

      // this.mediaList = this.filterList.filter((media: { Id: string; }) => media.Id === filterTxt)
      this.mediaList = this.mediaAllList.filter(media => 
        media.Id.toLowerCase() === filter 
        || media.Name.toLowerCase() === filter
        || media.Type.toLowerCase() === filter
        || media.Location.toLowerCase() === filter
        || media.Phone.toLowerCase() === filter)
    }
    // console.log('MediaContentComponent filterMedia');
  }
  
}
