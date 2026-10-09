# Electrical Measurements II — supervised laboratory work

[Español](README.es.md) · [Portfolio](https://chevaucheyclement.github.io/academic-portfolio/#projects)

Two reports bearing Clément Chevauchey's name were prepared for Electrical Measurements II at Universidad Nacional de Santiago del Estero in September 2026. The experiments took place in university laboratories under course supervision. This page summarizes observations from those reports; the original PDFs remain in the private university folder. It does not claim an independent equipment inspection or a professional acceptance test.

## Unbalanced three-phase network

**Aim:** observe how resistive, inductive and capacitive loads affect current magnitude and phase in a three-phase circuit.

The lab used a resistive load bank, a capacitive bank, a motor, three current transformers and a Fluke 434 power-quality analyzer. The report records approximately 400 V line-to-line, 230 V phase-to-neutral and 50 Hz at the bench. Voltage phasors remained close to 120° apart while changes in the loads changed the current phasors. An intentionally reversed current sensor shifted its displayed current phasor by 180°, illustrating the importance of sensor orientation and phase mapping.

| Load condition | Observation recorded in the report |
| --- | --- |
| Resistive | Current was approximately in phase with voltage. |
| Motor (inductive) | Current lagged voltage. |
| Capacitive | Current led voltage. |
| Mixed loads | The current angle changed as the resistive, inductive and capacitive contributions changed. |

The report documents the behavior with analyzer screens and photographs, but does not give a complete numerical table of phase currents and angles. The findings above are qualitative observations, not a quantified power-quality assessment.

## Insulation-resistance measurements

**Aim:** use a megohmmeter to record insulation resistance on a power cable, dry transformer and motor, and calculate time-based indices from selected readings.

| Test object | Test and recorded readings |
| --- | --- |
| 0.6/1 kV cable | 1 kV DC for one minute; neutral-to-phase readings of 111 GΩ and 116 GΩ. A third phase read 114 GΩ at 30 s and 116 GΩ at 60 s, giving a 60 s / 30 s ratio of approximately 1.02. |
| 13.2 kV dry transformer | 5 kV DC; 749 MΩ at 1 min and 1.08 GΩ at 10 min, giving a polarization index of approximately 1.44. |
| Motor | 500 V DC because nominal data were unavailable; phase-to-earth readings of 208–218 MΩ and phase-to-phase readings of 341–350 MΩ. Selected 1 min / 10 min readings of 352 / 356 MΩ give an index of approximately 1.01. |

The indices and resistance values are the results of this supervised lab session. The submitted report notes limits to interpreting the indices in isolation. No conclusion about continued service or compliance is made here.

## Scope

- **Demonstrated:** instrument connection and setup in supervised labs; three-phase phasor interpretation; recording resistance readings; calculating time-based ratios; technical reporting.
- **Not demonstrated here:** instrument calibration, a full uncertainty budget, repeat testing under controlled environmental conditions, or certification of equipment condition.

This summary is covered by the repository's [documentation license](../LICENSE-DOCS).
