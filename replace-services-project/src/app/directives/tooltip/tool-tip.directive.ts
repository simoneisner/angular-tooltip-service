import { Directive, Input, HostListener, OnDestroy, ElementRef } from '@angular/core';
//import { TooltipService } from '../../services/tooltip.service';

@Directive({
  selector: '[appToolTip]'
})
export class TooltipDirective implements OnDestroy {


  //@Input() tooltipTitle: string = "";
  private id: number;
  private toolTipText:string = "hello";
  //constructor(private tooltipService:TooltipService, private element:ElementRef) { }


  constructor(private el:ElementRef){
    this.toolTipText = el.nativeElement.value;
  }



  @HostListener('click') 
  onclick(): void{
    console.log("fart");
    this.el.nativeElement.title = "kskfdfk"
  }

  ngOnDestroy(): void{
    //hide tooltip
  }
  
  destroy():void{
    // const idx= this.tooltipService.components.findIndex((t) => {
    //   return t.id === this.id;
    // });

    // this.tooltipService.components.splice(idx,1)
  }

}
