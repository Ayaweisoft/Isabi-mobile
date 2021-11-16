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
  
    });
    toast.present();
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
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

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header: `${header}`,
      message: `${message}`,
      buttons: [
      {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
  
    await alert.present();
  }
}
