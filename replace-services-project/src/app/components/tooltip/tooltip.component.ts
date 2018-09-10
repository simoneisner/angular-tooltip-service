import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {

  @Input() toolTipTextInput: string;
  @Output() toolTipTextOutput = new EventEmitter();

  
   
  valueChanged(){
    this.toolTipTextOutput.emit(this.toolTipTextInput);
  }


}
