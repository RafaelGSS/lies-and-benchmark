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

## Result

**Machine Details** (Azure VM)

```
Architecture:                    x86_64
CPU op-mode(s):                  32-bit, 64-bit
Byte Order:                      Little Endian
Address sizes:                   46 bits physical, 48 bits virtual
CPU(s):                          2
On-line CPU(s) list:             0,1
Thread(s) per core:              2
Core(s) per socket:              1
Socket(s):                       1
NUMA node(s):                    1
Vendor ID:                       GenuineIntel
CPU family:                      6
Model:                           79
Model name:                      Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz
Stepping:                        1
CPU MHz:                         2294.685
BogoMIPS:                        4589.37
Virtualization:                  VT-x
Hypervisor vendor:               Microsoft
Virtualization type:             full
L1d cache:                       32 KiB
L1i cache:                       32 KiB
L2 cache:                        256 KiB
L3 cache:                        50 MiB
```

### CPU-0

![](https://user-images.githubusercontent.com/26234614/196053358-68257223-11c7-475a-9342-8024cc22fd44.png)

### CPU-1

![](https://user-images.githubusercontent.com/26234614/196053359-01510ee7-6043-45e7-94a4-60a612d59bd1.png)
