# BJT amplifier (gain-20 and gain-15)

> Electronics lab (UNSE), May 2025. Single-stage EC amplifiers; design vs lab reality.

## Problem
Design EC amplifiers targeting |A_v| ≈ 20 and ≈15, then sweep frequency and compare to expectations.

## Setup
BC337; V_CC=15 V; resistors per design (see report); input/output coupling caps and optional emitter bypass; scope + variable-freq source.

## Method
Pick I_C, set V_E for thermal headroom, center Q on load line, compute R_C and R_E; choose divider R1, R2 for V_B; size C_in/C_out/C_E for f_min≈20 Hz. Build, then sweep ~20 Hz to 3.2 MHz and log |A_v|.

## Key results
- **Amplifier 1:** settled at **|A_v| ≈ 7** at low frequency without bypass; gain magnitude fell to **3.85** at 500 kHz, **2** at 1 MHz, **1** at 2 MHz and **0.75** at 3.2 MHz (inverting gain in the report).
- **Amplifier 2:** designed for |A_v| ≈ 15 with partial bypass; measured magnitude was about **18** at low frequency and **10.88** at 1 MHz.

## What I learned / skills
Q-point tradeoffs, emitter degeneration vs gain/stability, coupling capacitor sizing, measured frequency response vs small-signal model.

## Files

- [Original Spanish report](es/TP5%20-%20Electronica%20-%20Chevauchey%20C.pdf)
