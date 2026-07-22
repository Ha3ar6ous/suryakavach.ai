import type { CityHeatData, ForecastData } from '../types/heatwave';

export const mockCities: CityHeatData[] = [
  { id: 'nagpur', city: 'Nagpur', state: 'Maharashtra', temp: 46.2, feelsLike: 49.1, humidity: 22, uvIndex: 11, windSpeed: 9, riskLevel: 'Extreme', awsStationId: 'NGP-AWS-021', awsDeviance: '+0.4°C vs AI Model', heatwaveDaysConsecutive: 6, recommendedWaterIntake: 4.5 },
  { id: 'delhi', city: 'Delhi NCR', state: 'Delhi', temp: 44.7, feelsLike: 48.3, humidity: 28, uvIndex: 10, windSpeed: 12, riskLevel: 'Extreme', awsStationId: 'DEL-AWS-008', awsDeviance: '-0.2°C vs AI Model', heatwaveDaysConsecutive: 5, recommendedWaterIntake: 4.2 },
  { id: 'ahmedabad', city: 'Ahmedabad', state: 'Gujarat', temp: 43.8, feelsLike: 46.5, humidity: 25, uvIndex: 10, windSpeed: 14, riskLevel: 'Severe', awsStationId: 'AMD-AWS-014', awsDeviance: '+0.1°C vs AI Model', heatwaveDaysConsecutive: 4, recommendedWaterIntake: 4 },
  { id: 'jhansi', city: 'Jhansi', state: 'Uttar Pradesh', temp: 42.9, feelsLike: 45.2, humidity: 20, uvIndex: 9, windSpeed: 10, riskLevel: 'Severe', awsStationId: 'JHS-AWS-003', awsDeviance: '+0.6°C vs AI Model', heatwaveDaysConsecutive: 3, recommendedWaterIntake: 3.8 },
  { id: 'mumbai', city: 'Mumbai', state: 'Maharashtra', temp: 35.6, feelsLike: 41.2, humidity: 72, uvIndex: 8, windSpeed: 18, riskLevel: 'Moderate', awsStationId: 'MUM-AWS-019', awsDeviance: '-0.3°C vs AI Model', heatwaveDaysConsecutive: 1, recommendedWaterIntake: 3.2 },
  { id: 'hyderabad', city: 'Hyderabad', state: 'Telangana', temp: 39.8, feelsLike: 42.1, humidity: 31, uvIndex: 9, windSpeed: 11, riskLevel: 'Moderate', awsStationId: 'HYD-AWS-011', awsDeviance: '+0.2°C vs AI Model', heatwaveDaysConsecutive: 2, recommendedWaterIntake: 3.5 },
];

export const mockForecast: ForecastData[] = [
  { date: 'Jul 22', aiPredictedTemp: 46.2, awsObservedTemp: 46.6, historicalAvg: 37.1, risk: 'Extreme' },
  { date: 'Jul 23', aiPredictedTemp: 45.8, awsObservedTemp: 45.5, historicalAvg: 37.2, risk: 'Extreme' },
  { date: 'Jul 24', aiPredictedTemp: 44.6, awsObservedTemp: 44.2, historicalAvg: 37.0, risk: 'Extreme' },
  { date: 'Jul 25', aiPredictedTemp: 43.4, awsObservedTemp: 43.7, historicalAvg: 36.8, risk: 'Severe' },
  { date: 'Jul 26', aiPredictedTemp: 42.1, awsObservedTemp: 42.3, historicalAvg: 36.7, risk: 'Severe' },
  { date: 'Jul 27', aiPredictedTemp: 40.6, awsObservedTemp: 40.1, historicalAvg: 36.4, risk: 'Moderate' },
  { date: 'Jul 28', aiPredictedTemp: 39.2, awsObservedTemp: 39.4, historicalAvg: 36.3, risk: 'Moderate' },
];
