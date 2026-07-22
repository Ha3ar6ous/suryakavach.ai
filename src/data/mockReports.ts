import type { IncidentReport } from '../types/heatwave';

export const mockReports: IncidentReport[] = [
  { id: 'ir-1', city: 'Nagpur', severity: 'Extreme', symptoms: ['Dizziness', 'Dehydration'], timestamp: '2026-07-22T11:15:00+05:30', awsVerified: true, stressScore: 92 },
  { id: 'ir-2', city: 'Delhi NCR', severity: 'Severe', symptoms: ['Heat cramps', 'Fatigue'], timestamp: '2026-07-22T10:40:00+05:30', awsVerified: true, stressScore: 78 },
  { id: 'ir-3', city: 'Ahmedabad', severity: 'Severe', symptoms: ['Fainting', 'Headache'], timestamp: '2026-07-22T09:55:00+05:30', awsVerified: false, stressScore: 74 },
  { id: 'ir-4', city: 'Jhansi', severity: 'Moderate', symptoms: ['Thirst', 'Weakness'], timestamp: '2026-07-22T09:20:00+05:30', awsVerified: true, stressScore: 58 },
];

export const mockTrends = [
  { month: 'Mar', reports: 12, stress: 31 },
  { month: 'Apr', reports: 28, stress: 54 },
  { month: 'May', reports: 53, stress: 82 },
  { month: 'Jun', reports: 44, stress: 70 },
  { month: 'Jul', reports: 61, stress: 88 },
];
