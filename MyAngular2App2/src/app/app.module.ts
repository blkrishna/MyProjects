import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeelaComponent } from './leela/leela.component';
import { MaheshComponent } from './mahesh/mahesh.component';
import {RouterModule, Routes} from '@angular/router'

const appRoutes:Routes = [
  {path:'home', component: AppComponent},
  {path:'leela', component: LeelaComponent},
  {path:'mahesh', component: MaheshComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LeelaComponent,
    MaheshComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
