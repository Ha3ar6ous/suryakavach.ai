import type { CoolingCenter } from '../types/heatwave';

export const mockShelters: CoolingCenter[] = [
  { id: 'civil-lines', name: 'Civil Lines Cooling Hub', address: 'Civil Lines, Nagpur', hours: '8 AM – 10 PM', capacity: 50, occupancy: 42, isHospital: false, phone: '0712-255-0101', distanceKm: 1.2, amenities: ['AC', 'Misting Fans', 'ORS Packets', 'Drinking Water'] },
  { id: 'gmc', name: 'Government Medical College', address: 'Medical Square, Nagpur', hours: '24 hours', capacity: 120, occupancy: 89, isHospital: true, phone: '0712-274-4676', distanceKm: 2.8, amenities: ['Emergency ICU', 'Paramedics', 'ORS Packets', 'Drinking Water'] },
  { id: 'sadar', name: 'Sadar Community Relief Hall', address: 'Sadar, Nagpur', hours: '9 AM – 8 PM', capacity: 75, occupancy: 31, isHospital: false, phone: '0712-256-1300', distanceKm: 3.6, amenities: ['AC', 'Misting Fans', 'Drinking Water', 'First Aid'] },
  { id: 'aiims', name: 'AIIMS Nagpur Emergency Wing', address: 'MIHAN, Nagpur', hours: '24 hours', capacity: 150, occupancy: 134, isHospital: true, phone: '0712-280-5000', distanceKm: 8.1, amenities: ['Emergency ICU', 'Paramedics', 'Ambulance', 'Drinking Water'] },
  { id: 'dharampeth', name: 'Dharampeth Cooling Pavilion', address: 'Dharampeth, Nagpur', hours: '8 AM – 9 PM', capacity: 40, occupancy: 16, isHospital: false, phone: '0712-252-8801', distanceKm: 4.4, amenities: ['AC', 'ORS Packets', 'Drinking Water', 'First Aid'] },
  { id: 'mayo', name: 'Mayo Hospital Heat Response Unit', address: 'Mominpura, Nagpur', hours: '24 hours', capacity: 90, occupancy: 67, isHospital: true, phone: '0712-272-5685', distanceKm: 5.3, amenities: ['Emergency ICU', 'Paramedics', 'Misting Fans', 'Ambulance'] },
];
