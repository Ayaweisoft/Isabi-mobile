import { UserService } from './../../shared/user.service';
import { EventService } from './../../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LogicService } from 'src/app/services/logic.service';

@Component({
  selector: 'app-inside-event-add-user',
  templateUrl: './inside-event-add-user.component.html',
  styleUrls: ['./inside-event-add-user.component.scss'],
})
export class InsideEventAddUserComponent implements OnInit {
  loading: boolean = false;
  photo: String = '';



  constructor(
    public modalController: ModalController, public navParams: NavParams,
        private eventService: EventService, public userService: UserService,
    private fireService:FirebaseService,
    private logicService: LogicService,

      ) { 
                  // console.log('id', navParams.get('event_id'));
                  this.contesttModel.event_id =  navParams.get('event_id');
  }

  contesttModel = {
        event_id: '', fullname: '', nickname: '', image_url: ''
  }
 
  ngOnInit() {
  
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
        // console.log(file);
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
                  this.contesttModel.image_url = imageUrl
                  this.loading = false;
              });
          });
      } catch (error) {
          this.loading = false;
          // console.log(error);
          this.logicService.presentAlert('Error uploading document', ' check your connection and try again.');
      }
  }




  submitUser(){
    // console.log(this.contesttModel);
    this.eventService.createContestTant(this.contesttModel).subscribe(
      res => {
        this.closeModal();
        this.userService.shortToast(res['msg']);
      },
      err => {
          this.userService.longToast(err.error.msg);
      }
    )
  }

}
