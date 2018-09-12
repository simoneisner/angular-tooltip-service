import { Directive, Input, HostListener, OnDestroy, ElementRef } from '@angular/core';
import { TooltipService } from '../../services/tooltip.service';

@Directive({
  selector: '[appToolTip]'
})
export class TooltipDirective implements OnDestroy {


  @Input() tooltipTitle: string = "";
  private id: number;

  constructor(private tooltipService:TooltipService, private element:ElementRef) { }

  @HostListener('mouseenter') 
  onmouseenter(): void{
    //show tooltip
    this.id = Math.random();
    this.tooltipService.components.push({
      id: this.id,
      ref: this.element,
      title: this.tooltipTitle
      
    })
  }

  @HostListener('mouseleave') onmouseleave(): void{
    //hide tooltip
    
  }

  ngOnDestroy(): void{
    //hide tooltip
  }
  
  destroy():void{
    const idx= this.tooltipService.components.findIndex((t) => {
      return t.id === this.id;
    });

    this.tooltipService.components.splice(idx,1);
  }

}
