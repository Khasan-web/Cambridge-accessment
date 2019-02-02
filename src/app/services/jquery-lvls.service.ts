import { Injectable, OnChanges, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class JqueryLvlsService implements OnInit {

  ngOnInit(){

    $('a').click(function() {
      window.scrollTo(0, 0);
    });

    $(document).ready(function() {

      $('#commonInfo').click(function(){
        $('.navigation-level').slideUp(200);
        $('#main-info').slideDown(200);
      });
      $('#testFormat').click(function(){
        $('.navigation-level').slideUp(200);
        $('#test-format').slideDown(200);
      });
      $('#preparationBtn').click(function(){
        $('.navigation-level').slideUp(200);
        $('#preparation').slideDown(200);
      });
      $('#testDates').click(function(){
        $('.navigation-level').slideUp(200);
        $('#test-dates').slideDown(200);
      });
      $('#resultBtn').click(function(){
        $('.navigation-level').slideUp(200);
        $('#results').slideDown(200);
      });

      if($(window).width() < 768){
        $('.menu-title').html('');
      }
      $('.menu-item').click(function(){
        $('.menu-item').removeClass('active-menu');
        $(this).addClass('active-menu');
      });

      $('#listening_btn').click(function(){
        $('.module').slideUp(200);
        $('#listening').slideDown(200);
      });
      $('#read_write_btn').click(function(){
        $('.module').slideUp(200);
        $('#reading_writing').slideDown(200);
      });
      $('#speaking_btn').click(function(){
        $('.module').slideUp(200);
        $('#speaking').slideDown(200);
      });
      $('#writing_btn').click(function(){
        $('.module').slideUp(200);
        $('#writing').slideDown(200);
      });
      if (window.innerWidth < 768){
        $('.prep-item button').html('Buy');
      }
  
    });
  }

}
