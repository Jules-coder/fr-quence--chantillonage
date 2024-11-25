import { IManagedObject, IUser, UserService, FetchClient, InventoryService,  } from "@c8y/client";
import {Component} from '@angular/core';

@Component({
  selector: 'frequence_echantillonage',
  templateUrl: './frequence_echantillonage.component.html',
})

export class FrequenceEchantillonageComponent{ //implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  constructor(
      private inventory: InventoryService,
      private fetchClient: FetchClient,
      public userService: UserService
  ){
  }
  handleFormSubmission() {
    const form = document.getElementById('exportForm');
    const deviceID = (document.getElementById('deviceId')as HTMLInputElement).value;
    let inputData = (form.querySelector('#inputData')as HTMLInputElement).value;
    let unit = (form.querySelector('input[name="unit"]:checked')as HTMLInputElement).value;
    const payload = {
      deviceId: deviceID,
      c8y_Command: {
        text: JSON.stringify({
          setConfig: {
            frequency: {
              unit: unit,
              period: parseInt(inputData)
            }
          }
        })
      },
      description: "Execute command setConfig"
    };
    fetch('/devicecontrol/operations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.ok) {
          console.log('Requête POST réussie !');
          console.log(payload);
        } else {
          console.error('Erreur lors de la requête POST');
          console.error(payload);
        }
      })
      .catch(error => {
        console.error('Erreur lors de la requête POST :', error);
        console.error(payload);
      });
  }
}