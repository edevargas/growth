import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { RoutingModule } from './application/routing/routing.module';
import { MyGrowthStateModule } from '@flab/core-state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule,
    MyGrowthStateModule
  ],
  providers: [
    {
      provide: 'apiUrl',
      useValue: environment.apiUrl,
    },
    {
      provide: 'loginPath',
      useValue: environment.loginPath
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
