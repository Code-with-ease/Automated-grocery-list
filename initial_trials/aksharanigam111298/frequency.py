import pandas as pd
from sklearn.model_selection import train_test_split
import numpy as np

def training(x,y,days):
    avg = []
    for i in range(0,np.size(x)-1):

        if(abs(x[i+1][0]-x[i][0]) == days):
            avg.append(y[i+1])

    return np.mean(avg)

def testing(x,y,trained,days):
    err = []
    for i in range(0,np.size(x)-1):
        if(abs(x[i+1][0]-x[i][0])==days):
            err.append((abs(y[i+1] - trained)))

    return np.mean(err)

def main():
    df = pd.read_csv('check.csv')
    print(df.shape)
    array = df.values

    x = array[:,0:1]
    y = array[:,1]

    # Splitting the data to 75% training and 25% testing
    # 75% of 5000 = 3750

    xtrain , xtest , ytrain , ytest = train_test_split(x , y , test_size=0.25 , random_state=50 , shuffle=False)

    total_err = 0
    total_trained = 0
    days = 14

    if(days<=15):
        trained = training(xtrain , ytrain , days)

        err = testing(xtest , ytest , trained , days)

        print("%.3f , %.3f "%(trained , err))

    else:
        ctr= 0
        while(days>15):
            trained = training(xtrain , ytrain , 15)

            total_trained+=trained

            err = testing(xtest , ytest , trained , 15)

            total_err+=err
            ctr+=1
            days-=15

        trained = training(xtrain, ytrain, days)
        err = testing(xtest, ytest, trained, days)

        total_trained+=trained
        total_err+=err
        ctr+=1

        print("%.3f , %.3f"%(total_trained , total_err/ctr))

main()