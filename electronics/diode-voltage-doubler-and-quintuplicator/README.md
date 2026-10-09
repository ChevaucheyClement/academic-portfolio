# Voltage doubler and quintuplicator (diodes)

> Electronics lab (UNSE), May 2025. 12 VAC half-secondary, breadboard builds.

## Problem
Build a diode-capacitor doubler and a quintuplicator, then observe output under load.

## Setup
Transformer 230→(12+12) VAC; diodes 1N4007; capacitors 1 µF/50 V; reported loads: 100 Ω/0.25 W for the doubler and 100 kΩ/0.25 W for the quintuplicator; Rigol DS1052. The materials list names 1 kΩ/1.2 W instead of the 100 Ω load described in the procedure.

## Method
Assemble doubler, probe nodes across the two diodes and storage caps, then repeat for quintuplicator by extending the ladder. Test with loads to show sag under current draw and verify resistor power limits.

## Key results
- Doubler: output ~2·V_peak in light load; under **R=100 Ω** heavy sag, used only for demonstration.
- Quintuplicator: high no-load DC; with **R=100 kΩ** the dissipation is safe (**~0.077 W** at 88 V), so the 0.25 W resistor is within limits.
- Resistor checks: at the report's stated 34.3 V, a **1 kΩ/1.2 W** candidate for the doubler calculates to **~1.17 W**, just within its rating. At the stated 88 V quintuplicator output, the same resistor calculates to **~7.74 W** and was rejected in favor of **100 kΩ/0.25 W**.

## What I learned / skills
Charge-pump behavior, load regulation limits of multipliers, practical diode drops and capacitor ripple under load.

## Files

- [English translation prepared for the portfolio](report.pdf)
- [Original Spanish report](es/TP2%20-%20Electronica%20-%20Chevauchey%20C.pdf)
