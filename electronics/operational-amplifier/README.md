# Op-amp: gain-20 amplifier and square-wave oscillator design

> Electronics II (UNSE), May 2025. Design calculations in the submitted TP7 report.

## Problem
1) Design a non-inverting LM741 amplifier with **A_v = 20**.
2) Design a variable-frequency square-wave oscillator targeting **1–10 kHz** and **5 V** output.

## Setup
Proposed LM741 feedback resistors and an RC network with positive feedback for the oscillator. The report lists a scope, breadboard and supply, but its op-amp sections do not document bench measurements.

## Method
- **Amplifier:** A_v = 1 + R_f/R_1 ⇒ choose **R_f ≈ 19 kΩ**, **R_1 ≈ 1 kΩ**.
- **Oscillator:** use Schmitt-trigger comparator + RC; with β = R1/(R1+R2) ≈ 0.5, frequency **f ≈ 0.455/(R·C)**. The calculations use **C = 10 nF**, a **50 kΩ** potentiometer and a **4.7 kΩ** series resistor.

## Key results
- Non-inverting stage: calculated nominal **A_v = 20** with 1 kΩ/19 kΩ.
- Oscillator: the specified resistor range and **10 nF** design capacitor imply approximately **0.83–9.68 kHz**. The report's materials list instead names a **2.2 nF** capacitor.
- The submitted PDF does not establish an op-amp build, frequency sweep or measured **5 V** output. Its later “lab” and conclusion pages discuss the TP6 cascaded BJT amplifier instead; they are not evidence for this TP7 design.

## What I learned / skills
Op-amp feedback ratio, Schmitt-trigger concept and RC timing calculations. Experimental oscillator performance remains unverified in this submitted report.

## Files

- [Original Spanish report](es/TP7%20-%20Electronica%20-%20Chevauchey%20C.pdf)
