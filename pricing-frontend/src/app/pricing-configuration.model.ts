export interface PricingConfiguration {
    _id: string;
    name: string;
    distanceBasePrice: number;
    distanceAdditionalPrice: number;
    timeMultiplierFactor: number;
    waitingCharges: number;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }
  