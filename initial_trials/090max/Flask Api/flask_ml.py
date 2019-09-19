import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

from flask import Flask
app=Flask(__name__)

from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
# import statsmodels.api as sm

@app.route('/')
def basic():
    data=pd.read_csv("data/ad.csv")
    data.drop(['Unnamed: 0'], axis=1)
    print(data.head())
    plt.figure(figsize=(16, 8))
    plt.scatter(
        data['TV'],
        data['sales'],
        c='black'
    )
    plt.xlabel("Money spent on TV ads ($)")
    plt.ylabel("Sales ($)")
    plt.show()
    X = data['TV'].values.reshape(-1,1)
    y = data['sales'].values.reshape(-1,1)
    reg = LinearRegression()
    reg.fit(X, y)
    print("The linear model is: Y = {:.5} + {:.5}X".format(reg.intercept_[0], reg.coef_[0][0]))

    predictions = reg.predict(X)
    plt.figure(figsize=(16, 8))
    plt.scatter(
        data['TV'],
        data['sales'],
        c='black'
    )
    plt.plot(
        data['TV'],
        predictions,
        c='blue',
        linewidth=2
    )
    plt.xlabel("Money spent on TV ads ($)")
    plt.ylabel("Sales ($)")
    plt.show()
    return ("hello")

if __name__=='__main__':
    app.run(debug=True)