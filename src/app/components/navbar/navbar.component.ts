import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  closeDropdown: boolean;
  icon: string = 'fa-bars';
  iconIndex: number = 0;

  constructor() { }

  ngOnInit() {
    $('.nav-item').click(function(){
      $('.dropdown-menu').css('display','none');
    })
  }
  
  changeicon(){
    if(this.iconIndex == 0){
      this.icon = 'fa-times';
      this.iconIndex = 1;
    }else if(this.iconIndex == 1){
      this.icon = 'fa-bars';
      this.iconIndex = 0;
    }
  }

}
