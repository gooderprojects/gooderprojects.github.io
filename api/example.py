#!/usr/bin/python3

# This is a demo script for getting timer information from the website
# The following code displays how many seconds are currently on the 'end timer'

# These are important
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from pyvirtualdisplay import Display
import time

# Hides chrome window
display = Display(visible=0, size=(800, 600))
display.start()

# Connects to the website
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://gooderprojects.github.io/school/json/index.html")
data = 0

# Constantly gets data from website
while True:
    if driver.find_element(By.ID, "end-seconds").text != data:
        data = driver.find_element(By.ID, "end-seconds").text # Gets data
        print(data) # Outputs data
    time.sleep(0.1) # Increase if you want better cpu performance, but less data accuraccy. Decrease if you hate cpu but want realtime data.
