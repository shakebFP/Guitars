import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuitarlistComponent } from './components/guitarlist/guitarlist.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes =[
  {path:'', component: GuitarlistComponent},
  {path: 'details/:id', component: DetailsComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    GuitarlistComponent,
    ButtonComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
