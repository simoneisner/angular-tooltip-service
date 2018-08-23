import { Component, AfterViewInit, HostListener } from '@angular/core';
import { TooltipService } from '../../services/tooltip.service';

@Component({
  selector: 'app-tooltip-content',
  templateUrl: './tooltip-content.component.html',
  styleUrls: ['./tooltip-content.component.css']
})
export class TooltipContentComponent implements AfterViewInit {

  constructor(private tooltipService:TooltipService) { }

  ngAfterViewInit() {
    //position based on `ref`
  }

  @HostListener('window:resize')
  onWindowResize(): void{
    //update position basedf on `ref`
  }

}
