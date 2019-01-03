import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-book-exam',
  templateUrl: './book-exam.component.html',
  styleUrls: ['./book-exam.component.scss']
})
export class BookExamComponent implements OnInit {

  constructor( public titleService: Title ) { 
    this.titleService.setTitle('Book a test | Cambridge Assessment English');
   }

  ngOnInit() {

  }

}
