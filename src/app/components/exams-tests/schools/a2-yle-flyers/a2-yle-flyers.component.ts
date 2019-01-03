import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import * as $ from 'jquery';
import { JqueryLvlsService } from '../../../../services/jquery-lvls.service';
import { PreparationMaterialLevelsService } from '../../../../services/preparation-material-levels.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-a2-yle-flyers',
  templateUrl: './a2-yle-flyers.component.html',
  styleUrls: ['./a2-yle-flyers.component.scss']
})
export class A2YleFlyersComponent implements OnInit {

  sidebarItems = [];
  materials = [];

  constructor(private sidebarWhyWe: NavigationService, 
    private jquery: JqueryLvlsService, 
    private prep_materials: PreparationMaterialLevelsService,
    public titleService: Title) { 

    this.sidebarItems = sidebarWhyWe.sidebarExamsSchool;
    this.materials = prep_materials.material_a2_flyers;
    this.titleService.setTitle('A2 Flyers | Cambridge Assessment English');

  }

  ngOnInit() {
    this.jquery.ngOnInit();
    $('#showTestFormat').click(function(){
      window.scrollTo(0, 0);
      $('#testFormat button').css("opacity", "1");
      $('#testFormat button').click(function(){
        $(this).css("opacity", "0.7");
      })
    })
  }

}
