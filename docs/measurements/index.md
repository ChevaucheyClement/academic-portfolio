---
layout: case-study
title: Electrical Measurements | Seven laboratory reports
lang: en
translation: /es/measurements/
permalink: /measurements/
description: Seven supervised electrical measurement labs with original reports on instrument class, resistance, impedance and power.
---

[← Back to projects]({{ '/#projects' | relative_url }})

# Electrical Measurements

**Seven supervised laboratory TPs · Universidad Nacional de Santiago del Estero · 2025**

The reports bearing my name document instrument setups, readings and calculations completed as university laboratory work under teaching supervision. They cover DC resistance methods, AC impedance, instrument accuracy and power measurement. The figures and values below come from the submitted reports.

## Selected findings

### Ammeter accuracy class · TP1

I compared an analog ammeter with a class-0.5 reference across six readings. The greatest recorded absolute indication error was **0.01 A**; divided by the **1.2 A** full-scale range, this gave approximately **0.84%**, rounded up to **class 1**. The published readings concern the ammeter, although the assignment also mentions a voltmeter.

### Wheatstone bridge · TP4

Balancing a DC bridge gave **479.12 Ω** for a resistor nominally rated **500 Ω**. The report calculates **8.227% uncertainty** and **4.14% relative difference** from the nominal value. This exercise shows how bridge balance and component tolerances affect the result.

### Three-phase power · TP7
{: #three-phase-power }

<div class="case-study__evidence">
  <div>
    <p>For a balanced three-wire setup, the two-wattmeter method gave readings of roughly <strong>1010 W</strong> and <strong>688 W</strong>. Applying the current-transformer ratio gives <strong>3396 W indicated power</strong>; the report separately calculates approximately <strong>3383.77 W</strong> after instrument-loading correction. Its conclusion uses the indicated figure, so the two values should not be treated as the same result.</p>
  </div>
  <figure>
    <a href="{{ '/assets/thumbs/measurements-lab-aron.png' | relative_url }}"><img src="{{ '/assets/thumbs/measurements-lab-aron.png' | relative_url }}" alt="Two-wattmeter bench arrangement used in the three-phase power laboratory report" loading="lazy"></a>
    <figcaption>Two-wattmeter bench arrangement from the submitted TP7 report, page 7.</figcaption>
  </figure>
</div>

## Original reports

All seven submitted reports are in Spanish. Open a PDF in the browser or download the same original file:

| TP | Topic | PDF |
| --- | --- | --- |
| 1 | Ammeter accuracy class | [Read]({{ '/assets/reports/measurements/tp1-ammeter-class.pdf' | relative_url }}) · <a href="{{ '/assets/reports/measurements/tp1-ammeter-class.pdf' | relative_url }}" download>Download</a> |
| 2 | Resistance by short and long volt-ampere connections | [Read]({{ '/assets/reports/measurements/tp2-volt-ampere.pdf' | relative_url }}) · <a href="{{ '/assets/reports/measurements/tp2-volt-ampere.pdf' | relative_url }}" download>Download</a> |
| 3 | Resistance by comparison and substitution | [Read]({{ '/assets/reports/measurements/tp3-comparison-substitution.pdf' | relative_url }}) · <a href="{{ '/assets/reports/measurements/tp3-comparison-substitution.pdf' | relative_url }}" download>Download</a> |
| 4 | Wheatstone bridge | [Read]({{ '/assets/reports/measurements/tp4-wheatstone-bridge.pdf' | relative_url }}) · <a href="{{ '/assets/reports/measurements/tp4-wheatstone-bridge.pdf' | relative_url }}" download>Download</a> |
| 5 | Impedance by three voltmeters and three ammeters | [Read]({{ '/assets/reports/measurements/tp5-three-meters.pdf' | relative_url }}) · <a href="{{ '/assets/reports/measurements/tp5-three-meters.pdf' | relative_url }}" download>Download</a> |
| 6 | Single-phase power with a wattmeter | [Read]({{ '/assets/reports/measurements/tp6-single-phase-power.pdf' | relative_url }}) · <a href="{{ '/assets/reports/measurements/tp6-single-phase-power.pdf' | relative_url }}" download>Download</a> |
| 7 | Three-phase power by the Aron method | [Read]({{ '/assets/reports/measurements/tp7-three-phase-power.pdf' | relative_url }}) · <a href="{{ '/assets/reports/measurements/tp7-three-phase-power.pdf' | relative_url }}" download>Download</a> |

The [project summaries on GitHub](https://github.com/ChevaucheyClement/academic-portfolio/tree/main/measurements) document the method and any inconsistencies in each TP. No analysis script was used to produce these reports.
