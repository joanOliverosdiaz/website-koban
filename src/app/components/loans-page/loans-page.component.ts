import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loans-page',
  templateUrl: './loans-page.component.html',
  styleUrls: ['./loans-page.component.css']
})
export class LoansPageComponent implements OnInit {

  blShowLoans = true;
  blShowdues = false;
  constructor() { }

  ngOnInit(): void {
  }

  showLoans(){
    this.blShowLoans = true;
    this.blShowdues = false;
  }
  showDues(){
    this.blShowLoans = false;
    this.blShowdues = true;
  }

}
