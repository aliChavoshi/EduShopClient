import { IShipToAddress } from './address';
import { PortalTypeEnum } from './checkout';

export interface IDeliveryMethod {
  id: number;
  isDelete: boolean;
  shortName: string;
  deliveryTime: string;
  description: string;
  price: number;
}
//for request == body for request
export interface IOrderRequest {
  basketId: string;
  deliveryMethodId: number;
  buyerPhoneNumber: string;
  portalType: number; //1
  shipToAddress: IShipToAddress;
}
export interface IOrder {
  id: number;
  created: string;
  createdBy: string;
  lastModified: string;
  lastModifiedBy: string;
  buyerPhoneNumber: string;
  subTotal: number;
  trackingCode: string;
  isFinally: boolean;
  total: number;
  portal: Portal;
  portalType: number | string | PortalTypeEnum; //enum
  authority: string;
  link: string;
  status: number | string | OrderStatusEnum; //enum
  deliveryMethod: IDeliveryMethod;
  shipToAddress: IShipToAddress;
  orderItems: IOrderItem[];
}
export enum OrderStatusEnum {
  درحال_بررسی = 1,
  درحال_پردازش,
  تحویل_اداره_پست,
  ارسال_شده,
  تحویل_داده_شده,
  بازگشت_داده_شده,
  انصراف_داده_شده,
  ناموفق
}
export interface Portal {
  id: number;
  orderId: number;
  gateway: number;
  status: number;
  createdOn: string;
  amount: number;
  referenceId: string;
}
export interface IOrderItem {
  productItemId: number;
  productName: string;
  productTypeName: string;
  productBrandName: string;
  pictureUrl: string;
  id: number;
  price: number;
  quantity: number;
}
