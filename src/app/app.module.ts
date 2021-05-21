import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BindingComponent } from './binding/binding.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { SturctualDirectiveComponent } from './sturctual-directive/sturctual-directive.component';
import { ComponentInetractionComponent } from './component-inetraction/component-inetraction.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BindingComponent,
    TemplateRefVarComponent,
    TwoWayBindingComponent,
    SturctualDirectiveComponent,
    ComponentInetractionComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
