import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-games-social-media',
  templateUrl: './games-social-media.component.html',
  styleUrls: ['./games-social-media.component.scss']
})
export class GamesSocialMediaComponent implements OnInit {

  sidebarItems = [];

  constructor( private sidebarPrepare: NavigationService, public titleService: Title ) { 
    this.sidebarItems = sidebarPrepare.sidebarPrepare;
    this.titleService.setTitle('Games and social media | Cambridge Assessment English');
   }

  ngOnInit() {
  }

}
