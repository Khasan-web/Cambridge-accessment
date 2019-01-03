import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import * as $ from 'jquery';
import { JqueryLvlsService } from '../../../../services/jquery-lvls.service';
import { PreparationMaterialLevelsService } from '../../../../services/preparation-material-levels.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pre-a1-yle-starters',
  templateUrl: './pre-a1-yle-starters.component.html',
  styleUrls: ['./pre-a1-yle-starters.component.scss']
})
export class PreA1YleStartersComponent implements OnInit {

  sidebarItems = [];
  materilas = [];

  constructor(private sidebarWhyWe: NavigationService, 
    private jquery: JqueryLvlsService, 
    private prep_materials: PreparationMaterialLevelsService,
    public titleService: Title) { 

    this.sidebarItems = sidebarWhyWe.sidebarExamsSchool;
    this.materilas = prep_materials.material_pre_a1;
    this.titleService.setTitle('Pre A1 Starters | Cambridge Assessment English');

  }

  ngOnInit(){
    
    this.jquery.ngOnInit();

  }

}
