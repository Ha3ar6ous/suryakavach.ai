export type RiskLevel = 'Normal' | 'Moderate' | 'Severe' | 'Extreme';
export type AdvisoryCategory = 'Citizen' | 'Worker' | 'Elderly' | 'Health';

export interface CityHeatData {
  id: string;
  city: string;
  state: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  uvIndex: number;
  windSpeed: number;
  riskLevel: RiskLevel;
  awsStationId: string;
  awsDeviance: string;
  heatwaveDaysConsecutive: number;
  recommendedWaterIntake: number;
}

export interface ForecastData {
  date: string;
  aiPredictedTemp: number;
  awsObservedTemp: number;
  historicalAvg: number;
  risk: RiskLevel;
}

export interface Advisory {
  id: string;
  category: AdvisoryCategory;
  title: string;
  body: string;
  actions: string[];
  confidence: number;
}

export interface CoolingCenter {
  id: string;
  name: string;
  address: string;
  hours: string;
  capacity: number;
  occupancy: number;
  isHospital: boolean;
  phone: string;
  distanceKm: number;
  amenities: string[];
}

export interface IncidentReport {
  id: string;
  city: string;
  severity: RiskLevel;
  symptoms: string[];
  timestamp: string;
  awsVerified: boolean;
  stressScore: number;
}
