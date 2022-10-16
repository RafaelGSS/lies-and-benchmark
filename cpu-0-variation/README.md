# CPU 0 Variation

Proof of concept that CPU 0 don't affect the Benchmark variability.

<sub>I'm not considering several variables, such as processes running in background and
in which CPU number</sub>

## Steps

Run the `cpu-http.js` assigning a CPU affinity:

```console
$ taskset -c 0 node cpu-http.js
```

Then, run the benchmark using the CPU number as argument

```console
$ node benchmark-variation.mjs 0
Done!
```

It will generate a `bench-result-cpu-0.json`.

Use `matplotlib` to plot a _scatter_ graph with the results:

```python
python3 benchmark-variation-plot.py
```
