import { Component, OnInit, Input } from '@angular/core';
import {AppModel} from '../app.model';

@Component({
  selector: 'app-create-edit-task',
  templateUrl: './create-edit-task.component.html',
  styleUrls: ['./create-edit-task.component.css']
})
export class CreateEditTaskComponent implements OnInit {
  @Input('model') appModel;

  constructor() { }

  ngOnInit() {
  }

  public showAppModelValue() {
    console.log(this.appModel);
  }

}
