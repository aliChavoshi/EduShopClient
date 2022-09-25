import { BreadcrumbService } from 'xng-breadcrumb';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  bcLength = 0;
  constructor(private bc: BreadcrumbService) {
    this.bc.breadcrumbs$.subscribe((breadcrumbs) => {
      console.log(breadcrumbs);
      
      this.bcLength = breadcrumbs?.length;
    });
  }

  ngOnInit(): void {}
}
