import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-general-higher-edu',
  templateUrl: './general-higher-edu.component.html',
  styleUrls: ['./general-higher-edu.component.scss']
})
export class GeneralHigherEduComponent implements OnInit {

  constructor(public titleService: Title) {
    this.titleService.setTitle('General and higher education | Cambridge Assessment English');
  }

  ngOnInit(){
    $('a').click(function(){
      $(window).scrollTop(0);
    })
  }

}
