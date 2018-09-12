import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatTooltipModule} from '@angular/material'


import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { TooltipDirective } from './directives/tooltip/tool-tip.directive';
import { TooltipContentComponent } from './components/tooltip-content/tooltip-content.component';
import { TooltipContainerComponent } from './components/tooltip-container/tooltip-container.component';
import { HttpModule } from '@angular/http';
//import { TooltipService } from './services/tooltip.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TooltipDirective,
    TooltipContentComponent,
    TooltipContainerComponent,
    //TooltipService
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
