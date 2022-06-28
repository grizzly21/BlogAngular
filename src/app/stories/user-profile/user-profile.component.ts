import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { StoriesService } from 'src/app/common/services/stories.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent{

  avatarPreview!: string;
  avatarFile!: File;

  constructor(private storiesService: StoriesService) { }

  onChangeAvatar(event: any){
    const reader = new FileReader();

    const file = event.target.files[0];
    this.avatarFile = file;

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.avatarPreview = reader.result as string;
    }
  }

  onUploadAvatar(){
    const uploadData = new FormData();
    uploadData.append('image', this.avatarFile, this.avatarFile.name);

    this.storiesService.uploadAvatar(uploadData)
      .subscribe(
        (next) => {
          alert('Avatar upload succesfully');
        },
        (err) => {
          alert('Something went wrong...')
        }
      )
  }
}
