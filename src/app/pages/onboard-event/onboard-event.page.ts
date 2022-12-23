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
  tickets = [];
  loading: boolean = false;
  photo: String = '';
  onboardingForm: {
    eventOwnerUsername: '',
    eventOwner: '',
    companyName: '',
    eventName: '',
    eventLocation: '',
    eventType: '',
    startDate: '',
    startTime: '',
    aboutEvent: '',
    image_url: '',
    eventOwnerEmail: '',
    contactNumber: '',
    bank: '',
    account_number: '',
    newUser: Boolean,
    tickets:{
      "image_url": string,
      "ticket_type": string,
      "amount": number,
  }[],
  };

  // validationMessages = {
  //   ticketType: [
  //       {eventType: 'required', message: 'Ticket eventType is required.'},
  //   ],
  //   amount: [
  //       {eventType: 'required', message: 'amount is required.'},
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
          eventOwnerUsername: '',
          eventOwner: '',
          companyName: '',
          eventName: '',
          eventLocation: '',
          eventType: '',
          startDate: '',
          startTime: '',
          aboutEvent: '',
          image_url: '',
          eventOwnerEmail: '',
          contactNumber: '',
          bank: '',
          account_number: '',
          newUser: true,
          tickets: [],
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
                  this.onboardingForm.image_url = imageUrl
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
      this.onboardingForm.tickets.push(data?.data?.data);
    }
  }
  async removeTicket(event, ticket_type) {
    event.preventDefault();
    // console.log(event.target.value, ticket_type)
    // console.log(this.onboardingForm.tickets)
    this.onboardingForm.tickets = this.onboardingForm.tickets.filter((ticket, index) => ticket.ticket_type != ticket_type);
  }

  setNewUserTrue(){
    this.onboardingForm.newUser = true;
  }
  
  setNewUserFalse(){
    this.onboardingForm.newUser = false;
  }


  finalize(event: Event) {
    event.preventDefault();
    console.log('fired', this.onboardingForm)
    this.loading = true;
    this.userService.submitEvent(this.onboardingForm).subscribe(response => {
      this.loading = false;
      this.userService.generalAlert(response)
    }, err => {
      this.loading = false;
      console.log('fired', this.onboardingForm)
      this.userService.generalAlert(err.error.msg)
      console.log('failed to onboard event', err.error.msg);
    });
  }
}
// this.router.navigate(['/']);     

