import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent implements OnInit {
  showVideo: boolean;

  constructor() { }

  ngOnInit() {
  }

  onShowVideo(){
    this.showVideo = true;
    setTimeout(() => {
      this.showVideo = false;
    }, 90000)
  }

}
