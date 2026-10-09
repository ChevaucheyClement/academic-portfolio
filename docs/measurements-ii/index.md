---
layout: case-study
title: Electrical Measurements II | Laboratory case study
lang: en
translation: /es/measurements-ii/
permalink: /measurements-ii/
description: Supervised university laboratory work on three-phase phasors and insulation-resistance measurements.
---

[← Back to projects]({{ '/#projects' | relative_url }})

# Electrical Measurements II

**Two supervised laboratory reports · Universidad Nacional de Santiago del Estero · September 2026**

The two course reports bear my name. I took part in instrument setup, recorded readings and interpreted the results under the supervision of the teaching engineers.

## 1. Unbalanced three-phase network

**Task.** Observe how resistive, inductive and capacitive loads change the current phasors of a three-phase network.

**Method.** We used resistive and capacitive load banks, a motor, three current transformers and a Fluke 434 power-quality analyzer. The bench readings were approximately 400 V line-to-line, 230 V phase-to-neutral and 50 Hz.

**Result.** The voltage phasors remained roughly 120° apart. Current was approximately in phase with voltage for a resistive load, lagged with the motor, and led with capacitive loading. Reversing one current sensor shifted its displayed current phasor by 180°, demonstrating why sensor orientation and phase mapping matter.

The report includes analyzer screens and photographs; its phasor findings are qualitative.

## 2. Insulation-resistance measurements

**Task.** Measure insulation resistance on a cable, dry transformer and motor, then calculate selected time-based ratios.

**Method.** We used a megohmmeter at 1 kV DC for the cable, 5 kV DC for the dry transformer and 500 V DC for the motor. The table reproduces readings and rounded ratios from the submitted report.

| Test object | Recorded readings | Time ratio |
| --- | --- | --- |
| 0.6/1 kV cable | 114 GΩ at 30 s; 116 GΩ at 60 s | 60 s / 30 s ≈ 1.02 |
| 13.2 kV dry transformer | 749 MΩ at 1 min; 1.08 GΩ at 10 min | 10 min / 1 min ≈ 1.44 |
| Motor | 352 MΩ at 1 min; 356 MΩ at 10 min | 10 min / 1 min ≈ 1.01 |

![Power-quality analyzer and university laboratory bench used in the three-phase exercise]({{ '/assets/thumbs/measurements-ii-lab.jpg' | relative_url }})

*Photograph from the submitted three-phase laboratory report.*

Additional readings were 111 and 116 GΩ between cable neutral and phases, 208–218 MΩ from motor phase to earth, and 341–350 MΩ between motor phases. The ratios alone do not establish equipment condition or compliance.

## What this work shows

Instrument setup, phasor interpretation, resistance readings, ratio calculations and technical reporting. The [English project summary](https://github.com/ChevaucheyClement/academic-portfolio/blob/main/measurements-ii/README.md) gives more detail.

## Original reports

Both submitted reports are in Spanish and can be opened in the browser or downloaded:

- **TP1 — Unbalanced three-phase network (7 pages):** [Read PDF]({{ '/assets/reports/measurements-ii/tp1-unbalanced-three-phase-network.pdf' | relative_url }}) · <a href="{{ '/assets/reports/measurements-ii/tp1-unbalanced-three-phase-network.pdf' | relative_url }}" download>Download PDF</a>
- **TP2 — Insulation testing (5 pages):** [Read PDF]({{ '/assets/reports/measurements-ii/tp2-insulation-testing.pdf' | relative_url }}) · <a href="{{ '/assets/reports/measurements-ii/tp2-insulation-testing.pdf' | relative_url }}" download>Download PDF</a>
