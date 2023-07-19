import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ser01Service } from '../services/ser01.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  formdata: any;
  data: any;

  constructor(private fb: FormBuilder, private service: Ser01Service, private router: Router) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email: [''],
      password: ['']
    })

    if (this.service.getToken()) {
      window.history.back();
    }
  }

  saved() {
    debugger
    this.formdata = this.login.value;

    this.service.lgetdata().subscribe((res: any) => {
      debugger
      this.data = res;

      if (this.formdata.email == this.data[0].loginid && this.formdata.password == this.data[0].password) {
        alert('Login successfully !');

        localStorage.setItem('token', "1");

        this.router.navigateByUrl('sinfo');
      }
      else {
        alert('Invalid Email or Password')
      }
    })

  }

}
