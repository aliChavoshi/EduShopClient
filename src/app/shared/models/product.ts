export interface IProduct {
  id: number;
  title: string;
  price: number;
  pictureUrl: string;
  productTypeId: number;
  productBrandId: number;
  productType: string; //title
  productBrand: string; //title
  description: string;
  isActive: boolean;
  summary: string;
}
