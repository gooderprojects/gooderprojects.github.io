#!/usr/bin/python3

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from pyvirtualdisplay import Display

def getSeconds(timer):
    if timer != "end" and timer != "sday" and timer != "weekend" and timer != "fenwick" and timer != "x":
        return "Invalid timer."
    else:
        display = Display(visible=0, size=(800, 600))
        display.start()

        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
        driver.get("https://gooderprojects.github.io/school/json/index.html")

        data = driver.find_element(By.ID, timer+"-seconds").text

        driver.quit()
        display.stop()

        return data

def getMinutes(timer):
    if timer != "end" or timer != "sday" or timer != "weekend" or timer != "fenwick" or timer != "x":
        return "Invalid timer."
    else:
        display = Display(visible=0, size=(800, 600))
        display.start()

        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
        driver.get("https://gooderprojects.github.io/school/json/index.html")

        data = driver.find_element(By.ID, timer+"-minutes").text

        driver.quit()
        display.stop()

        return data

def getHours(timer):
    if timer != "end" or timer != "sday" or timer != "weekend" or timer != "fenwick" or timer != "x":
        return "Invalid timer."
    else:
        display = Display(visible=0, size=(800, 600))
        display.start()

        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
        driver.get("https://gooderprojects.github.io/school/json/index.html")

        data = driver.find_element(By.ID, timer+"-hours").text

        driver.quit()
        display.stop()

        return data

def getDays(timer):
    if timer != "end" or timer != "sday" or timer != "weekend" or timer != "fenwick" or timer != "x":
        return "Invalid timer."
    else:
        display = Display(visible=0, size=(800, 600))
        display.start()

        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
        driver.get("https://gooderprojects.github.io/school/json/index.html")

        data = driver.find_element(By.ID, timer+"-days").text

        driver.quit()
        display.stop()

        return data

def listTimers():
    timer_list = ["end", "sday", "weekend", "fenwick", "x"]
    return timer_list
