import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import * as $ from 'jquery';
import { JqueryLvlsService } from '../../../../services/jquery-lvls.service';
import { PreparationMaterialLevelsService } from '../../../../services/preparation-material-levels.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-a2-ket-school',
  templateUrl: './a2-ket-school.component.html',
  styleUrls: ['./a2-ket-school.component.scss']
})
export class A2KetSchoolComponent implements OnInit {

  sidebarItems = [];
  materials = [];

  constructor(private sidebarWhyWe: NavigationService, 
    private jquery: JqueryLvlsService, 
    private prep_materials: PreparationMaterialLevelsService,
    public titleService: Title) { 

    this.sidebarItems = sidebarWhyWe.sidebarExamsSchool;
    this.materials = prep_materials.material_a2_key;
    this.titleService.setTitle('A2 Key for Schools | Cambridge Assessment English');

  }

  ngOnInit() {

    this.jquery.ngOnInit();

  }
}
