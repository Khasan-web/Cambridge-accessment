import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eng-skill-in-work',
  templateUrl: './eng-skill-in-work.component.html',
  styleUrls: ['./eng-skill-in-work.component.scss']
})
export class EngSkillInWorkComponent implements OnInit {

  sidebarItems = [];

  constructor( private sidebarWhyWe: NavigationService, public titleService: Title ) { 
    this.sidebarItems = sidebarWhyWe.sidebarWhyWe;
    this.titleService.setTitle('English skills in the workplace | Cambridge Assessment English');
    }

  ngOnInit() {
  }

}
