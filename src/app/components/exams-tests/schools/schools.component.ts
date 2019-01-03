import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery'

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {

  constructor(public titleService: Title) {
    this.titleService.setTitle('Schools | Cambridge Assessment English');
  }

  ngOnInit(){
    $('a').click(function(){
      $(window).scrollTop(0);
    })
  }

}
