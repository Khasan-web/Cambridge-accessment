import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-games-social-media',
  templateUrl: './games-social-media.component.html',
  styleUrls: ['./games-social-media.component.scss']
})
export class GamesSocialMediaComponent implements OnInit {

  sidebarItems = [];

  constructor( private sidebarPrepare: NavigationService ) { 
    this.sidebarItems = sidebarPrepare.sidebarPrepare;
   }

  ngOnInit() {
  }

}
