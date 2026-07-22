# suryakavach.ai — Climate Intelligence & Heatwave Early Warning System

> Predict extreme heat. Protect vulnerable cities.

suryakavach.ai is a climate-intelligence platform for tracking heat risk, validating AI forecasts against ground observations, and delivering practical safety guidance. It brings together IMD-aligned climate context, IoT Automated Weather Station (AWS) telemetry, AI heatwave intelligence, and stakeholder-specific LLM advisories.

## Why it matters

Extreme heat events are becoming more frequent and severe across India. Localized, real-time information is essential for helping communities, workers, health authorities, and emergency teams act before heat stress becomes a medical crisis.

## Research context

The application is designed around academic and research collaboration frameworks aligned with the India Meteorological Department (IMD), IoT AWS deployments, and applied AI/Data Science research. AWS observations provide the localized ground truth needed to responsibly validate forecasts.

## Five-layer system

1. **Data Acquisition** — IMD historical climate data plus real-time IoT AWS observations.
2. **Data Analytics** — Spatio-temporal analysis, segmentation, seasonal trends, and hotspot detection.
3. **AI Heatwave Intelligence** — Maximum-temperature forecasting, early warnings, and severity classification.
4. **Forecast Validation** — AWS ground-truth comparison and forecast-deviation monitoring.
5. **Decision Support** — LLM advisories and response portals for citizens, workers, vulnerable groups, and health agencies.

## Application modules

- Live heat-risk dashboard with city search, forecast/ground-truth trend charts, severity distribution, and peak-temperature comparisons.
- Stakeholder-specific AI advisory center with vulnerability radar chart and work-rest cycle calculator.
- Emergency cooling-center and hospital directory with occupancy, amenities, filters, and first-aid guidance.
- Crowd-sourced incident reporting network with category distribution and community trend charts.

## Technical stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Recharts
- Lucide React
- React Router DOM

## Local setup

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Folder structure

```text
suryakavach-ai/
├── src/
│   ├── components/layout/   # Navbar and footer
│   ├── data/               # Climate, advisory, shelter, and report datasets
│   ├── pages/              # Routed application pages
│   ├── types/              # Shared TypeScript models
│   ├── utils/              # Theme utilities
│   ├── App.tsx
│   └── index.css
├── package.json
└── README.md
```
