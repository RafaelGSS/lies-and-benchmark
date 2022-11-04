import matplotlib.pyplot as plt
import scipy.stats as st

A = [98, 110, 97, 100, 101]
B = [100, 101, 102, 99, 101]

st.ttest_ind(A, B)
