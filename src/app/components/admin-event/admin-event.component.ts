import { Router } from '@angular/router';
import { UserService } from './../../shared/user.service';
import { EventService } from './../../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LogicService } from 'src/app/services/logic.service';

@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.scss'],
})
export class AdminEventComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
loading = false;
image: any;

  constructor( private eventService: EventService, 
    private userService: UserService,
    private fireService: FirebaseService,
    private logicService: LogicService,
               private router: Router) {}

  eventModel = {
    eventName: '', eventType: '', image_url: '', companyName: '', eventLocation: '', contactNumber: '', aboutEvent: '',bankname:'',
    costPerVote: '', numberOfSlot: '', sharingRatio_isabi: '',  sharingRatio_company: '', accountNumber: '', accountName: '',
    eventOwner:'', eventOwnerUsername: '', venue:null, startDate:null, time:null, businessSharingRatio:null, endDate:null, startTime:null,
    pay_item_id:'', merchant_code: ''
  }
  ngOnInit() {


  }


  submitEvent(){
    console.log(this.eventModel);
    this.eventService.submitEvent(this.eventModel).subscribe(
      res => {
         console.log('event submitted successful!');
         this.userService.shortToast(res['msg']);
         this.resetForm();
         setTimeout(()=>{
           this.router.navigateByUrl('/tabs/events')
         },2000)
      },
      err => {
        console.log('error submitting event.');
        this.userService.shortToast(err.error.msg);
      }
    );
  }

  eventType(event){
    console.log(event);
   
  }

  resetForm(){
    this.eventModel = {
      eventName: '', eventType: '', image_url: '', companyName: '', eventLocation: '', 
      contactNumber: '', aboutEvent: '',bankname:'',
      costPerVote: '', numberOfSlot: '', sharingRatio_isabi: '', 
       sharingRatio_company: '', accountNumber: '', accountName: '',eventOwner:'', eventOwnerUsername: '',
       venue:null, startDate:null, time:null,businessSharingRatio:null, endDate: null, startTime: null,
       pay_item_id:'', merchant_code:''
    }
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
