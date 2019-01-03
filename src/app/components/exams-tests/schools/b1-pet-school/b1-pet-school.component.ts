import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import { JqueryLvlsService } from '../../../../services/jquery-lvls.service';
import { PreparationMaterialLevelsService } from '../../../../services/preparation-material-levels.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-b1-pet-school',
  templateUrl: './b1-pet-school.component.html',
  styleUrls: ['./b1-pet-school.component.scss']
})
export class B1PetSchoolComponent implements OnInit {

  sidebarItems = [];
  materials = [];

  constructor(private sidebar: NavigationService, 
    private jquery: JqueryLvlsService, 
    private prep_materials: PreparationMaterialLevelsService,
    public titleService: Title) { 

    this.sidebarItems = sidebar.sidebarExamsSchool;
    this.materials = prep_materials.material_b1_pet;
    console.log(this.materials);
    this.titleService.setTitle('B1 Preliminary for Schools | Cambridge Assessment English');

  }



  ngOnInit() {
    this.jquery.ngOnInit();
  }

}
