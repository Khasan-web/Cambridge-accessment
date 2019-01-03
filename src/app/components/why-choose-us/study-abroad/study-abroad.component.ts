import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-study-abroad',
  templateUrl: './study-abroad.component.html',
  styleUrls: ['./study-abroad.component.scss']
})
export class StudyAbroadComponent implements OnInit {

  sidebarItems = [];

  constructor( private sidebarWhyWe: NavigationService, public titleService: Title ) { 
    this.sidebarItems = sidebarWhyWe.sidebarWhyWe;
    this.titleService.setTitle('Study abroad | Cambridge Assessment English');
    }

    ngOnInit(){
      $('a').click(function(){
        $(window).scrollTop(0);
      })
    }

}
