import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BindingComponent } from './binding/binding.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BindingComponent,
    TemplateRefVarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
