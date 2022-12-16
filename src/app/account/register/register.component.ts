import { Register } from './../../shared/models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private bcService: BreadcrumbService, private accountService: AccountService) {}
  form = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    password: new FormControl(''),
    displayName: new FormControl('')
  });
  ngOnInit(): void {
    this.bcService.set('@register', 'ثبت نام در سایت');
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.accountService.register(<Register>this.form.value).subscribe();
  }
}
