# import timeit
#
# code_to_test = """

import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split

df = pd.read_csv('train.csv')
array = df.values

x = array[:,0:3]
y = array[:,3]

newx,xtest,newy,ytest = train_test_split(x,y,shuffle=True,train_size=.01)

x_final,x_testing,y_final,y_testing = train_test_split(newx,newy,train_size=0.70)

# print(x_final)
# print(y_final)

# plt.bar(x_final[:,1],y_final)
# plt.show()


# """
#
# elapsed_time = timeit.timeit(code_to_test,number=1)
# print(elapsed_time)


