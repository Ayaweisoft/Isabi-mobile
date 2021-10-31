import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LogicService } from 'src/app/services/logic.service';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-inside-ticket-add-ticket',
  templateUrl: './inside-ticket-add-ticket.component.html',
  styleUrls: ['./inside-ticket-add-ticket.component.scss'],
})
export class InsideTicketAddTicketComponent implements OnInit {
@Input()  eventId;
  loading: boolean;
  image: any;
  ticketForm: FormGroup;



  validationMessages = {
    ticketType: [
        {type: 'required', message: 'Ticket type is required.'},
    ],
    amount: [
        {type: 'required', message: 'amount is required.'},
    ],


};

  constructor(private modalController: ModalController, private fireService:FirebaseService,
    private formBuilder: FormBuilder, private logicService: LogicService, private eventService: EventService) { 
      this.ticketForm = this.formBuilder.group({
        imageUrl: new FormControl('', Validators.compose([
        ])),
        ticketType: new FormControl('', Validators.compose([
            Validators.required,
        ])),
        amount: new FormControl(null, Validators.required),
        eventId: new FormControl('', Validators.required),
    });
    }

  ngOnInit() {

    console.log(this.eventId);
    this.ticketForm.get('eventId').setValue(this.eventId);
  }


  closeModal(){
    this.modalController.dismiss();
  }




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
              this.image = imageUrl;
              this.ticketForm.get('imageUrl').setValue(imageUrl)
              this.loading = false;
          });
      });
  } catch (error) {
      this.loading = false;
      console.log(error);
      this.logicService.presentAlert('Error uploading document', ' check your connection and try again.');
  }
}
  
submitForm(){
  this.loading = true;
  console.log(this.ticketForm.value);
  this.eventService.submitTicket(this.ticketForm.value).subscribe(response => {
    this.ticketForm.reset();
    console.log(response)
    this.loading = false;
    this.modalController.dismiss({data: response['docs']});
  }, err => {
    this.loading = false;
    this.logicService.presentToast(err.error?.message);
  });
}

}
