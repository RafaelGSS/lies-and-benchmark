from matplotlib import pyplot
import json

fsCpu = open('./bench-result-cpu-0.json')

data = json.load(fsCpu)

for i in range(len(data)):
    for j in data[str(i)]:
        pyplot.scatter(i, j)
pyplot.show()
