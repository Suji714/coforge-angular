import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

  formdata: any;

  ngOnInit() {
    this.formdata = new FormGroup({
      emailId: new FormControl("suji7@gmail.com"),
      password: new FormControl("1234")
    });
  }
  onClickSubmit(data: any) {
    this.formdata.emailId = data.emailId;
    alert(" hello " + this.formdata.emailId);
  }

}
