import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceiptsIngredientsComponent } from './receipts-ingredients/receipts-ingredients.component';

const appRoutes: Routes = [
  {path: 'drink', component: ReceiptsIngredientsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ReceiptsIngredientsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
