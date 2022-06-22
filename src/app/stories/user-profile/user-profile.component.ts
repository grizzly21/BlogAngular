import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent{

  avatarFile!: string;

  constructor() { }

  onChangeAvatar(event: any){
    const reader = new FileReader();

    const file = event.target.files[0];
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.avatarFile = reader.result as string;

    }
  }
}
