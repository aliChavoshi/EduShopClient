import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.scss']
})
export class CheckoutSuccessComponent implements OnInit {
  status: 'failed' | 'cancelled' | 'success' | 'unknown' = 'unknown';
  constructor(private router: ActivatedRoute) {
    this.status = this.router.snapshot.queryParamMap.get('status') as any;
  }

  ngOnInit(): void {}
}
