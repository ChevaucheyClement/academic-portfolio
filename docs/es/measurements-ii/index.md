---
layout: case-study
title: Mediciones Eléctricas II | Caso de estudio
lang: es
translation: /measurements-ii/
permalink: /es/measurements-ii/
description: Prácticas universitarias supervisadas sobre fasores trifásicos y mediciones de resistencia de aislación.
---

[← Volver a proyectos]({{ '/es/#projects' | relative_url }})

# Mediciones Eléctricas II

**Dos informes de laboratorio supervisados · Universidad Nacional de Santiago del Estero · septiembre de 2026**

Los dos informes de la cátedra llevan mi nombre. Participé en la configuración de instrumentos, registré lecturas e interpreté los resultados bajo la supervisión de los ingenieros docentes.

## 1. Red trifásica desequilibrada
{: #cargas-trifasicas }

**Objetivo.** Observar cómo las cargas resistivas, inductivas y capacitivas modifican los fasores de corriente de una red trifásica.

**Método.** Utilizamos bancos de cargas resistivas y capacitivas, un motor, tres transformadores de intensidad y un analizador de calidad de energía Fluke 434. En el banco se registraron aproximadamente 400 V entre fases, 230 V de fase a neutro y 50 Hz.

<div class="case-study__evidence">
  <div>
    <p><strong>Resultado.</strong> Los fasores de tensión permanecieron separados cerca de 120°. La corriente estuvo aproximadamente en fase con la tensión para una carga resistiva, atrasada con el motor y adelantada con una carga capacitiva. Al invertir un sensor de corriente, el fasor indicado giró 180°, lo que muestra la importancia del sentido del sensor y de la correspondencia de fases.</p>
    <p>El informe incluye pantallas del analizador y fotografías; las observaciones sobre fasores son cualitativas.</p>
  </div>
  <figure>
    <a href="{{ '/assets/thumbs/three-phase-phasors-report.jpg' | relative_url }}"><img src="{{ '/assets/thumbs/three-phase-phasors-report.jpg' | relative_url }}" alt="Pantalla de fasores del analizador para la carga resistiva" loading="lazy"></a>
    <figcaption>Pantalla de fasores con carga resistiva del informe TP1 entregado, página 6.</figcaption>
  </figure>
</div>

## 2. Mediciones de resistencia de aislación
{: #ensayos-de-aislacion }

**Objetivo.** Medir la resistencia de aislación de un cable, un transformador seco y un motor, y calcular algunas relaciones temporales.

**Método.** Utilizamos un megóhmetro a 1 kV CC para el cable, 5 kV CC para el transformador seco y 500 V CC para el motor. La tabla reproduce lecturas y relaciones redondeadas del informe entregado.

| Elemento ensayado | Lecturas registradas | Relación temporal |
| --- | --- | --- |
| Cable de 0,6/1 kV | 114 GΩ a 30 s; 116 GΩ a 60 s | 60 s / 30 s ≈ 1,02 |
| Transformador seco de 13,2 kV | 749 MΩ a 1 min; 1,08 GΩ a 10 min | 10 min / 1 min ≈ 1,44 |
| Motor | 352 MΩ a 1 min; 356 MΩ a 10 min | 10 min / 1 min ≈ 1,01 |

<div class="case-study__evidence">
  <div>
    <p>También se registraron 111 y 116 GΩ entre neutro y fases del cable, 208–218 MΩ entre fase y tierra del motor, y 341–350 MΩ entre fases del motor.</p>
    <p>Las relaciones calculadas por sí solas no establecen el estado de los equipos ni su conformidad.</p>
  </div>
  <figure>
    <a href="{{ '/assets/thumbs/insulation-readings-report.jpg' | relative_url }}"><img src="{{ '/assets/thumbs/insulation-readings-report.jpg' | relative_url }}" alt="Lecturas de aislación del transformador y cálculo de la relación de resistencias del TP2" loading="lazy"></a>
    <figcaption>Lecturas y cálculo del transformador en el informe TP2 entregado, página 5. Recorte del informe original.</figcaption>
  </figure>
</div>

## Qué evidencia este trabajo

Configuración de instrumentos, interpretación de fasores, registro de resistencias, cálculo de relaciones y redacción de informes técnicos. El [resumen del proyecto en español](https://github.com/ChevaucheyClement/academic-portfolio/blob/main/measurements-ii/README.es.md) amplía los detalles.

## Informes originales

Los dos informes entregados están en español y se pueden abrir en el navegador o descargar:

- **TP1 — Red trifásica desequilibrada (7 páginas):** [Leer PDF]({{ '/assets/reports/measurements-ii/tp1-unbalanced-three-phase-network.pdf' | relative_url }}) · <a href="{{ '/assets/reports/measurements-ii/tp1-unbalanced-three-phase-network.pdf' | relative_url }}" download>Descargar PDF</a>
- **TP2 — Ensayos de aislación (5 páginas):** [Leer PDF]({{ '/assets/reports/measurements-ii/tp2-insulation-testing.pdf' | relative_url }}) · <a href="{{ '/assets/reports/measurements-ii/tp2-insulation-testing.pdf' | relative_url }}" download>Descargar PDF</a>
