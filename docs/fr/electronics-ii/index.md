---
layout: case-study
title: Électronique II | Sept travaux pratiques
lang: fr
translation_key: electronics_ii
permalink: /fr/electronics-ii/
description: Travaux pratiques encadrés d'électronique sur les diodes, les amplificateurs BJT et les amplificateurs opérationnels, avec comptes rendus originaux.
---

[← Retour aux projets]({{ '/fr/#projects' | relative_url }})

# Électronique II

**Sept TP encadrés · Universidad Nacional de Santiago del Estero · 2025**

Ces comptes rendus documentent mes calculs de circuits, simulations et observations en laboratoire. Le niveau de preuve varie selon les TP : celui sur la polarisation BJT présente des calculs, celui sur l'amplificateur en cascade présente des simulations, et celui sur les amplificateurs opérationnels ne démontre pas de mesures indépendantes sur banc. Chaque résultat est décrit selon ce que contient son compte rendu.

## Résultats sélectionnés

### Écrêteur Zener · TP3

J'ai conçu un écrêteur asymétrique visant environ **+6,3 V et −4,6 V**. Le compte rendu relève un écrêtage proche de **+7,2 V et −6,0 V** au laboratoire, différent des seuils calculés. Le TP comprenait aussi une charge en parallèle et la vérification des puissances admissibles.

### Amplificateur BJT à un étage · TP5

Pour un amplificateur à émetteur commun conçu avec un gain en valeur absolue proche de **15**, le compte rendu indique environ **18** à basse fréquence. Au cours du balayage en fréquence sur banc, ce gain est descendu à **10,88 à 1 MHz**. Les mesures illustrent le rapport entre gain et bande passante.

### Amplificateur BJT en cascade · TP6

Le gain calculé pour deux étages était d'environ **272**. Le balayage dans Proteus présenté dans le compte rendu indique un gain total d'environ **260 à 430**, selon la fréquence et la charge. Ce TP documente la conception et la simulation ; aucun montage physique n'y est rapporté.

![Trace d'oscilloscope documentée dans les travaux d'électronique]({{ '/assets/thumbs/electronics-lab-oscilloscope.jpg' | relative_url }})

## Comptes rendus originaux

Les sept comptes rendus remis sont en espagnol. Chaque PDF peut être ouvert ou téléchargé :

| TP | Sujet | PDF |
| --- | --- | --- |
| 1 | Redresseur monoalternance et filtrage capacitif | [Lire]({{ '/assets/reports/electronics-ii/tp1-half-wave-rectifier.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp1-half-wave-rectifier.pdf' | relative_url }}" download>Télécharger</a> |
| 2 | Multiplicateurs de tension et effet de la charge | [Lire]({{ '/assets/reports/electronics-ii/tp2-voltage-multipliers.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp2-voltage-multipliers.pdf' | relative_url }}" download>Télécharger</a> |
| 3 | Écrêteur Zener asymétrique | [Lire]({{ '/assets/reports/electronics-ii/tp3-zener-clipper.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp3-zener-clipper.pdf' | relative_url }}" download>Télécharger</a> |
| 4 | Points de repos de transistors BJT | [Lire]({{ '/assets/reports/electronics-ii/tp4-bjt-bias.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp4-bjt-bias.pdf' | relative_url }}" download>Télécharger</a> |
| 5 | Amplificateurs BJT à un étage | [Lire]({{ '/assets/reports/electronics-ii/tp5-bjt-amplifier.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp5-bjt-amplifier.pdf' | relative_url }}" download>Télécharger</a> |
| 6 | Amplificateur BJT en cascade | [Lire]({{ '/assets/reports/electronics-ii/tp6-cascaded-amplifier.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp6-cascaded-amplifier.pdf' | relative_url }}" download>Télécharger</a> |
| 7 | Amplificateur et oscillateur à amplificateurs opérationnels | [Lire]({{ '/assets/reports/electronics-ii/tp7-op-amp.pdf' | relative_url }}) · <a href="{{ '/assets/reports/electronics-ii/tp7-op-amp.pdf' | relative_url }}" download>Télécharger</a> |

Les [résumés de chaque TP sur GitHub](https://github.com/ChevaucheyClement/academic-portfolio/tree/main/electronics) précisent la méthode et les limites des preuves disponibles (en anglais).
