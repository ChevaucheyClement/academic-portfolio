# Mediciones Eléctricas II — prácticas de laboratorio supervisadas

[English](README.md) · [Portfolio](https://chevaucheyclement.github.io/academic-portfolio/es/#projects)

Dos informes a nombre de Clément Chevauchey se prepararon para Medidas Eléctricas II en la Universidad Nacional de Santiago del Estero en septiembre de 2026. Los ensayos se realizaron en laboratorios universitarios bajo supervisión de la cátedra. Esta página resume las observaciones de esos informes. No presenta los trabajos como una inspección independiente ni como ensayos profesionales de aceptación. No se utilizó código de análisis ni un script reproducible para estos informes.

## Informes originales (español)

- [TP1 — Red trifásica desequilibrada (PDF)](../docs/assets/reports/measurements-ii/tp1-unbalanced-three-phase-network.pdf)
- [TP2 — Ensayos de aislación (PDF)](../docs/assets/reports/measurements-ii/tp2-insulation-testing.pdf)

## Red trifásica desequilibrada

**Objetivo:** observar cómo las cargas resistivas, inductivas y capacitivas modifican el módulo y el ángulo de las corrientes en un circuito trifásico.

La práctica utilizó bancos de cargas resistivas y capacitivas, un motor, tres transformadores de intensidad y un analizador de calidad de energía Fluke 434. El informe registra aproximadamente 400 V entre fases, 230 V de fase a neutro y 50 Hz en el banco de ensayo. Los fasores de tensión se mantuvieron separados cerca de 120°, mientras que los de corriente cambiaron al variar las cargas. Al invertir intencionalmente un sensor de corriente, el fasor indicado giró 180°, lo que muestra la importancia del sentido del sensor y de la correspondencia de fases.

| Condición de carga | Observación registrada en el informe |
| --- | --- |
| Resistiva | Corriente aproximadamente en fase con la tensión. |
| Motor (inductiva) | Corriente atrasada respecto de la tensión. |
| Capacitiva | Corriente adelantada respecto de la tensión. |
| Cargas combinadas | El ángulo de corriente cambió con los aportes resistivos, inductivos y capacitivos. |

El informe incluye pantallas del analizador y fotografías, pero no una tabla numérica completa de corrientes y ángulos por fase. Estos resultados son observaciones cualitativas, no una evaluación cuantitativa de calidad de energía.

## Mediciones de resistencia de aislación

**Objetivo:** registrar con un megóhmetro la resistencia de aislación de un cable, un transformador seco y un motor, y calcular índices temporales a partir de algunas lecturas.

| Elemento | Ensayo y lecturas registradas |
| --- | --- |
| Cable de 0,6/1 kV | 1 kV CC durante un minuto; lecturas entre neutro y fase de 111 GΩ y 116 GΩ. En una tercera fase se registraron 114 GΩ a los 30 s y 116 GΩ a los 60 s: relación 60 s / 30 s de aproximadamente 1,02. |
| Transformador seco de 13,2 kV | 5 kV CC; 749 MΩ a 1 min y 1,08 GΩ a 10 min: índice de polarización de aproximadamente 1,44. |
| Motor | 500 V CC porque no se disponía de datos nominales; lecturas de 208–218 MΩ entre fase y tierra y de 341–350 MΩ entre fases. Las lecturas seleccionadas de 352 / 356 MΩ a 1 min / 10 min dan un índice de aproximadamente 1,01. |

Las resistencias y los índices corresponden a esa práctica supervisada. El informe entregado advierte sobre las limitaciones de interpretar los índices de forma aislada. Aquí no se concluye si los equipos pueden continuar en servicio ni se certifica su conformidad.

## Alcance

- **Evidenciado:** conexión y configuración de instrumentos en prácticas supervisadas; interpretación de fasores trifásicos; registro de resistencias; cálculo de relaciones temporales; redacción de informes técnicos.
- **No evidenciado aquí:** calibración de instrumentos, presupuesto completo de incertidumbre, repetición bajo condiciones ambientales controladas o certificación del estado de los equipos.

Este resumen se rige por la [licencia de documentación](../LICENSE-DOCS) del repositorio.
