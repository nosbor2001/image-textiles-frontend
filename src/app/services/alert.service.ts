import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  closeAlert(): void{
    Swal.close()
  }

  showAlert(title: string, message: string, icon: any = null, showCancelButton: boolean = true){
    return Swal.fire({
      title: title,
      text: message,
      icon: icon,
      showCancelButton: showCancelButton
    })
  }
}
