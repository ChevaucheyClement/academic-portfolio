# Verifying an analog ammeter’s accuracy class

> Electrical Measurements lab (UNSE), Apr 2025. Single-phase bench with variac and analog meters.

## Problem
Compare an analog ammeter against a class-0.5 reference, plot its indication error and determine its accuracy class. The report states an objective for a voltmeter too, but the published measurements and result concern the ammeter.

## Setup
Variac, 100 Ω load, standard ammeter (class 0.5), DUT ammeter (class 1). Scale constant from dial: **0.01 A/div** (20 divisions → 0.2 A).
- Diagram/photo: `figures/setup.png`
- Block diagram: `figures/block-diagram.png`

## Method
Logged DUT readings Xm against the standard Xp, computed absolute error ΔX = Xm − Xp. Estimated class from worst-case |ΔX| over full-scale and rounded up to the nearest IRAM class.

## Key results
- Max |ΔX|: **0.01 A** (at low reading)
- Scale constant: **0.01 A/div**
- Estimated class: **Class 1**

## What I learned / skills
Calibration curve building, analog scale resolution and appreciation error, class verification vs spec, uncertainty basics.

## Files

- [Original Spanish report](es/TP1%20-%20Determinacion%20de%20Clase%20-%20Chevauchey%20C.pdf)
- [Figures](figures/)
