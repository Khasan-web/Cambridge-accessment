import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  closeDropdown: boolean;

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      
      if ($(window).width() > 992) {
        $('.nav-item').click(function(){
          $('.dropdown-menu').css('display','none');
        });
        $('.dropdown-toggle').click(function(){
          return false;
        });
      } else {
        $('.nav-link').click(function(){
          $('.navbar-collapse').removeClass('show');
        });
      }

      $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
          $('nav').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 100) {
          $('nav').removeClass('navbar-fixed');
        }
      });

      $('.dropdown-toggler-icon').click(function(){
        $(this).next().toggle();
        if ($(this).next().css('display') == 'block') {
          $(this).find('i').attr('class', 'fa fa-minus');
        } else {
          $(this).find('i').attr('class', 'fa fa-plus');
        }
      });

      if ($(window).width() < 992) {
        $('.dropdown-item').click(function(){
          $('.navbar-collapse').removeClass('show');
          this.icon = 'fa-bars';
          this.iconIndex = 0;
        });
      }

      $('.dropdown-item').click(function(){
        $('.dropdown-menu').css('display','none');
        $('.dropdown-menu').prev().find('i').attr('class', 'fa fa-plus');
      });

    })
  }

}
