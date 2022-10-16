from matplotlib import pyplot
import json

fsCpu0 = open('./bench-result-cpu-0.json')
fsCpu1 = open('./bench-result-cpu-1.json')

data0 = json.load(fsCpu0)
data1 = json.load(fsCpu1)

pyplot.clf()
pyplot.title("Using CPU-0")

for i in range(len(data0)):
    for j in data0[str(i)]:
        pyplot.scatter(i, j)

pyplot.xlabel("Duration (sec)")
pyplot.ylabel("Response Time (ms)")

pyplot.savefig('CPU0-Result.png')

pyplot.clf()
pyplot.title("Using CPU-1")

for i in range(len(data1)):
    for j in data1[str(i)]:
        pyplot.scatter(i, j)

pyplot.xlabel("Duration (sec)")
pyplot.ylabel("Response Time (ms)")

pyplot.savefig('CPU1-Result.png')
