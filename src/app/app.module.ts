import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuitarlistComponent } from './components/guitarlist/guitarlist.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule, Routes } from '@angular/router';
import { ElectricGuitarComponent } from './components/electric-guitar/electric-guitar.component';
import { AcousticGuitarComponent } from './components/acoustic-guitar/acoustic-guitar.component';
import { BassGuitarComponent } from './components/bass-guitar/bass-guitar.component';
import { ViolinComponent } from './components/violin/violin.component';

const appRoutes: Routes =[
  {path:'', component: GuitarlistComponent},
  {path: 'Electric Guitar', component: ElectricGuitarComponent},
  {path: 'Acoustic Guitar', component: AcousticGuitarComponent},
  {path: 'Bass Guitar', component: BassGuitarComponent},
  {path: 'Violin / Fiddle', component: ViolinComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    GuitarlistComponent,
    ButtonComponent,
    ElectricGuitarComponent,
    AcousticGuitarComponent,
    BassGuitarComponent,
    ViolinComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
