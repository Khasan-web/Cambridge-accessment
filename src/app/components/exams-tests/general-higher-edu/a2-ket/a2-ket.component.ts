import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import { Title } from '@angular/platform-browser';
import { JqueryLvlsService } from '../../../../services/jquery-lvls.service';
import { PreparationMaterialLevelsService } from '../../../../services/preparation-material-levels.service';

@Component({
  selector: 'app-a2-ket',
  templateUrl: './a2-ket.component.html',
  styleUrls: ['./a2-ket.component.scss']
})
export class A2KetComponent implements OnInit {

  sidebarItems = [];
  materials = [];

  constructor(private sidebar: NavigationService, 
    private jquery: JqueryLvlsService, 
    private prep_materials: PreparationMaterialLevelsService,
    public titleService: Title) { 
    this.sidebarItems = sidebar.sidebarExamsGeneralHigher;
    this.materials = prep_materials.material_a2;
    this.titleService.setTitle('A2 Key | Cambridge Assessment English');
  }

  ngOnInit() {
    this.jquery.ngOnInit();
  }

}
