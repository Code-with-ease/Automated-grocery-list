import pandas as pd
from mtranslate import translate
from pymongo import MongoClient





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


client = MongoClient('mongodb+srv://test:test@cluster0-12rwi.azure.mongodb.net/test?retryWrites=true&w=majority')
db = client.get_database('shop_list')
itemlist = db.itemlist

data=pd.read_csv('items.csv')
# data_english=pd.read_csv('new_item_data.csv')
item_name_russian_list=data["item_name"].values
item_id_list=data["item_id"].values
item_category_list=data["item_category_id"].values

print(item_name_russian_list)


for i in range(0,len(item_name_russian_list)):
    itemlist.insert({
        "item_id":int(item_id_list[i]),
        "item_name":str(item_name_russian_list[i]),
        "item_category":int(item_category_list[i])
    })



