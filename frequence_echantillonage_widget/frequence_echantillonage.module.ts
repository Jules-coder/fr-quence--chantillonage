import { NgModule} from '@angular/core';
import { CommonModule, CoreModule, FormsModule, HOOK_COMPONENTS, ModalModule} from '@c8y/ngx-components';
import { FrequenceEchantillonageComponent } from './component/frequence_echantillonage.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    FrequenceEchantillonageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    ModalModule,
    DragDropModule,
    CollapseModule,
  ],
  providers: [
    {
      provide: HOOK_COMPONENTS,
      multi: true,
      useValue: {
        id: 'frequence-echantillonage-tegg',
        label: 'Frequence Echantillonage',
        description: 'Frequence echantillonage pour TEGG.',
        component: FrequenceEchantillonageComponent,
        data: {
          ng1: {
            options: {
              noDeviceTarget: false,
              noNewWidgets: false,
              deviceTargetNotRequired: false,
              groupsSelectable: true
            }
          }
        }
      }
    },
  ],
})
export class FrequenceEchantillonageModule{
}

