import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent implements OnInit {
  showVideo: boolean;

  constructor(public titleService: Title) {
    this.titleService.setTitle('Why choose us | Cambridge Assessment English');
  }

  ngOnInit() {
  }

  onShowVideo(){
    $('.preview-overflow').fadeOut(function(){
      $('video').fadeIn();
      $('video').get(0).play()
    });
    setTimeout(() => {
      var video = $('video')[0];
      video.onended = function(e) {
        $(video).fadeOut(function(){
          $('.preview-overflow').fadeIn();
        });
      };
    }, 1000);
  }

}
