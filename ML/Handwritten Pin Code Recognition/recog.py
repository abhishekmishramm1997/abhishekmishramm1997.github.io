# Import the modules
import cv2
from tensorflow.keras.models import load_model
import numpy as np
import csv 
import sys

# Load the classifier
model=load_model('model.h5')
model.compile(loss='sparse_categorical_crossentropy',optimizer='adam', metrics=['accuracy'])
# Read the input image 
im = cv2.imread("abhishek.jpg")
im=cv2.resize(im,(600,300))







# Convert to grayscale and apply Gaussian filtering
im_gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
im_gray = cv2.GaussianBlur(im_gray, (5, 5), 0)
#print (im_gray.shape)



# Threshold the image
ret, im_th = cv2.threshold(im_gray, 90, 255, cv2.THRESH_BINARY_INV)





# Find contours in the image
_,ctrs,_ = cv2.findContours(im_th.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Get rectangles contains each contour
rects = [cv2.boundingRect(ctr) for ctr in ctrs]

# For each rectangular region, calculate HOG features and predict
# the digit using Linear SVM.
pincode=[]
order=[]
i=1
for rect in rects:
    try:

        # Draw the rectangles
        #print rects
        cv2.rectangle(im, (rect[0], rect[1]), (rect[0] + rect[2], rect[1] + rect[3]), (255, 255, 255), 3) 
        # Make the rectangular region around the digit
        leng = int(rect[3] * 1.6)
        pt1 = int(rect[1] + rect[3] // 2 - leng // 2)
        pt2 = int(rect[0] + rect[2] // 2 - leng // 2)
        roi = im_th[pt1:pt1+leng, pt2:pt2+leng]
        # Resize the image
        #print (roi.shape)
        roi = cv2.resize(roi, (28, 28), interpolation=cv2.INTER_AREA)
        roi=cv2.dilate(roi,(3,3))

        #roi = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
        pred = model.predict(roi.reshape(1,28, 28, 1))
        #print (pred.argmax())
        pincode.append(pred.argmax())
        cv2.putText(im, str(pred.argmax()), (rect[0], rect[1]),cv2.FONT_HERSHEY_DUPLEX, 2, (255,0,0),2)
        order.append(rect[0])
    except:
        print("Image size is too large!")


sortedpin=[]
L1 = order
L2 = pincode
print 'the recognized pincode is'
d = dict(zip(L1,L2))
for key in sorted(d.iterkeys()):
    print "%s" % (d[key]),
    sortedpin.append(d[key])

    #cv2.imwrite(str(i)+".jpg",roi)
    #i=i+1



print '\n'
print 'representing the following locations in India- \n'

csv_file = csv.reader(open('pincode.csv', "rb"), delimiter=",")
pinstring=''.join(str(e) for e in sortedpin)
#print pinstring
count=0

for row in csv_file:
    if pinstring == row[1]:
        print '[%s]' % ', '.join(map(str, row))
        count=count+1

if count == 0:
    if len(pinstring)>6 or len(pinstring)<6:
        print("This is not a valid pincode!")
    else:
        print("The given pincode does not exist.")




cv2.imshow("Resulting Image with Rectangular ROIs",im)

k=cv2.waitKey(0)
if k%256 == 27:
    # ESC pressed
    
    print("Escape hit, closing...")
    cv2.destroyAllWindows()


    
    # cv2.putText(im, str(int(nbr[0])), (rect[0], rect[1]),cv2.FONT_HERSHEY_DUPLEX, 2, (0, 255, 255), 3)

