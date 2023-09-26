import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { OrdersComponent } from './orders/orders.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileRoutingModule } from './profile-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CastEnumPipe } from "../shared/pipes/cast-enum.pipe";
import { ShamsiPipe } from "../shared/pipes/shamsi.pipe";
@NgModule({
    declarations: [ProfileComponent, OrdersComponent, ChangePasswordComponent, NotificationsComponent],
    imports: [CommonModule, HttpClientModule, ProfileRoutingModule, ReactiveFormsModule, CoreModule, SharedModule, RouterModule, MatSidenavModule, CastEnumPipe, ShamsiPipe]
})
export class ProfileModule {}
