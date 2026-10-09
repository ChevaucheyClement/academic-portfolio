---
layout: case-study
title: Electrical Measurements II | Laboratory case study
lang: en
permalink: /measurements-ii/
description: Supervised university laboratory work on three-phase phasors and insulation-resistance measurements.
---

[← Back to projects]({{ '/#projects' | relative_url }})

# Electrical Measurements II

**Two supervised laboratory reports · Universidad Nacional de Santiago del Estero · September 2026**

The two course reports bear my name. I took part in instrument setup, recorded observations and readings, and interpreted the results in the submitted reports under the supervision of the teaching engineers. These were university exercises, not independent equipment inspections.

## 1. Unbalanced three-phase network

**Task.** Observe how resistive, inductive and capacitive loads change the current phasors of a three-phase network.

**Method.** We used resistive and capacitive load banks, a motor, three current transformers and a Fluke 434 power-quality analyzer. The bench readings were approximately 400 V line-to-line, 230 V phase-to-neutral and 50 Hz.

**Result.** The voltage phasors remained roughly 120° apart. Current was approximately in phase with voltage for a resistive load, lagged with the motor, and led with capacitive loading. Reversing one current sensor shifted its displayed current phasor by 180°, demonstrating why sensor orientation and phase mapping matter.

The report includes analyzer screens and photographs, but no complete table of current magnitudes and angles. These findings are qualitative.

## 2. Insulation-resistance measurements

**Task.** Measure insulation resistance on a cable, dry transformer and motor, then calculate selected time-based ratios.

**Method.** We used a megohmmeter at 1 kV DC for the cable, 5 kV DC for the dry transformer and 500 V DC for the motor. The table reproduces readings and rounded ratios from the submitted report.

| Test object | Recorded readings | Time ratio |
| --- | --- | --- |
| 0.6/1 kV cable | 114 GΩ at 30 s; 116 GΩ at 60 s | 60 s / 30 s ≈ 1.02 |
| 13.2 kV dry transformer | 749 MΩ at 1 min; 1.08 GΩ at 10 min | 10 min / 1 min ≈ 1.44 |
| Motor | 352 MΩ at 1 min; 356 MΩ at 10 min | 10 min / 1 min ≈ 1.01 |

![Recorded insulation-resistance time ratios for the cable, dry transformer and motor]({{ '/assets/thumbs/measurements-ii-results.svg' | relative_url }})

*The bars show the recorded ratios on a common numeric scale. The cable interval is 30–60 seconds; the transformer and motor intervals are 1–10 minutes. The ratios therefore should not be treated as comparable equipment ratings.*

Additional readings were 111 and 116 GΩ between cable neutral and phases, 208–218 MΩ from motor phase to earth, and 341–350 MΩ between motor phases. The report cautions against interpreting the indices on their own. I do not draw a serviceability or compliance conclusion from them.

## What this work shows

Instrument setup in supervised labs, phasor interpretation, careful recording of resistance readings, ratio calculations and technical reporting. The source reports remain in my private university folder; the [English project summary](https://github.com/ChevaucheyClement/academic-portfolio/blob/main/measurements-ii/README.md) explains their scope.
