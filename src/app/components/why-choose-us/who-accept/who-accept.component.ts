import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-who-accept',
  templateUrl: './who-accept.component.html',
  styleUrls: ['./who-accept.component.scss']
})
export class WhoAcceptComponent implements OnInit {
  
  sidebarItems = [];

  constructor( private sidebarWhyWe: NavigationService ) { 
    this.sidebarItems = sidebarWhyWe.sidebarWhyWe;
   }

  ngOnInit() {
  }


}
