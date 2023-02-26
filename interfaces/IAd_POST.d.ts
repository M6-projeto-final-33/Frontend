export interface IAd_POST {
  typeAd: "sale" | "auction";
  title: string;
  year: string;
  mileage: string;
  price: number;
  description: string;
  vehicleType: "car" | "motorbike";
  isActive: boolean;
  coverImg: string;
  userId: string;
}
