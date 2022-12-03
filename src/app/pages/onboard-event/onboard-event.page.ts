import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
// import { NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonRefresher, ModalController } from '@ionic/angular';
import { AccountService } from '../../shared/account.service';
import { AddTicketComponent } from '../../components/add-ticket/add-ticket.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LogicService } from 'src/app/services/logic.service';


@Component({
  selector: 'app-onboard-event',
  templateUrl: './onboard-event.page.html',
  styleUrls: ['./onboard-event.page.scss'],
})

export class OnboardEventPage implements OnInit {
  ticketList = [];
  loading: boolean = false;
  photo: String = '';
  onboardingForm: {
    name: '',
    location: '',
    type: '',
    date: '',
    time: '',
    description: '',
    cover_photo: '',
    tickets: '',
    email: '',
    phone: '',
    bank: '',
    account_number: '',
    ticketList: object[],
  };

  // validationMessages = {
  //   ticketType: [
  //       {type: 'required', message: 'Ticket type is required.'},
  //   ],
  //   amount: [
  //       {type: 'required', message: 'amount is required.'},
  //   ],
  // };

  constructor(
    public userService: UserService,
    private alertController: AlertController,
    private modalController: ModalController, 
    private formBuilder: FormBuilder,
    private fireService:FirebaseService,
    private logicService: LogicService) { 
      this.onboardingForm = {
          name: '',
          location: '',
          type: '',
          date: '',
          time: '',
          description: '',
          cover_photo: '',
          tickets: '',
          email: '',
          phone: '',
          bank: '',
          account_number: '',
          ticketList: [],
          // eventId: new FormControl('', Validators.required)
          };
      }

  ngOnInit() {}

  addImagesFirebase(event) {
    const files = event.target.files;
    const j = files.length;
    let file;
    for (let i = 0; i < j; i++) {
        const reader = new FileReader();
        file = files[i];
        console.log(file);
        this.uploadImageToFireBase(file);
    }
  }

  uploadImageToFireBase(image) {
      this.loading = true;
      try {
          this.fireService.uploadFile(image).then((success) => {
              const imageRef = success.ref.fullPath;
              this.fireService.downloadItem(imageRef).subscribe(imageUrl => {
                  this.photo = imageUrl;
                  this.onboardingForm.cover_photo = imageUrl
                  this.loading = false;
              });
          });
      } catch (error) {
          this.loading = false;
          console.log(error);
          this.logicService.presentAlert('Error uploading document', ' check your connection and try again.');
      }
  }

  async addTicket(event) {
    event.preventDefault();
    const modal = await this.modalController.create({
      component: AddTicketComponent,
      // componentProps: { eventId: this.eventId, }
    });

    await modal.present();

    const data = await modal.onDidDismiss();
    console.log(data)
    if (data?.data?.data) {
      this.onboardingForm.ticketList.push(data?.data?.data);
    }
  }

  finalize(event: Event) {
    event.preventDefault();
    console.log('heree')
    console.log(this.onboardingForm)
  }
}

