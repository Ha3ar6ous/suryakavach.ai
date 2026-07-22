import type { RiskLevel } from '../types/heatwave';

export const riskColorMap: Record<RiskLevel, string> = {
  Normal: 'bg-emerald-100 text-emerald-900 border-emerald-700',
  Moderate: 'bg-amber-100 text-amber-900 border-amber-700',
  Severe: 'bg-orange-100 text-orange-900 border-orange-700',
  Extreme: 'bg-red-100 text-red-900 border-red-700',
};

export const neoCard = 'rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-[3px_3px_0px_0px_#0f172a]';
export const neoButton = 'rounded-xl border-2 border-slate-900 px-4 py-2 font-bold shadow-[3px_3px_0px_0px_#0f172a] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#0f172a] active:shadow-none';
export const neoInput = 'rounded-xl border-2 border-slate-900 bg-white px-3 py-2 font-medium outline-none focus:ring-2 focus:ring-blue-500';

export function getRiskColor(riskLevel: string): string {
  return riskColorMap[riskLevel as RiskLevel] ?? 'bg-slate-100 text-slate-800 border-slate-400';
}
