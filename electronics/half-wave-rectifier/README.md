# Half-wave rectifier

> Electronics lab (UNSE), Apr 2025. Transformer 12 VAC secondary, scope on bench.

## Problem
Build a half-wave rectifier, observe the waveforms with and without a reservoir capacitor, and verify safe load power.

## Setup
Transformer 230→(12+12) VAC, 1 A; diode 1N4007; electrolytic 100 µF/25 V; loads 100 Ω/5 W and 1 kΩ/1.2 W; Rigol DS1052 scope.

## Method
Measure VAC at the secondary, then insert rectifier and capacitor, probing nodes before/after the diode and at the capacitor. Compute required RL for 600 mA target, and verify power dissipation for available resistors.

## Key results
- Load for 0.6 A target (from 17.8 V peak): **R_L ≈ 29.66 Ω**, **P ≈ 10.68 W**
- Conservative checks using 17.8 V peak:
  - 100 Ω/5 W → **I_peak ≈ 178 mA**, **P ≈ 3.17 W**
  - 1 kΩ/1.2 W → **I_peak ≈ 17.8 mA** (safe)
- Waveforms: rectified half-wave; with 100 µF reservoir, DC level rises with ripple consistent with load.

The submitted PDF prints 3.97 W for the 100 Ω resistor. Using its stated 178 mA and P = I²R gives 3.17 W; the value above is the corrected arithmetic, not an additional measurement.

## What I learned / skills
Diode rectification, ripple vs. load, power checks against component ratings, scope probing of rectifier nodes.

## Files

- [English translation prepared for the portfolio](report.pdf)
- [Original Spanish report](es/TP1%20-%20Electronica%20-%20Chevauchey%20C.pdf)
