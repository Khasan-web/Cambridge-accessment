import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    $('a').click(function(){
      $(window).scrollTop(0);
    });

    $('.scroll-top').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });

  }

}
