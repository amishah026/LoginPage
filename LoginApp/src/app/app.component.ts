import { Component } from '@angular/core';
import { UserService } from './userService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginApp';


  constructor(private userService: UserService){

  }
}
