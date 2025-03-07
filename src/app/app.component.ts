import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports:[RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSetup';
  imgUrl = '../assets/logo.jpg';
  ngOnInit(): void{
    this.title = "Hello from BridgeLabz."
  }
  

}
