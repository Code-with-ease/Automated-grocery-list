import pandas as pd
import json as json
import datetime
from pymongo import MongoClient
from bson import ObjectId
import numpy as np
import time
def obj_dict(obj):
    return obj.__dict__
from mtranslate import translate



# from translate import translator


def remove_noise(name):
    temp=0
    new_str=''
    noise=["*","/"," ","!"]
    for w in name:
        if(((w==noise[0] or w==noise[1] or w==noise[2] or w==noise[3]) and temp==1) or (w!=noise[0] and w!=noise[1] and w!=noise[2] and w!=noise[3])):
            if(temp==0):
                temp=1
            new_str=new_str+w
    return new_str

# for customers collection
customers_dict = []
client = MongoClient('mongodb+srv://test:test@cluster0-nihvn.mongodb.net/test?retryWrites=true&w=majority')
db = client.get_database('shop_list')
customers = db.customer

df = pd.read_csv("test.csv")
custs=[]
for index,row in df.iterrows():
    print(index)
    cust={
        'cust_id':'',
        'username':'',
        'password':''
    }
    if(row['shop_id'] not in custs):
        custs.append(row['shop_id'])
        cust['cust_id']=str(row['shop_id'])
        cust['username']='test'+str(row['shop_id'])
        cust['password']='test'+str(row['shop_id'])
        customers_dict.append(cust)
        #Uncomment When want to insert
        # customers.insert({
        #     "cust_id":cust['cust_id'],
        #     "username":cust['username'],
        #     "password":cust['password']
        # })

# for category table
category_dict = []
client = MongoClient('mongodb+srv://test:test@cluster0-nihvn.mongodb.net/test?retryWrites=true&w=majority')
db = client.get_database('shop_list')
customers = db.customer
category_table = db.category

df = pd.read_csv("item_categories.csv")

category_list=[]
category=df["item_category_name"].values
cat_id=df["item_category_id"].values


#uncomment if insert 
# # for i in category_dict:
# #     category_table.insert({
# #         "category_id":i["category_id"],
# #         "category_name":i["category_name"]
# #     })
    
