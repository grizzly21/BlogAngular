import {FormGroup} from "@angular/forms";

export const PasswordMatchValidator = (): any => {
  return (fg: FormGroup) => {
    const password = fg.get('password')?.value;
    const repeatPassword = fg.get('repeatPassword')?.value;
    const error = password === repeatPassword ? null : {repeatPassword: true};
    fg.get('repeatPassword')?.setErrors(error)
    return error
  }

};
