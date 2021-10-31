import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private storage: AngularFireStorage, ) { }


  downloadItem(photoUrl: string): Observable<any> {
    return this.storage.ref(photoUrl).getDownloadURL();
  }
  
  
  uploadFile( image: any): AngularFireUploadTask {
    console.log('file', image);
    return this.storage.upload(`${'image'}`+Date.now(), image);
  }
  
  uploadImage(email: string, imageFile: File): AngularFireUploadTask {
    console.log('file', imageFile);
    return this.storage.upload(`${email}/${imageFile.name}`+ Date.now(), imageFile);
  }
  
}
