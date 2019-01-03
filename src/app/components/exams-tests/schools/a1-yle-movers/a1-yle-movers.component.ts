import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import * as $ from 'jquery';
import { JqueryLvlsService } from '../../../../services/jquery-lvls.service';
import { PreparationMaterialLevelsService } from '../../../../services/preparation-material-levels.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-a1-yle-movers',
  templateUrl: './a1-yle-movers.component.html',
  styleUrls: ['./a1-yle-movers.component.scss']
})
export class A1YleMoversComponent implements OnInit {

  sidebarItems = [];
  materials = [];

  constructor(private sidebarWhyWe: NavigationService, 
    private jquery: JqueryLvlsService, 
    private prep_materials: PreparationMaterialLevelsService,
    public titleService: Title) { 

    this.sidebarItems = sidebarWhyWe.sidebarExamsSchool;
    this.materials = prep_materials.material_a1_movers;
    this.titleService.setTitle('A1 Movers | Cambridge Assessment English');

  }
  ngOnInit() {

    this.jquery.ngOnInit();

  }

}
