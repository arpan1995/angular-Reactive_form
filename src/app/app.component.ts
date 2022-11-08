import { Component, VERSION } from '@angular/core';
import { formControl } from '@angular/core/schematics/migrations/typed-forms/util';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { fromFetch } from 'rxjs/fetch';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Reactive Form';
  loginForm = new FormGroup({
    user:new FormControl(''),
    password:new FormControl('')
  })

  loginUser(){
    console.log(this.loginForm.value)
  }

}
