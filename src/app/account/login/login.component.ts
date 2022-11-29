import { BreadcrumbService } from 'xng-breadcrumb';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private bcService: BreadcrumbService) {}

  ngOnInit(): void {
    this.bcService.set('@login', 'ورود به سایت');
  }
}
