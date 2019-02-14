import cv2
import numpy as np
im = cv2.imread('unnamed (1).jpg',0) #Put the name of your file here
ret,thresh1 = cv2.threshold(im,127,255,cv2.THRESH_BINARY)
_,contours, hierarchy = cv2.findContours(thresh1,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
for cnt in contours:
	x,y,w,h = cv2.boundingRect(cnt)
	cv2.rectangle(im,(x,y),(x+w,y+h),(0,255,0),3)
i=0
for cnt in contours:
	x,y,w,h = cv2.boundingRect(cnt)
	if w>100 and h>100:
		cv2.imwrite(str(i)+".jpg",thresh1[y:y+h,x:x+w])
		i=i+1
cv2.namedWindow('BindingBox', cv2.WINDOW_NORMAL)
cv2.imshow('BindingBox',im)
