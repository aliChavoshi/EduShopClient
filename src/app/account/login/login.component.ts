import { Login } from './../../shared/models/user';
import { AccountService } from './../account.service';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private bcService: BreadcrumbService, private accountService: AccountService) {}
  form = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    password: new FormControl('', [Validators.required])
  });
  ngOnInit(): void {
    this.bcService.set('@login', 'ورود به سایت');
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.accountService.login(<Login>this.form.value).subscribe((response) => {
      console.log(response);
    });
  }
}
