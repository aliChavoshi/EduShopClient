import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { IAddress } from 'src/app/shared/models/user';
import { CheckoutFormBuilderService } from '../checkout-form-builder.service';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent implements OnInit, OnDestroy {
  sub$ = new Subscription();
  public addresses: IAddress[] = [];
  public indexAddressShipping = 0;

  constructor(private accountService: AccountService, private formBuilder: CheckoutFormBuilderService) {}

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
  ngOnInit(): void {
    this.getAddresses();
    this.formBuilder.$formBuilder.subscribe((res) => {
      console.log(res);
    });
  }

  private getAddresses() {
    const sub = this.accountService.getAddresses().subscribe((res: IAddress[]) => {
      this.addresses = res;
      this.indexAddressShipping = res.findIndex((x) => x.isMain);
      this.onChangeAddressShipping(this.indexAddressShipping);
    });
    this.sub$.add(sub);
  }

  setToMainAddress(index: number) {
    //refresh isMain
  }
  onChangeAddressShipping(index: number) {
    // product => address
    const address = this.addresses[index];
    this.indexAddressShipping = index;
    this.formBuilder.setAddress(address);
  }
}
