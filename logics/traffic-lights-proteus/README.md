# Two synchronized traffic lights in Proteus

Undergraduate Logic Systems lab at UNSE, supervised by Ing. Daniel H. Gunther. The report lists Clément Chevauchey as author.

## Task and implementation

Simulate two coordinated traffic lights with a 60-second cycle: green for 27 seconds, yellow for 3, red for 27, then yellow for 3. A 1 Hz source drives cascaded 74LS90 decade counters. BCD-to-seven-segment decoders show the count; logic gates decode transition times and JK flip-flops control the lamps. The design uses the supplied 1 Hz source, so it does not include a frequency divider.

## Result

The first Proteus version exposed a yellow-light timing error at the transition between cycles. The second version changed the gate inputs controlling flip-flop set/reset and synchronized the two lights in simulation. The report gives the intended phase durations and describes the corrected behavior; it does not provide measured propagation delay or a numerical timing-error study.

## Files

- [Report](report.pdf)
- [Proteus version 1](code/Simulacion%20V1%20-%20Chevauchey%20C.pdsprj) and [version 2](code/Simulacion%20V2%20-%20Chevauchey%20C.pdsprj)
- [Setup diagram](figures/setup.pdf) and [version 1 design](figures/Dise%C3%B1o%20V1%20-%20Chevauchey%20C.pdf)

This folder contains Proteus project files; it does not contain an HDL implementation or automated testbench.
