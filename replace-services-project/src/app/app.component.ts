import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { MatTooltip} from '@angular/material'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'replace-services-project';
  welcomeText = "Welcome to the party";
  @ViewChild(ButtonComponent) buttonComponent:ButtonComponent

  buttonText = "hi";

  onClick(text:string){
      this.buttonComponent.onClick(text);
  }

}
