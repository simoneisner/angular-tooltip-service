import { Component, OnInit } from '@angular/core';
import { TooltipService } from '../../services/tooltip.service';

@Component({
  selector: 'app-tooltip-container',
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.css'],
})
export class TooltipContainerComponent  {

  constructor(private tooltipService: TooltipService) { }
}
