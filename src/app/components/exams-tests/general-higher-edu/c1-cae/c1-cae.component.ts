import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import { Title } from '@angular/platform-browser';
import { JqueryLvlsService } from '../../../../services/jquery-lvls.service';
import { PreparationMaterialLevelsService } from '../../../../services/preparation-material-levels.service';

@Component({
  selector: 'app-c1-cae',
  templateUrl: './c1-cae.component.html',
  styleUrls: ['./c1-cae.component.scss']
})
export class C1CaeComponent implements OnInit {

  sidebarItems = [];
  materials = [];

  constructor(private sidebar: NavigationService, 
    private jquery: JqueryLvlsService, 
    private prep_materials: PreparationMaterialLevelsService,
    public titleService: Title) { 
    this.sidebarItems = sidebar.sidebarExamsGeneralHigher;
    this.materials = prep_materials.material_c1_advanced;
    this.titleService.setTitle('C1 Advanced | Cambridge Assessment English');
  }


  ngOnInit() {
    this.jquery.ngOnInit();
  }


}
