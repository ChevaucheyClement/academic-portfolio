# Zener clipper (dual thresholds)

> Electronics lab (UNSE), May 2025. Zener clamp with two thresholds, measured under different loads.

## Problem
Design an asymmetric clipper with two Zeners to clamp at approximately **+6.3 V** and **−4.6 V**.

## Setup
Zeners: 1N4732A (5.6 V), 1N4734A (3.9 V); series resistors 150 Ω/1 W ×2; transformer half-secondary 12 VAC; scope + DMM.

## Method
Anti-series Zeners with a current-limiting resistor; measure input/output. Repeat with a parallel load to show clamp current sharing and recompute Zener current from measured RMS on the load.

## Key results
- Thresholds: **+6.3 V** from the 5.6 V Zener and forward diode drop; **−4.6 V** from the 3.9 V Zener and forward diode drop
- Series-resistor dissipation at peak current: **0.76 W** → 1 W part is adequate
- With parallel load: measured **V_rms ≈ 5.31 V** across 150 Ω ⇒ **I_load ≈ 35.4 mA**
- Zener current at that point: **I_Z ≈ 37.6 mA** (from 71 mA budget)

## What I learned / skills
Zener clamp design, sizing for Zener and resistor power, interpreting RMS under non-sinusoidal waveforms, sharing between Zener and load.

## Files

- [English report](report.pdf)
- [Original Spanish report](es/TP3%20-%20Electronica%20-%20Chevauchey%20C.pdf)
