import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-exams-tests',
  templateUrl: './exams-tests.component.html',
  styleUrls: ['./exams-tests.component.scss']
})
export class ExamsTestsComponent implements OnInit{

  constructor(public titleService: Title) {
    this.titleService.setTitle('Exams and test | Cambridge Assesment English');
  }

  ngOnInit(){
    $('a').click(function(){
      $(window).scrollTop(0);
    })
  }

}
