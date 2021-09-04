import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  constructor(  public alertController: AlertController,
    public toastController: ToastController) { }


  async presentSucess(header: string, msg: string, psitiveBtbText: string): Promise<void | boolean>  {
    let resolveFunction: (choice: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    const toast = await this.toastController.create({
      header:  `${header}`,
      message: `${msg}`,
      position: 'bottom',
      duration:3000,
      buttons: [
        {
          text:`${psitiveBtbText}`,
          side: 'start',
          icon: 'flash',
          handler: () => resolveFunction(true)
        },
      ]
    });
    toast.present();
  }



  async alertDialog(head: string, msg: string): Promise<void | boolean> {
    let resolveFunction: (choice: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    const alert = await this.alertController
        .create({
          header: head, message: msg,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'Continue',
              handler: () => resolveFunction(true)
            }
          ]
        });
    await alert.present();
    return promise;
  }
}
