import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Employees } from 'src/app/gridcontent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  // title: string;

  GridHeaderList = [
    { Column1: '', Column2: '', Column3: '', Column4: '', Column5: '' }
  ];
    
  employeeList: any = [];

  constructor(private http : HttpClient) {
    // this.title="Users"
  }
    
  ngOnInit(): void {
    this.getEmp();    
  }

  getEmp() {
    this.GridHeaderList = [
      { Column1: 'FirstName', Column2: 'LastName', Column3: 'Email', Column4: 'Address', Column5: 'Phone' }
    ];

    this.http.get('http://localhost:3000/employee').subscribe(data=>{
      this.employeeList = data;
    })
  }
}