import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SceneComponent } from './scene/scene.component';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './scene/panel/panel.component';


const appRoutes: Routes = [
  { path: 'scene', component: SceneComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
