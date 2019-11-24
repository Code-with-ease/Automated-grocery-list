import random
import csv
c=0
x=x1=1
with open('smart_list.csv', 'a') as csvFile:
    while(c<5000):
        x=random.randint(x1+1,x1+15)
        c+=1
        y=random.randint(1,x-x1)
        row = [x, y]
        writer = csv.writer(csvFile)
        writer.writerow(row)
        x1=x