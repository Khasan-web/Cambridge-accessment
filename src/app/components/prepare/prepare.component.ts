import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-prepare',
  templateUrl: './prepare.component.html',
  styleUrls: ['./prepare.component.scss']
})
export class PrepareComponent implements OnInit {

  constructor(public titleService: Title) {
    this.titleService.setTitle('Prepare | Cambridge Assessment English');
  }

  ngOnInit(){
    $('a').click(function(){
      $(window).scrollTop(0);
    })
  }

}
