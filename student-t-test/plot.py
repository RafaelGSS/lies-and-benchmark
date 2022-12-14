import matplotlib.pyplot as plt

A = [
  3879, 3882, 3920, 3885, 3897,
  3906, 3911, 3875, 3912, 3910,
  3901, 3888, 3885, 3879, 3873,
  3903, 3888, 3916, 3885, 3901,
  3887, 3918, 3905, 3887, 3907,
  3894, 3895, 3897, 3903, 3910
]
B = [
  4057, 4052, 4089, 4074, 4082,
  4041, 4084, 4058, 4107, 4050,
  4065, 4065, 4055, 4060, 4055,
  4062, 4081, 4058, 4051, 4078,
  4049, 4079, 4080, 4105, 4085,
  4021, 4079, 4054, 4064, 4024
]

fig,ax = plt.subplots()

ax.hist(A, label="A", density=True, histtype="stepfilled")
ax.hist(B, label="B", density=True, histtype="stepfilled")
plt.legend()
plt.savefig("hist.png")

########

plt.clf()
A1 = [
  46.37, 45.43, 45.1, 43.25, 45.51,
  46.8,  45.3, 43.58, 43.3, 45.42,
  46.02, 44.5, 43.94, 43.67, 43.55,
  43.71, 46.62, 46.56, 43.5, 43.84,
  45.75, 43.86, 46.76, 43.32, 44.08,
  45.92, 46.2, 46.24, 43.97, 43.03
]
B1 = [
  45.69,  43.3, 45.16, 44.66,
  42.27, 42.83, 43.28, 43.01,
  43.37, 44.64, 44.85, 44.61,
  42.05, 44.01,  43.9, 42.39,
  42.24, 45.22, 45.66, 45.31,
  45.33, 45.02, 43.26, 44.43,
  45.53, 42.19, 42.44, 43.66,
  44.66, 45.55
]

ret = plt.boxplot([A1, B1], labels=["A", "B"], showmeans=True, positions=[1, 1.3], patch_artist=True)
ret["boxes"][0].set_facecolor("lightgreen")
ret["boxes"][1].set_facecolor("lightblue")
plt.savefig("boxplot.png")
