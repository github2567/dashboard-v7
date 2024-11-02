import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Employees, Medias } from 'src/app/gridcontent';

@Component({
  selector: 'app-usercontent',
  templateUrl: './usercontent.component.html'
})

export class UserContentComponent {

  @Input() title: string = "";
  @Input() GridHeaderList: any;
  // @Input() employeeList: any;
  @Input() employeeList = new Array();
  @Input() mediaList = new Array();
  // @Input() mediaList: any;
  @Input() test1: string = "";

  medias: any = [];
  filterTxt: string = "";

  @Output() mediaItemAddEvent = new EventEmitter<any>();
  filterMedia(filterTxt: string) {
      // const emitObj: any = new Medias('','','','','','');
      // this.mediaItemAddEvent.emit(emitObj);
      this.mediaItemAddEvent.emit(filterTxt);
  }

  constructor() {
    // this.medias = this.mediaList;
  }

  // onFilter(){
  //   // this.medias = this.mediaList;
  //   // this.medias = this.medias.filter((media: { Id: string; }) => media.Id === this.filterTxt)
  // }
  
}
