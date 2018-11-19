import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-eng-skill-in-work',
  templateUrl: './eng-skill-in-work.component.html',
  styleUrls: ['./eng-skill-in-work.component.scss']
})
export class EngSkillInWorkComponent implements OnInit {

  sidebarItems = [];

  constructor( private sidebarWhyWe: NavigationService ) { 
    this.sidebarItems = sidebarWhyWe.sidebarWhyWe;
   }

  ngOnInit() {
  }

}
