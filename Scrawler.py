# -*- coding: cp1252 -*-
#Import your newly installed selenium package
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time 
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import requests
import urllib2
from bs4 import BeautifulSoup




chrome_options = webdriver.ChromeOptions()
prefs = {'download.default_directory' : 'E:/Bulb/CIBIL'} #Location where you want to save the file
chrome_options.add_experimental_option('prefs', prefs)

driver = webdriver.Chrome(executable_path = "E:\Ballance\chromedriver_win32\chromedriver" , chrome_options=chrome_options) #Change executable_path to the location of your driver, if not added to the path


filename = 'E:\Bulb\LS.html'
fileout = open(filename, 'a')
driver.get("http://loksabhaph.nic.in/Questions/qsearch15.aspx?lsno=16")
time.sleep(5)

input_element = driver.find_element_by_xpath("//*[@id='ContentPlaceHolder1_txtpage']")
input_element.clear()
input_element.send_keys("200")
time.sleep(2)
input_element.send_keys(Keys.ENTER)
driver.find_element_by_xpath("//*[@id='ContentPlaceHolder1_btngo']").click()

for i in range(200,7908):
    table = driver.find_element_by_xpath("//*[@id='ContentPlaceHolder1_tblMember']/tbody/tr/td").get_attribute('innerHTML').encode('utf-8')
    fileout.write(table)
    driver.find_element_by_xpath("//*[@id='ContentPlaceHolder1_cmdNext']").click()
    print i

fileout.close()
driver.quit()