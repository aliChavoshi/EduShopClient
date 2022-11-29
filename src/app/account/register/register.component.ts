import { BreadcrumbService } from 'xng-breadcrumb';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private bcService: BreadcrumbService) {}

  ngOnInit(): void {
    this.bcService.set('@register', 'ثبت نام در سایت');
  }
}
