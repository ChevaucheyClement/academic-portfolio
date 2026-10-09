# Op-amp: gain-20 amplifier and square-wave oscillator

> Electronics II (UNSE), May 2025. Design calculations and simulations documented in the user-provided TP7 report.

## Problem
1) Design a non-inverting LM741 amplifier with **A_v = 20**.
2) Design a variable-frequency square-wave oscillator targeting **1–10 kHz** and **5 V** output.

## Setup
LM741 non-inverting amplifier and RC oscillator design; the report also compares the LM741 with a TL081 in simulation. It lists a scope, breadboard and supply, but does not clearly distinguish separate physical bench measurements from simulated observations.

## Method
- **Amplifier:** A_v = 1 + R_f/R_1 ⇒ choose **R_f ≈ 19 kΩ**, **R_1 ≈ 1 kΩ**.
- **Oscillator:** use Schmitt-trigger comparator + RC; with β = R1/(R1+R2) ≈ 0.5, frequency **f ≈ 0.455/(R·C)**. The calculations use **C = 10 nF**, a **50 kΩ** potentiometer and a **4.7 kΩ** series resistor. The report describes a simulated square-wave response.

## Key results
- Non-inverting stage: calculated nominal **A_v = 20** with 1 kΩ/19 kΩ. The report states approximate simulated −3 dB cutoff frequencies of **50 kHz** for LM741 and **175 kHz** for TL081.
- Oscillator: the specified resistor range and **10 nF** design capacitor imply approximately **0.83–9.68 kHz**. The report's materials list instead names a **2.2 nF** capacitor.
- The report describes stable oscillation and square-wave output in simulation. **1–10 kHz** and **5 V** were assignment targets; it does not tabulate a measured oscillator frequency or output amplitude that verifies those targets.

## What I learned / skills
Op-amp feedback ratio, simulated bandwidth comparison, Schmitt-trigger concept and RC timing calculations. Physical bench performance remains unverified in this report.

## Files

- [English translation prepared for the portfolio](report.pdf)
- [Spanish TP7 report supplied for this portfolio](es/TP7%20-%20Electronica%20-%20Chevauchey%20C.pdf)
