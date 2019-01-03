import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {

  constructor(public titleService: Title) {
    this.titleService.setTitle('Terms and conditions | Cambridge Assesment English');
  }

  ngOnInit() {
  }

}
