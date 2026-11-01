export type VehicleSize = 'Small' | 'Medium' | 'Large' | 'SUV / 4x4';

export type ServiceType =
  | 'Exterior Detail'
  | 'Interior Detail'
  | 'Full Valet'
  | 'Paint Enhancement'
  | 'Not Sure — Need Advice';

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleReg: string;
  vehicleSize: VehicleSize;
  serviceRequired: ServiceType;
  postcode: string;
  preferredDate: string;
  preferredTime: string;
  additionalInfo: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  inclusions: string[];
  startingPrice: string;
  typicalDuration: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'interior' | 'wheels' | 'enhancement';
  description: string;
  aspect: string;
  imageUrl: string;
  details: string[];
}
