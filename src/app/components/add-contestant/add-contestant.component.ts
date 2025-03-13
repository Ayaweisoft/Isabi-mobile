import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LogicService } from 'src/app/services/logic.service';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-add-contestant',
  templateUrl: './add-contestant.component.html',
  styleUrls: ['./add-contestant.component.scss'],
})
export class AddContestantComponent implements OnInit {
    @Input()  
        loading: boolean;
        image: any;
        contestantForm: FormGroup;

    validationMessages = {
        fullname: [
            {type: 'required', message: 'Full Name type is required.'},
        ],
        nickname: [
            {type: 'required', message: 'Nick Name type is required.'},
        ],
    };

    constructor(private modalController: ModalController, private fireService:FirebaseService,
        private formBuilder: FormBuilder, private logicService: LogicService, private eventService: EventService) { 
        this.contestantForm = this.formBuilder.group({
            image_url: new FormControl('', Validators.compose([
            ])),
            fullname: new FormControl('', Validators.compose([
                Validators.required,
            ])),
            nickname: new FormControl('', Validators.compose([
                Validators.required,
            ])),
            // eventId: new FormControl('', Validators.required),
        });
        }

    ngOnInit() {

        // console.log(this.eventId);
        // this.contestantForm.get('eventId').setValue(this.eventId);
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
                    this.contestantForm.get('image_url').setValue(imageUrl)
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
        console.log(this.contestantForm.value)
        this.modalController.dismiss({data: this.contestantForm.value});
    }

}
