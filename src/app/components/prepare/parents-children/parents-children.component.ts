import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-parents-children',
  templateUrl: './parents-children.component.html',
  styleUrls: ['./parents-children.component.scss']
})
export class ParentsChildrenComponent implements OnInit {

  sidebarItems = [];

  constructor( private sidebarPrepare: NavigationService ) { 
    this.sidebarItems = sidebarPrepare.sidebarPrepare;
   }

  ngOnInit() {
  }

}
