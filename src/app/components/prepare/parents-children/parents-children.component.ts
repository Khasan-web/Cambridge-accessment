import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-parents-children',
  templateUrl: './parents-children.component.html',
  styleUrls: ['./parents-children.component.scss']
})
export class ParentsChildrenComponent implements OnInit {

  sidebarItems = [];

  constructor( private sidebarPrepare: NavigationService, public titleService: Title ) { 
    this.sidebarItems = sidebarPrepare.sidebarPrepare;
    this.titleService.setTitle('Parents and children | Cambridge Assessment English');
   }

  ngOnInit() {

  }

}
