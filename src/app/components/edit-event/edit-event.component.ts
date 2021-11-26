import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LogicService } from 'src/app/services/logic.service';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
})
export class EditEventComponent implements OnInit {
@Input() event;
image: any;



eventModel = {
  _id: '',
  eventName: '', type: '', image_url: '', companyName: '', address: '', contactNumber: '', aboutEvent: '',bankName:'',
  costPerVote: '', numberOfSlot: '', sharingRatio_isabi: '',  sharingRatio_company: '', accountNumber: '', accountName: '',
  eventOwner:'', venue:null, startDate:null, time:null, businessSharingRatio:null, endDate:null, startTime:null
}
  loading: boolean;

  constructor(private modalController: ModalController, private fireService: FirebaseService,
    private logicService: LogicService, private eventService: EventService) { }

  ngOnInit() {
    console.log(this.event)
    this.image = this.event?.image_url;
    this.eventModel = {
      eventName:this.event?.eventName, type: this.event?.type, image_url:this.event?.image_url, 
      companyName: this.event?.companyName, address: this.event?.address, contactNumber: this.event?.contactNumber,
       aboutEvent: this.event?.aboutEvent, bankName: this.event?.voting_properties?.bankName, _id:this.event,
      costPerVote: this.event?.voting_properties?.costPerVote, numberOfSlot: this.event?.voting_properties?.numberOfSlot,
       sharingRatio_isabi: this.event?.voting_properties?.sharingRatio_isabi,
        sharingRatio_company: this.event?.voting_properties?.sharingRatio_company, accountNumber: this.event?.voting_properties?.accountNumber,
         accountName: this.event?.voting_properties?.accountName ,startTime:this.event?.startTime ,endDate:this.event?.endDate,
      eventOwner: this.event?.eventOwner, venue:this.event?.venue, startDate:this.event?.startDate,
       time:this.event?.time, businessSharingRatio:this.event?.businessSharingRatio
    }

  }

  dismiss(){
    this.modalController.dismiss();
  }


  updateEvent(){
    console.log(this.eventModel)
    this.loading = true;
    this.eventService.updateEvent(this.eventModel).subscribe(response=> {
      console.log(response)
      this.modalController.dismiss(response, "exist");
      this.loading = false;
    }, err=> {
      this.loading = false;
      this.logicService.presentToast(err.error.msg)
    })
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
              this.eventModel.image_url = imageUrl;
              this.loading = false;
          });
      });
  } catch (error) {
      this.loading = false;
      console.log(error);
      this.logicService.presentAlert('Error uploading document', ' check your connection and try again.');
  }
}
  

}
