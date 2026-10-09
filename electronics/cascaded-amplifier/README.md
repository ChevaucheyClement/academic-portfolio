# Cascaded amplifier (two EC stages)

> Electronics II (UNSE), May 2025. Two EC stages with interstage coupling, designed and simulated; the report does not document a bench build.

## Problem
Design a two-stage amplifier to exceed **|A_v| ≈ 250** with reasonable Rout and stability.

## Setup
Two EC stages (BC337), interstage coupling capacitor and bias dividers; C_in and C_out chosen for f_min≈20 Hz. The submitted report documents a Proteus simulation. It lists a scope and signal source among materials, but does not include a recorded bench build or bench measurements.

## Method
Stage-wise design: pick I_C and V_E, compute r_e, select R_C and R_E; set dividers; add full bypass on stage 2 to meet gain while keeping stage 1 partially degenerated. Couple stages with C_AC sized from divider || input.

## Key results
- Designed small-signal gains: **A_v1 ≈ −26.19**, **A_v2 ≈ −10.38** → **A_v_total ≈ +272**
- Simulation sweep: first stage gain ≈ 24 falling to ≈ 18.5 by ~200 kHz; combined stages stabilize between **~260 and ~430** depending on frequency and loading.

## What I learned / skills
Gain stacking, interstage coupling design, pole placement and bandwidth, bias stability across stages.

## Files

- [English translation prepared for the portfolio](report.pdf)
- [Original Spanish report](es/TP6%20-%20Electronica%20-%20Chevauchey%20C.pdf)
