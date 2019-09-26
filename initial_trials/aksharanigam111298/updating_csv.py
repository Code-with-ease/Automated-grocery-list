import pandas as pd
import random as rn
# x = []
# for i in range(50):
#     x.append(rn.randrange(1,5))

# print(x)
df = pd.read_csv('check.csv')
# r,c = df.shape()

ctr= 2
for i in range(61,112,ctr):
    x = i
    y = rn.randrange(1,20)
    print(x,y)
    pd.concat(x, y, ignore_index=True)
    if(i>75):
        ctr=4
    if(i>90):
        ctr=5
    if(i==102):
        ctr=2
    else:
        ctr=1
