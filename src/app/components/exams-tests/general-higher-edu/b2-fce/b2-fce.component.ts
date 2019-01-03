import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import { Title } from '@angular/platform-browser';
import { JqueryLvlsService } from '../../../../services/jquery-lvls.service';
import { PreparationMaterialLevelsService } from '../../../../services/preparation-material-levels.service';

@Component({
  selector: 'app-b2-fce',
  templateUrl: './b2-fce.component.html',
  styleUrls: ['./b2-fce.component.scss']
})
export class B2FceComponent implements OnInit {

  sidebarItems = [];
  materials = [];

  constructor(private sidebar: NavigationService, 
    private jquery: JqueryLvlsService, 
    private prep_materials: PreparationMaterialLevelsService,
    public titleService: Title) { 
    this.sidebarItems = sidebar.sidebarExamsGeneralHigher;
    this.materials = prep_materials.material_b1_preliminary;
    this.titleService.setTitle('B2 First | Cambridge Assessment English');
  }


  ngOnInit() {
    this.jquery.ngOnInit();
  }


}