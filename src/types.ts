export type VehicleInfo = {
  make: string;
  model: string;
  year: number;
  usageType: 'private' | 'commercial';
  coverageType: 'third-party' | 'comprehensive';
};

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export interface Quote {
  vehicle: VehicleInfo;
  personal: PersonalInfo;
  estimatedPremium: number;
}
