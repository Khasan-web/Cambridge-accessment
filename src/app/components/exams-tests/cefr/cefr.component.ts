import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cefr',
  templateUrl: './cefr.component.html',
  styleUrls: ['./cefr.component.scss']
})
export class CefrComponent implements OnInit {


  constructor(public titleService: Title) {
    this.titleService.setTitle('CEFR | Cambridge Assessment English');
  }

  ngOnInit() {
  }

}
