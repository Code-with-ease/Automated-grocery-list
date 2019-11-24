import pytesseract as pya
from PIL import Image
from cv2 import cv2
import numpy as np

img = Image.open('d.jpeg')
name=cv2.imread('d.jpeg')
img1=cv2.cvtColor(name, cv2.COLOR_BGR2GRAY)
kernel=np.array([[-1,-1,-1],[-9,9,-1],[-1,-1,-1]])
img1=cv2.filter2D(img1,-1,kernel)
cv2.imwrite('d.jpeg',img1)
img1=cv2.cvtColor(img1, cv2.COLOR_BGR2GRAY)
cv2.imshow('title',img1)
cv2.waitKey(0)
text =pya.image_to_string(img1)
lines=text.splitlines()
print(lines)