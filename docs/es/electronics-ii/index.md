---
layout: case-study
title: Electrónica II | Siete trabajos prácticos
lang: es
translation: /electronics-ii/
permalink: /es/electronics-ii/
description: Trabajos supervisados de electrónica sobre diodos, amplificadores BJT y operacionales, con los informes originales.
---

[← Volver a proyectos]({{ '/es/#projects' | relative_url }})

# Electrónica II

**Siete TP supervisados · Universidad Nacional de Santiago del Estero · 2025**

Los informes documentan mis cálculos de circuitos, simulaciones y observaciones de laboratorio. La evidencia varía entre trabajos: el TP de polarización BJT presenta cálculos, el amplificador en cascada presenta simulaciones y el informe de operacionales no demuestra mediciones de banco independientes. Cada resultado se describe según lo registrado en su informe.

## Resultados seleccionados

### Recortador Zener · TP3

Diseñé un recortador asimétrico para aproximadamente **+6,3 V y −4,6 V**. El informe de laboratorio registra un recorte cercano a **+7,2 V y −6,0 V**, distinto de los umbrales calculados. La práctica también incluyó una carga en paralelo y la comprobación de potencias admisibles.

### Amplificador BJT de una etapa · TP5

Para un amplificador emisor común diseñado con un módulo de ganancia cercano a **15**, el informe registra aproximadamente **18** a baja frecuencia. En el barrido de frecuencia realizado en el banco, el módulo bajó a **10,88 a 1 MHz**. Los datos muestran la relación entre ganancia y ancho de banda.

### Amplificador BJT en cascada · TP6

La ganancia calculada para dos etapas fue aproximadamente **272**. El barrido en Proteus incluido en el informe muestra una ganancia conjunta de alrededor de **260 a 430**, según la frecuencia y la carga. Este TP documenta diseño y simulación; no registra un montaje físico.

![Traza de osciloscopio documentada en los trabajos de electrónica]({{ '/assets/thumbs/electronics-lab-oscilloscope.jpg' | relative_url }})

## Informes originales

Los siete informes entregados están en español. Cada PDF se puede abrir en el navegador o descargar:

| TP | Tema | PDF |
| --- | --- | --- |
| 1 | Rectificador de media onda y filtrado capacitivo | [Leer]({{ '/assets/reports/electronics-ii/tp1-half-wave-rectifier.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp1-half-wave-rectifier.pdf' | relative_url }}" download>Descargar</a> |
| 2 | Multiplicadores de tensión y efectos de carga | [Leer]({{ '/assets/reports/electronics-ii/tp2-voltage-multipliers.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp2-voltage-multipliers.pdf' | relative_url }}" download>Descargar</a> |
| 3 | Recortador Zener asimétrico | [Leer]({{ '/assets/reports/electronics-ii/tp3-zener-clipper.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp3-zener-clipper.pdf' | relative_url }}" download>Descargar</a> |
| 4 | Puntos de trabajo BJT | [Leer]({{ '/assets/reports/electronics-ii/tp4-bjt-bias.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp4-bjt-bias.pdf' | relative_url }}" download>Descargar</a> |
| 5 | Amplificadores BJT de una etapa | [Leer]({{ '/assets/reports/electronics-ii/tp5-bjt-amplifier.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp5-bjt-amplifier.pdf' | relative_url }}" download>Descargar</a> |
| 6 | Amplificador BJT en cascada | [Leer]({{ '/assets/reports/electronics-ii/tp6-cascaded-amplifier.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp6-cascaded-amplifier.pdf' | relative_url }}" download>Descargar</a> |
| 7 | Amplificador y oscilador con operacionales | [Leer]({{ '/assets/reports/electronics-ii/tp7-op-amp.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp7-op-amp.pdf' | relative_url }}" download>Descargar</a> |

Los [resúmenes de cada TP en GitHub](https://github.com/ChevaucheyClement/academic-portfolio/tree/main/electronics) explican el método y los límites de la evidencia disponible.
