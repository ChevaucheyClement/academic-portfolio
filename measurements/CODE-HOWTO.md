# Running the measurement checks

From the repository root, install the listed Python dependencies:

```bash
python -m pip install -r measurements/requirements.txt
```

Each lab's `code/` folder contains a script that reads that lab's `data/` CSV files and checks selected results or calculations. Run one directly, for example:

```bash
python measurements/determining-instrument-accuracy-class-voltmeter-and-ammeter/code/tp1_analysis.py
python measurements/impedance-measurement-by-three-ammeter-and-three-voltmeter-m/code/tp5_three_meters_analysis.py
```

Most scripts write a `*_recomputed.csv` into their lab's `data/` folder. TP1 also creates a calibration plot in its `figures/` folder. These are checks of selected published values, not replacements for the full Spanish lab reports. Small differences can arise from rounded inputs. The TP5 power uncertainty follows its report's final result table; an intermediate error row in that report differs and should be reviewed before reusing the uncertainty.
