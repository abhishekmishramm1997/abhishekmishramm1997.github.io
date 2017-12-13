#!/usr/bin/python
print "Content-type:text/html\r\n\r\n"
import mysql.connector
from mysql.connector import errorcode
# Import modules for CGI handling #The module is being used to fetch data from HTML form
import cgi, cgitb

Create instance of FieldStorage 
# print "<a href=/programs/SignUp.html>Re-Register</a>"
form = cgi.FieldStorage() 
cnn=mysql.connector.connect(user = "root", password = "", host = "localhost", database = "Rooms")
cursor=cnn.cursor()
day  = form.getvalue('Day')


#pages to redirect
if day=="Monday":
    
                print "<html>" 
		print "<head>" 
		print "<meta http-equiv='refresh' content='0;url=/Monday.html' /> "
		print "<title>You are going to be redirected</title>"
		print "</head> "
		print "<body> "
		print "</body> "
		print "</html>"


elif day=="Tuesday":
    
                print "<html>" 
		print "<head>" 
		print "<meta http-equiv='refresh' content='0;url=/Tuesday.html' /> "
		print "<title>You are going to be redirected</title>"
		print "</head> "
		print "<body> "
		print "</body> "
		print "</html>"

if day=="Wednesday":
    
                print "<html>" 
		print "<head>" 
		print "<meta http-equiv='refresh' content='0;url=/Wednesday.html' /> "
		print "<title>You are going to be redirected</title>"
		print "</head> "
		print "<body> "
		print "</body> "
		print "</html>"


elif day=="Thursday":
    
                print "<html>" 
		print "<head>" 
		print "<meta http-equiv='refresh' content='0;url=/Thursday.html' /> "
		print "<title>You are going to be redirected</title>"
		print "</head> "
		print "<body> "
		print "</body> "
		print "</html>"

elif day=="Friday":
    
                print "<html>" 
		print "<head>" 
		print "<meta http-equiv='refresh' content='0;url=/Friday.html' /> "
		print "<title>You are going to be redirected</title>"
		print "</head> "
		print "<body> "
		print "</body> "
		print "</html>"


elif day=="Saturday":
    
                print "<html>" 
		print "<head>" 
		print "<meta http-equiv='refresh' content='0;url=/Saturday.html' /> "
		print "<title>You are going to be redirected</title>"
		print "</head> "
		print "<body> "
		print "</body> "
		print "</html>"

elif day=="Sunday":
    
                print "<html>" 
		print "<head>" 
		print "<meta http-equiv='refresh' content='0;url=/Sunday.html' /> "
		print "<title>You are going to be redirected</title>"
		print "</head> "
		print "<body> "
		print "</body> "
		print "</html>"

		

		
