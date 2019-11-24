from sympy import *
x=Symbol('x')

x1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
y1=[0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]
n=len(x1)
result=0
for i in range(n):
	res=1
	for j in range(n):
		if(i!=j):
			res=poly(res*poly((x-x1[j])/(x1[i]-x1[j])))
	result=poly(result+poly(y1[i]*res))

print(result)
k=float(input())
if(k%(2*n)<=n):
	prediction=float(result.subs(x,k))
else:
	prediction=float(result.subs(x,n-(k%20)))
print(prediction)
