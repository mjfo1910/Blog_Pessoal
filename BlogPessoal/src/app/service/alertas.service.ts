import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor( private bsModalService: BsModalService) { }

  private showAlert(messege: string, type: string) {
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent)
    bsModalRef.content.type = type
    bsModalRef.content.messege = messege
  }

  showAlertDanger(messege: string) {
    this.showAlert(messege, 'danger')
  }
  showAlertSucess(messege: string) {
    this.showAlert(messege, 'sucess')
  }

  showAlertInfo(messege: string) {
    this.showAlert(messege, 'info')
  }

}
