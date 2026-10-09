# Three-phase power in balanced three-wire systems (Aron method)

> Electrical Measurements lab (UNSE), late May 2025. Two-wattmeter method with current transformers.

## Problem
Measure active power in a balanced three-wire system using two wattmeters (Aron method) and estimate combined uncertainty.

## Setup
Two analog wattmeters via CTs; three-phase balanced loads (R, RL, RC); lab three-phase source.
- photo: `figures/setup-med.png`, `figures/setup-fase.png`, `figures/setup-traf.png`
- diagram: `figures/diagram.png`

## Method
Read W1 and W2 and computed indicated power Pm = Kt (W1 + W2), with Kt the CT ratio. The report then subtracted voltmeter and wattmeter voltage-coil loading to estimate load power Pc. It evaluated class and angle errors using a simplified uncertainty calculation.

## Key results
- **W1 ≈ 1010 W**, **W2 ≈ 688 W**
- **Indicated power Pm = 3396 W**; **corrected load power Pc ≈ 3383.77 W** in the submitted report
- **Reported uncertainty: ~2.9%** from a simplified calculation that drops the instrument-loading correction term. The report's conclusion pairs this uncertainty with **3396 W**, even though its calculation table separately gives **3383.77 W** after correction.

## What I learned / skills
Two-wattmeter method, interpreting W1/W2 sign changes vs load type, handling CT ratio and angle errors in the uncertainty budget.

## Files

- [Original Spanish report](es/TP7%20-%20Medidas%20el%C3%A9ctricas%20-%20Chevauchey%20C.pdf)
- [Figures](figures/)
