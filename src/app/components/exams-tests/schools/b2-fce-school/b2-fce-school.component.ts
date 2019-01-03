import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import { Title } from '@angular/platform-browser';
import { PreparationMaterialLevelsService } from '../../../../services/preparation-material-levels.service';
import { JqueryLvlsService } from '../../../../services/jquery-lvls.service';

@Component({
  selector: 'app-b2-fce-school',
  templateUrl: './b2-fce-school.component.html',
  styleUrls: ['./b2-fce-school.component.scss']
})
export class B2FceSchoolComponent implements OnInit {

  sidebarItems = [];
  materials = [];

  constructor(private sidebar: NavigationService, 
    private jquery: JqueryLvlsService, 
    private prep_materials: PreparationMaterialLevelsService,
    public titleService: Title) { 

    this.sidebarItems = sidebar.sidebarExamsSchool;
    this.materials = prep_materials.material_b2_fce;
    console.log(this.materials);
    this.titleService.setTitle('B2 First for Schools | Cambridge Assessment English');

  }

  ngOnInit() {
    this.jquery.ngOnInit();
  }

}
