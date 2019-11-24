import pandas as pd
from sklearn.model_selection import train_test_split
import numpy as np

def training(x,y,days):
    avg = []
    for i in range(0,np.size(x)):

        if(x[i][0] == days):
            avg.append(y[i])

    return np.mean(avg)

def testing(x,y,trained,days):
    err = []
    for i in range(0,np.size(x)):
        if(x[i][0]==days):
            err.append((abs(y[i] - trained)))

    return np.mean(err)

if __name__ == "__main__":
    df = pd.read_csv('check.csv')
    # print(df.shape)
    array = df.values

    x = array[:,0:1]
    prev=0
    new_x = np.ndarray([5000,1])

    new_x[0][0]=x[0][0]
    for i in range(1,len(x)):
        new_x[i][0] = x[i][0]-x[i-1][0]

    new_x.astype(np.int64)

    y = array[:,1]

    # Splitting the data into
    # 67% training and 33% testing

    xtrain , xtest , ytrain , ytest = train_test_split(new_x , y , test_size=0.33 , shuffle=False )

    total_err = 0
    total_trained = 0
    days = 2

    if(days<=15):
        trained = training(xtrain , ytrain , days)

        err = testing(xtest , ytest , trained , days)

        print("Predicted :- %.3f , Error:- %.3f "%(trained , err))

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

        print("Predicted:- %.3f , Error:- %.3f"%(total_trained , total_err/ctr))

