---
layout: case-study
title: Electronics II | Seven course reports
lang: en
translation: /es/electronics-ii/
permalink: /electronics-ii/
description: Supervised electronics coursework covering diodes, BJT amplifiers and operational amplifiers, with original reports.
---

[← Back to projects]({{ '/#projects' | relative_url }})

# Electronics II

**Seven supervised course TPs · Universidad Nacional de Santiago del Estero · 2025**

These reports document my circuit calculations, simulations and laboratory observations. The type of evidence varies by TP: the BJT bias exercise is calculated, the cascaded amplifier is simulated, and the op-amp report does not establish separate bench measurements. I describe each result according to what its report records.

## Selected findings

### Zener clipper · TP3

I designed an asymmetric clipper for approximately **+6.3 V and −4.6 V**. The laboratory report records clipping near **+7.2 V and −6.0 V**, showing a difference between the design thresholds and the observed waveform. The exercise also checked current sharing with a parallel load and component power ratings.

### Single-stage BJT amplifier · TP5

For a common-emitter amplifier designed for a gain magnitude of about **15**, the report records about **18** at low frequency. During the bench frequency sweep, the magnitude fell to **10.88 at 1 MHz**. This makes the gain-versus-bandwidth tradeoff visible in the measured results.

### Cascaded BJT amplifier · TP6

The calculated two-stage gain was approximately **272**. The submitted Proteus sweep reports combined gain between roughly **260 and 430**, depending on frequency and loading. This TP documents design and simulation, not a recorded bench build.

![Oscilloscope trace documented in the electronics coursework]({{ '/assets/thumbs/electronics-lab-oscilloscope.jpg' | relative_url }})

## Original reports

All seven submitted reports are in Spanish. Open a PDF in the browser or download the same original file:

| TP | Topic | PDF |
| --- | --- | --- |
| 1 | Half-wave rectifier and capacitor filtering | [Read]({{ '/assets/reports/electronics-ii/tp1-half-wave-rectifier.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp1-half-wave-rectifier.pdf' | relative_url }}" download>Download</a> |
| 2 | Diode voltage multipliers and loading | [Read]({{ '/assets/reports/electronics-ii/tp2-voltage-multipliers.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp2-voltage-multipliers.pdf' | relative_url }}" download>Download</a> |
| 3 | Asymmetric Zener clipper | [Read]({{ '/assets/reports/electronics-ii/tp3-zener-clipper.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp3-zener-clipper.pdf' | relative_url }}" download>Download</a> |
| 4 | BJT operating points | [Read]({{ '/assets/reports/electronics-ii/tp4-bjt-bias.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp4-bjt-bias.pdf' | relative_url }}" download>Download</a> |
| 5 | Single-stage BJT amplifiers | [Read]({{ '/assets/reports/electronics-ii/tp5-bjt-amplifier.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp5-bjt-amplifier.pdf' | relative_url }}" download>Download</a> |
| 6 | Cascaded BJT amplifier | [Read]({{ '/assets/reports/electronics-ii/tp6-cascaded-amplifier.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp6-cascaded-amplifier.pdf' | relative_url }}" download>Download</a> |
| 7 | Op-amp amplifier and oscillator | [Read]({{ '/assets/reports/electronics-ii/tp7-op-amp.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp7-op-amp.pdf' | relative_url }}" download>Download</a> |

The [project summaries on GitHub](https://github.com/ChevaucheyClement/academic-portfolio/tree/main/electronics) give the method and evidence limits for each TP.
