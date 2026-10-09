# Single-phase power measurement with wattmeter

> Electrical Measurements lab (UNSE), May–Jun 2025. AC source, resistive/inductive loads, analog wattmeter with CT.

## Problem
Measure active power with a wattmeter and current transformer; compute S, Q, PF; correct for instrument power draw and estimate uncertainty.

## Setup
Wattmeter; voltmeter; ammeter via CT; selectable loads (motor and air conditioner).
- photo: `figures/setup-AC.png`, `figures/setup-motor.png`
- diagram: `figures/diagram-AC.png`, `figures/diagram-motor.png`

## Method
Recorded wattmeter indication Pm along with V and I; applied the report's CT-ratio and instrument-loading correction for the motor. Computed S = UI, PF = P/S, and Q = √(S²−P²) where the reported values were internally consistent.

## Key results (Motor)
- **U = 220 V**, **I_c = 3.22 A**, **S = 708.4 VA**
- **R_VW ≈ 14.72 kΩ**, **R_V = 40 kΩ**, **CT ratio = 2:1**
- **P_carga = 217.5 W ± 3.96%** → **(218 ± 9) W** as rounded in the report
- **Q_carga ≈ 674.18 var**, **PF ≈ 0.31**, using the report's calculation table. Its conclusion instead states **PF = 0.614**, which conflicts with **217.5/708.4 ≈ 0.31**.

## Key results (Air conditioner)
- **U = 233 V**, **I_c = 3.5 A**, **S = 815.5 VA**
- **R_VW ≈ 44 kΩ**, **R_V = 40 kΩ**
- **Indicated Pm = 780 W**; the report estimates **PF ≈ 780/815.5 ≈ 0.96** from this indication.
- The report's CT-ratio correction gives **P_carga ≈ 1557.4 W**, greater than **S = 815.5 VA**. The report calls this physically inconsistent; it does not establish a corrected load power or reactive power for this case.

## What I learned / skills
Supervised CT and wattmeter measurements, instrument-loading corrections, separating P/Q/S, recognizing inconsistent derived values, uncertainty propagation with angle terms.

## Files

- [Original Spanish report](es/TP6%20-%20Medidas%20el%C3%A9ctricas%20-%20Chevauchey%20C.pdf)
- [Figures](figures/)
