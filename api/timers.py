#!/usr/bin/python3

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from pyvirtualdisplay import Display

def getSeconds():
    display = Display(visible=0, size=(800, 600))
    display.start()

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.get("https://gooderprojects.github.io/school/json/index.html")

    data = driver.find_element(By.ID, "end-seconds").text

    driver.quit()
    display.stop()

    return data
