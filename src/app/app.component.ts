import { Component, ViewEncapsulation, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-otp-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  
  @Input() clientId = 'Pepito';
  @Output() validOtp = new EventEmitter<boolean>();
  valid: boolean = false;
  validateOTP:boolean = false;

  sendOtp(cellphone) {
    this.validateOTP = true;
    console.log(cellphone);
    console.log(this.clientId);
  }

  verifyOtp(otp){
    this.valid = otp === '123456'
    console.log(otp);
    console.log(this.valid);
    this.validOtp.emit(this.valid);
  }
}