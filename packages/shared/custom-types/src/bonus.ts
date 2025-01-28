export type Bonus = {
  brand: string;
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  requiresKYC: boolean;
  depositCountMin?: number;
  depositCountMax?: number;
  balanceMustBeZero?: boolean;
  registrationWithinLastDays?: number;
  availableCountries?: string[];
};
