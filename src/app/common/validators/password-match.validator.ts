import { FormGroup } from '@angular/forms';

const pass = 'password'
const repeatPass = 'repeatPassword'

export const PasswordMatchValidator = (): any => {
  return (fg: FormGroup) => {
    const password = fg.get(pass)?.value;
    const repeatPassword = fg.get(repeatPass)?.value;
    const error = password === repeatPassword ? null : { repeatPassword: true };
    fg.get(repeatPass)?.setErrors(error);
    return error;
  };
};
