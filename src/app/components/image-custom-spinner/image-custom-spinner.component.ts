import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-custom-spinner',
  templateUrl: './image-custom-spinner.component.html',
  styleUrls: ['./image-custom-spinner.component.scss'],
})
export class ImageCustomSpinnerComponent implements OnInit {
  @Input() imageUrl: any;
  imageLoading = true;
  image: any;

  constructor() {
  }

  ngOnInit() {
      // console.log('image passed', this.imageUrl);
  }


  onLoad() {
      this.imageLoading = false;
      // console.log('FFINISHSSH');
  }

}
