import csv

csv_file = csv.reader(open('pincode.csv', "rb"), delimiter=",")
pinstring = 110017
pinstring = str(pinstring)
print(pinstring)
count=0

for row in csv_file:
    if pinstring == row[1]:
        print('representing the following locations in India- \n')
        print('[%s]' % ', '.join(map(str, row)))
        count=count+1

if count == 0:
    if len(pinstring)>6 or len(pinstring)<6:
        print("This is not a valid pincode!")
    else:
        print("The given pincode does not exist.")

