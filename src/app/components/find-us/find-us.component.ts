import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-find-us',
  templateUrl: './find-us.component.html',
  styleUrls: ['./find-us.component.scss']
})
export class FindUsComponent implements OnInit {

  constructor(public titleService: Title) {
    this.titleService.setTitle('Our location | Cambridge Assessment English');
  }

  ngOnInit() {
  }

}
