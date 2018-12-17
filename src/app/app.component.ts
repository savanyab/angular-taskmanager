import { Component } from '@angular/core';
import { AppModel, AppInterface } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public appModel = new AppModel();

  public appImpl: AppInterface = <AppInterface>{};

  name: string = '';
  email: string = '';
  password: string = '';

  isValidName(name) {
    const format = /^[A-Z]/;
    return format.test(name);
  }

  isValidEmail(email) {
    const format = /[a-zA-Z0-9\.-_]+@[a-zA-Z0-9]+\.com$/;
    return format.test(email);
  }
  
  ratePassword(password) {    
    const weakFormat = /[a-z0-9]/;
    const mediumFormat = /[a-zA-Z0-9]/;
    const strongFormat = /[a-zA-Z0-9$@&#]/;
    if (this.password.length < 8 && weakFormat.test(password)) {
      return 'red';
    } else if (this.password.length < 14 && mediumFormat.test(password)) {
      return 'orange';
    } else if (this.password.length >= 14 && strongFormat.test(password)) {
      return 'green';
    }
    
  }

  isValidPassword(password) {
    return this.ratePassword(password) === 'green';
  }


  constructor() {

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
