import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as ngRouterModule } from '@angular/router';
import { CoreModule, RouterModule } from '@c8y/ngx-components';
import { FrequenceEchantillonageModule } from './frequence_echantillonage_widget/frequence_echantillonage.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ngRouterModule.forRoot([], { enableTracing: false, useHash: true }),
    RouterModule.forRoot(),
    CoreModule.forRoot(),
    FrequenceEchantillonageModule
  ]
})

export class AppModule {
  constructor() {
  }
}
