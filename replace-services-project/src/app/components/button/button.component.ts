import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  
  @Input() buttonText:string = "something";

  onClick=(text:string)=>{
    console.log(text);
  }

  constructor() { }

  }