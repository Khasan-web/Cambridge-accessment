import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-who-accept',
  templateUrl: './who-accept.component.html',
  styleUrls: ['./who-accept.component.scss']
})
export class WhoAcceptComponent implements OnInit {
  
  sidebarItems = [];

  constructor( private sidebarWhyWe: NavigationService, public titleService: Title ) { 
    this.sidebarItems = sidebarWhyWe.sidebarWhyWe;
    this.titleService.setTitle('Who accept our exams? | Cambridge Assessment English');
    }

  ngOnInit() {
  }

  institutions(){
    if($('#forInstitution').css('display') == 'block') {
      $('#forInstitution').slideUp();
    }else{
      $('#forInstitution').slideDown();
      $('#forEmployer').slideUp();
    }
  }

  employers(){
    if($('#forEmployer').css('display') == 'block') {
      $('#forEmployer').slideUp();
    }else{
      $('#forEmployer').slideDown();
      $('#forInstitution').slideUp();
    }
  }

}
