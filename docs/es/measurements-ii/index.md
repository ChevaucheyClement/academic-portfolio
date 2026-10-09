---
layout: case-study
title: Mediciones Eléctricas II | Caso de estudio
lang: es
permalink: /es/measurements-ii/
description: Prácticas universitarias supervisadas sobre fasores trifásicos y mediciones de resistencia de aislación.
---

[← Volver a proyectos]({{ '/es/#projects' | relative_url }})

# Mediciones Eléctricas II

**Dos informes de laboratorio supervisados · Universidad Nacional de Santiago del Estero · septiembre de 2026**

Los dos informes de la cátedra llevan mi nombre. Participé en la configuración de instrumentos, registré observaciones y lecturas e interpreté los resultados en los informes entregados bajo la supervisión de los ingenieros docentes. Fueron prácticas universitarias, no inspecciones independientes de equipos.

## 1. Red trifásica desequilibrada

**Objetivo.** Observar cómo las cargas resistivas, inductivas y capacitivas modifican los fasores de corriente de una red trifásica.

**Método.** Utilizamos bancos de cargas resistivas y capacitivas, un motor, tres transformadores de intensidad y un analizador de calidad de energía Fluke 434. En el banco se registraron aproximadamente 400 V entre fases, 230 V de fase a neutro y 50 Hz.

**Resultado.** Los fasores de tensión permanecieron separados cerca de 120°. La corriente estuvo aproximadamente en fase con la tensión para una carga resistiva, atrasada con el motor y adelantada con una carga capacitiva. Al invertir un sensor de corriente, el fasor indicado giró 180°, lo que muestra la importancia del sentido del sensor y de la correspondencia de fases.

El informe incluye pantallas del analizador y fotografías, pero no una tabla completa de módulos y ángulos de corriente. Estos resultados son cualitativos.

## 2. Mediciones de resistencia de aislación

**Objetivo.** Medir la resistencia de aislación de un cable, un transformador seco y un motor, y calcular algunas relaciones temporales.

**Método.** Utilizamos un megóhmetro a 1 kV CC para el cable, 5 kV CC para el transformador seco y 500 V CC para el motor. La tabla reproduce lecturas y relaciones redondeadas del informe entregado.

| Elemento ensayado | Lecturas registradas | Relación temporal |
| --- | --- | --- |
| Cable de 0,6/1 kV | 114 GΩ a 30 s; 116 GΩ a 60 s | 60 s / 30 s ≈ 1,02 |
| Transformador seco de 13,2 kV | 749 MΩ a 1 min; 1,08 GΩ a 10 min | 10 min / 1 min ≈ 1,44 |
| Motor | 352 MΩ a 1 min; 356 MΩ a 10 min | 10 min / 1 min ≈ 1,01 |

![Relaciones temporales registradas de resistencia de aislación para el cable, el transformador seco y el motor]({{ '/assets/thumbs/measurements-ii-results.svg' | relative_url }})

*Las barras representan las relaciones registradas en una escala numérica común. Para el cable se comparan 30–60 segundos; para el transformador y el motor, 1–10 minutos. Por eso no deben interpretarse como calificaciones comparables del estado de los equipos.*

También se registraron 111 y 116 GΩ entre neutro y fases del cable, 208–218 MΩ entre fase y tierra del motor, y 341–350 MΩ entre fases del motor. El informe advierte sobre las limitaciones de interpretar los índices de forma aislada. No concluyo a partir de ellos si los equipos pueden continuar en servicio ni si cumplen algún criterio de conformidad.

## Qué evidencia este trabajo

Configuración de instrumentos en prácticas supervisadas, interpretación de fasores, registro cuidadoso de resistencias, cálculo de relaciones y redacción de informes técnicos. Los informes originales permanecen en mi carpeta universitaria privada; el [resumen del proyecto en español](https://github.com/ChevaucheyClement/academic-portfolio/blob/main/measurements-ii/README.es.md) explica su alcance.
