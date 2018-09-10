import { Component, Input } from '@angular/core';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  
  @Input() buttonText:string = "something";

  onClick=(text:string)=>{
    console.log(this.buttonText);
  }

  constructor() { }

  }