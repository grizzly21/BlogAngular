import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent{

  avatarFile!: File;

  constructor() { }

  onChangeAvatar(event: any){
    this.avatarFile = <File>event.target.files[0];
    console.log(this.avatarFile)
  }

}
