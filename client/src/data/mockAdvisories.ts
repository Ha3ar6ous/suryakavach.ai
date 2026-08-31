import type { Advisory } from '../types/heatwave';

export const mockAdvisories: Advisory[] = [
  { id: 'citizen', category: 'Citizen', title: 'Build a heat-safe day plan', body: 'Use the cooler morning window for errands and keep indoor spaces shaded after 10 AM.', actions: ['Aim for 3.5–4.5 L of water today', 'Avoid direct UV from 11 AM–4 PM', 'Use fans with cross-ventilation or a cooling centre'], confidence: 96 },
  { id: 'worker', category: 'Worker', title: 'Mandatory outdoor work pause', body: 'Supervisors should enforce a 15-minute shaded rest cycle every hour during high-heat operations.', actions: ['Provide electrolyte drinks every two hours', 'Avoid peak sun from 12 PM–4 PM', 'Pair workers for symptom checks'], confidence: 98 },
  { id: 'elderly', category: 'Elderly', title: 'Activate neighbourhood check-ins', body: 'Older adults and people with chronic conditions should remain in rooms below 30°C where possible.', actions: ['Check room temperature twice daily', 'Watch for dry mouth, dizziness, or confusion', 'Arrange an emergency family check-in'], confidence: 95 },
  { id: 'health', category: 'Health', title: 'Prepare heatstroke surge protocol', body: 'Health authorities should verify cooling availability and prepare triage capacity ahead of afternoon peaks.', actions: ['Reserve ICU escalation beds', 'Refresh ORS and cooling supplies', 'Publish hospital surge contact routes'], confidence: 97 },
];
