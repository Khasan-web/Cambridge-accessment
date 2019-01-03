import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-information-for-parents',
  templateUrl: './information-for-parents.component.html',
  styleUrls: ['./information-for-parents.component.scss']
})
export class InformationForParentsComponent implements OnInit {

  constructor(public titleService: Title) {
    this.titleService.setTitle('Information for parents | Cambridge Assessment English');
  }
  
  ngOnInit(){
    $('a').click(function(){
      $(window).scrollTop(0);
    })
  }

}
