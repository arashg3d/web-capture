import { degrees } from './../../../shared/constants/degrees';
import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { carTypes } from 'src/app/shared/models/car-type.model';

@Component({
  selector: 'app-exterior',
  templateUrl: './exterior.component.html',
  styleUrls: ['./exterior.component.scss']
})
export class ExteriorComponent {
  carType: carTypes = 'suv';
  degrees = degrees;
  degreeIndex: number = 0;
  public exteriorImages: WebcamImage[] = [];

  handleImage(webcamImage: WebcamImage) {
    if (this.exteriorImages[this.degreeIndex])
      this.exteriorImages[this.degreeIndex] = webcamImage;
    else
      this.exteriorImages.push(webcamImage);
  }
}
