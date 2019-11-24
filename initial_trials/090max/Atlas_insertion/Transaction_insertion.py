import pandas as pd
import json as json
import datetime
from pymongo import MongoClient
from bson import ObjectId
import numpy as np
import time
def obj_dict(obj):
    return obj.__dict__


def sort_dates(dates,quantity):
    date_quant={}
    dates_sorted=[]
    quantity_sorted=[]
    for i in range (0,len(quantity)):
        date_quant[dates[i]]=quantity[i]
    dates_sorted=sorted(dates)
    for i in dates_sorted:
        quantity_sorted.append(date_quant[i])
    return dates_sorted,quantity_sorted


def get_details(data,id,output):
    output["cust_id"]=int(id)
    item_id=data['item_id'].values
    visited_items={}
    
    for i in item_id:
        visited_items[i]=0
    output["transactions"]=[]
    data['date'] = data['date'].apply(lambda x: 
                                    datetime.datetime.strptime(x,'%d.%m.%Y'))
    for items in item_id:
        if(visited_items[items]!=1):
            temp_item_data=data.loc[data["item_id"]==items]
            
            trans_obj={}
            trans_obj["item_id"]=int(items)
            
            dates=temp_item_data['date'].values
            dates=np.array(dates).astype('datetime64[D]')
            quantity=temp_item_data['quantity'].values
            dates_sorted,quantity_sorted=sort_dates(dates,quantity)
            
            trans_obj["item_transactions"]=[]
            for i in range(0,len(dates_sorted)):
                item_transactions_object={}
                item_transactions_object["date"]=str(dates_sorted[i])
                item_transactions_object["quantity"]=int(quantity_sorted[i])
                trans_obj["item_transactions"].append(item_transactions_object)
            output["transactions"].append(trans_obj)
            visited_items[items]=1
    return output



def Insert_customers(data):
    customers=data['cust_id'].values
    visited={}
    for i in customers:
        visited[i]=0
    output=[]
    for cust in customers:
        if(visited[cust]!=1):
      
            customer_obj={}
            temp_data=data.loc[data["cust_id"]==cust]
            customer_obj=get_details(temp_data,cust,customer_obj)
            output.append(customer_obj)
            visited[cust]=1

    return output
    

# for customers collection
customers_dict = []
client = MongoClient('mongodb+srv://test:test@cluster0-nihvn.mongodb.net/test?retryWrites=true&w=majority')
db = client.get_database('shop_list')
transaction = db.transaction

data=pd.read_csv("sales.csv")
output_data=[]
output_data=Insert_customers(data)

for i in output_data:
    transaction.insert({
        "cust_id":i["cust_id"],
        "Transaction":i["transactions"]
    })
<<<<<<< HEAD

=======
>>>>>>> 53fe2a31b8692972f5453ee73e25a5da7e4d632a
