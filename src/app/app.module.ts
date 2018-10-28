import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/root-store';
import { StoreRouterConnectingModule } from '@ngrx/router-root-store';
import { StoreDevtoolsModule } from '@ngrx/root-store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from './app.reducers';
import { CarsModule } from './cars/cars.module';
import { RouterModule } from '@angular/router';
import { AppEffects } from './root-store/app.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CarsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    // StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Tricity',
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
