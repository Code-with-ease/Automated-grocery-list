import numpy as np
from cv2 import cv2
inputImage = cv2.imread("bill1.jpeg")
inputImageGray = cv2.cvtColor(inputImage, cv2.COLOR_BGR2GRAY)
# outImage = cv2.subtract(255, inputImageGray)
# print(inputImageGray)
edges = cv2.Canny(inputImageGray,150,200,apertureSize = 3)
# outImage = cv2.subtract(255, inputImageGray)
print(edges)
edges = abs(cv2.subtract(255,edges))
# im2 = ImageTk.PhotoImage(edges)

# canvas = Tkinter.Canvas(width=Width, height=Height, bg=im2)
minLineLength = 30
maxLineGap = 5
lines = cv2.HoughLinesP(edges,cv2.HOUGH_PROBABILISTIC, np.pi/180, 30, minLineLength,maxLineGap)
for x in range(0, len(lines)):
    for x1,y1,x2,y2 in lines[x]:
        #cv2.line(inputImage,(x1,y1),(x2,y2),(0,128,0),2, cv2.LINE_AA)
        pts = np.array([[x1, y1 ], [x2 , y2]], np.int32)
        cv2.polylines(inputImage, [pts], True, (0,255,0))

font = cv2.FONT_HERSHEY_SIMPLEX
cv2.putText(inputImage,"Tracks Detected", (500, 250), font, 0.5, 255)
cv2.imshow("Trolley_Problem_Result", inputImage)
cv2.imshow('edge', edges)
print("enter the name of the template")
name=input()
cv2.imwrite(name+'.jpg',edges)
cv2.waitKey(0)
