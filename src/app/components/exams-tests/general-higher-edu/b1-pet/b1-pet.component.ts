import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import { Title } from '@angular/platform-browser';
import { JqueryLvlsService } from '../../../../services/jquery-lvls.service';
import { PreparationMaterialLevelsService } from '../../../../services/preparation-material-levels.service';

@Component({
  selector: 'app-b1-pet',
  templateUrl: './b1-pet.component.html',
  styleUrls: ['./b1-pet.component.scss']
})
export class B1PetComponent implements OnInit {

  sidebarItems = [];
  materials = [];

  constructor(private sidebar: NavigationService, 
    private jquery: JqueryLvlsService, 
    private prep_materials: PreparationMaterialLevelsService,
    public titleService: Title) { 
    this.sidebarItems = sidebar.sidebarExamsGeneralHigher;
    this.materials = prep_materials.material_b1_preliminary;
    this.titleService.setTitle('B1 Preliminary | Cambridge Assessment English');
  }


  ngOnInit() {
    this.jquery.ngOnInit();
  }

}
