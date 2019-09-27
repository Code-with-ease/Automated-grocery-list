import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split,KFold, cross_val_score
import warnings
warnings.filterwarnings(action="ignore")

df = pd.read_csv('smart_list.csv')
print(df.shape)
array = df.values
print(array)
x = array[:,0:1]
y = array[:,1]

model = LogisticRegression()

xtrain, xtest, ytrain , ytest = train_test_split(x,y, random_state=7,test_size=0.5 )

kfold = KFold(n_splits=5)
score = cross_val_score(model , x,y,cv=kfold)

print(score*100)

# model.fit(xtrain , ytrain)
# result = model.score(xtest , ytest)

# print(result*100)

# y_predict = model.predict([[21]])
# print(y_predict)
