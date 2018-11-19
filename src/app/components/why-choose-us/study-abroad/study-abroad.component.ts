import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-study-abroad',
  templateUrl: './study-abroad.component.html',
  styleUrls: ['./study-abroad.component.scss']
})
export class StudyAbroadComponent implements OnInit {

  sidebarItems = [];

  constructor( private sidebarWhyWe: NavigationService ) { 
    this.sidebarItems = sidebarWhyWe.sidebarWhyWe;
   }

  ngOnInit() {
  }

}
