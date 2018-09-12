import { Component, OnInit } from '@angular/core';
import { TooltipService } from '../../services/tooltip.service';
import { TooltipContentComponent } from '../tooltip-content/tooltip-content.component';

@Component({
  selector: 'app-tooltip-container',
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.css'],
  providers: [TooltipService]
})
export class TooltipContainerComponent  {

  constructor( tooltipService: TooltipService) { }
}
