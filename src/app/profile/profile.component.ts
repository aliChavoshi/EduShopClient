import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public sidenavOpen: boolean = true;
  public title: string = '';

  constructor(public accountService: AccountService, private route: ActivatedRoute) {}

  public links = [
    {
      name: 'اطلاعات شخصی',
      href: 'information',
      icon: 'fa-solid fa-circle-info',
      attachFiles: false
    },
    { name: 'سفارش‌های من', href: 'orders', icon: 'fas fa-table-list', attachFiles: true },
    {
      name: 'کالاهای مورد علاقه',
      href: 'favorites',
      icon: 'fa-solid fa-thumbs-up',
      attachFiles: false
    },
    { name: 'نشانی‌ها', href: 'addresses', icon: 'fa-solid fa-location-dot', attachFiles: false },
    { name: 'نظرات', href: 'comments', icon: 'fa-solid fa-comment', attachFiles: false },
    { name: 'پیام‌ها', href: 'notifications', icon: 'fa-solid fa-bell', attachFiles: false },
    { name: 'تغییر کلمه عبور', href: 'changePassword', icon: 'fas fa-lock', attachFiles: false }
  ];

  ngOnInit(): void {
    this.title = this.route?.snapshot?.firstChild?.data['title'] as string;
  }
}
