# Measuring resistances by comparison and by substitution

> Electrical Measurements lab (UNSE), May 2025. DC source, analog V/A, decade standard.

## Problem
Document separate resistance measurements by (a) voltmeter comparison and (b) substitution with a standard and ammeter; calculate each result and its uncertainty. The reported resistances differ greatly and should not be presented as agreement on one unknown.

## Setup
DC supply ~25 V; analog voltmeter (class 1, RV = 24.6 kΩ), analog ammeter; decade standard ~300 Ω.
- photo:
    - `figures/setup_comp.png`
    - `figures/setup_sub.png`
- diagram:
    - `figures/diagram_comp.png`
    - `figures/diagram_sub.png`

## Method
Ran both methods, logged readings and meter specs, computed Rx and propagated class and appreciation errors.

## Key results
- **Comparison method:** U = **25 V**, Uᵥ = **2.2 V** → **Rx = 254.9 kΩ ± 15.759%**
  - Absolute range: **(254.9 ± 40.14) kΩ**
- **Substitution method:** Iₚ = **11.1 mA**, Iₓ = **6.75 mA** → **Rx = 493.3 Ω ± 26.28%**
  - Absolute range: **(493.3 ± 129.7) Ω**

## What I learned / skills
Comparison vs substitution tradeoffs, meter loading, uncertainty propagation.

## Files

- [Original Spanish report](es/TP3%20-%20Medidas%20el%C3%A9ctricas%20-%20Chevauchey%20C.pdf)
- [Figures](figures/)
