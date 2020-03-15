#!C:\Python27\python.exe

#!/usr/bin/python
print "Content-type:text/html\r\n\r\n"


import pymongo
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
db = client['acme']
collection = db['products']
posts = db.products
data = pprint.pprint(posts.find_one())

print data

for x in data:
  print(x)




print "<html>" 
print "<head>" 
print "<meta http-equiv='refresh' content='0;url=/shuttle.html' /> "
print "<title>You are going to be redirected</title>"
print "</head> "
print "<body> "
print "</body> "
print "</html>"
print "</body>"
print "</html>"

