import pandas as pd
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import train_test_split , cross_val_score , KFold
import warnings
warnings.filterwarnings(action="ignore")

df = pd.read_csv('check.csv')
print(df.shape)
array = df.values
# print(array)
x = array[:,0:1]
y = array[:,1]

model = MLPClassifier(hidden_layer_sizes=(15,13,12) , max_iter=500 )

xtrain, xtest, ytrain , ytest = train_test_split(x,y, random_state=0,test_size=0.70 )

kfold = KFold(n_splits=5)
score = cross_val_score(model , x,y,cv=kfold)

model.fit(xtrain , ytrain)
result = model.score(xtest , ytest)

print(result*100)

y_test = 120
y_predict = model.predict([[y_test]])
print(y_predict)




