import { Injectable } from '@angular/core';
import Swal, {SweetAlertType} from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  private notify(message: string, type: SweetAlertType = 'success') {
    const toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });


    toast.fire({
      type,
      title: message
    });
  }

  success(message: string) {
      return this.notify(message, 'success');
  }

  error(message: string) {
    return this.notify(message, 'error');
  }

  warning(message: string) {
    return this.notify(message, 'warning');
  }
}
