import pandas as pd
import datetime
import numpy as np
import matplotlib.pyplot as plt 
from sklearn.svm import SVR
import math

temp_data=pd.read_csv('dataset4.csv')

temp_data=temp_data.loc[temp_data['item_id']==48]

temp_data['quantity']=temp_data['quantity'].astype('float64')
temp_data['date'] = temp_data['date'].apply(lambda x: 
                                    datetime.datetime.strptime(x,'%d/%m/%Y'))


dates=temp_data['date'].values

dates=np.array(dates).astype('datetime64[D]')
dates_arr=[]
for i in range(1,len(dates)):
    dates_arr.append(dates[i]-dates[i-1])

# print(len(dates_arr))
dates_arr=np.array(dates_arr).astype('int64')
dates_arr=np.reshape(dates_arr,(len(dates_arr),1))


quantity=np.array(temp_data['quantity'].values)
quantity=quantity[1:]
svr_lin=SVR(kernel='linear',C=1e3)
svr_poly=SVR(kernel='poly',C=1e3,degree=2)
svr_rbf=SVR(kernel='rbf',C=1e3,gamma=0.1)


svr_lin.fit(dates_arr,quantity)
svr_poly.fit(dates_arr,quantity)
svr_rbf.fit(dates_arr,quantity)
# values_poly=[]
# values_rbf=[]
values_poly=svr_poly.predict(dates_arr)
values_rbf=svr_rbf.predict(dates_arr)
sno=[]
for i in range(0,len(quantity)):
    sno.append(i+1)

# print(quantity)
# print(values_poly)
# print(values_rbf)

plt.plot(sno,quantity,color='red',label="actual")
plt.plot(sno,values_rbf,color='blue',label="rbf")
plt.plot(sno,values_poly,color='green',label="poly")
plt.xlabel("SNo")
plt.ylabel("Qunantity")
plt.legend()
plt.show()

predict_dates=[1,2,3,4,5,6,7,9,11,25,50]
predict_dates=np.reshape(predict_dates,(len(predict_dates),1))

print("RBF:-\n",svr_rbf.predict(predict_dates))
print("Poly:- \n",svr_poly.predict(predict_dates))

y = []
for x in predict_dates:
    if x[0] > max(dates_arr):
        y.append(svr_rbf.predict(max(dates_arr).reshape(-1,1))[0])
    elif x[0] in dates_arr:
        y.append(svr_poly.predict(x.reshape(-1,1))[0])
    else:
        y.append(svr_rbf.predict(x.reshape(-1,1))[0])
new_ans = []
for i in y:
    x = i - math.floor(i)
    if x>0.0 and x<=0.25 :
        x = 0.25
    elif x>0.25 and x<=0.50:
        x = 0.50
    elif x>0.50 and x<=0.75:
        x = 0.75
    elif x>0.75:
        x = 1.0
    x+=math.floor(i)
    new_ans.append(x)

print(new_ans)
plt.plot(range(len(y)),y,color="red",label="Final Predicted")
plt.plot(range(len(quantity)),quantity,color="green",label="Actual")
plt.legend()
plt.show()