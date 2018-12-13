import { Component } from '@angular/core';
import { AppModel } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public appModel = new AppModel();

  constructor () {
    
  }

  public showAppModelValue() { // ha nem írom ki hogy public, a default akkor is az
    console.log(this.appModel);
  }

  changeChecked(isChecked: boolean) {
    this.appModel.checked = !!isChecked; // dupla negálás -- így nem fog undefinedot adni
    /*if (isChecked) {
      this.appModel.checked = true
    } else {
      this.appModel.checked = false;
    }*/
  }

}
