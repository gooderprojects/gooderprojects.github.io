#!/usr/bin/python3

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from pyvirtualdisplay import Display

class Timers:
    driver = None
    end = {"days": None, "hours": None, "minutes": None, "seconds": None}

    def __init__(self):
        display = Display(visible=0, size=(800, 600))
        display.start()
        self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
        self.driver.get("https://gooderprojects.github.io/school/json/index.html")
        self.end["seconds"] = self.driver.find_element(By.ID, "end-seconds").text


    def getSeconds(self, timer):
        if timer != "end" and timer != "sday" and timer != "weekend" and timer != "fenwick" and timer != "x":
            return "Invalid timer."
        else:
            data = self.driver.find_element(By.ID, timer+"-seconds").text
            if data == self.end["seconds"]:
                self.driver.get("https://gooderprojects.github.io/school/json/index.html")
                new_data = self.driver.find_element(By.ID, timer+"-seconds").text
                return new_data
            else:
                return data

    def getMinutes(self, timer):
        if timer != "end" and timer != "sday" and timer != "weekend" and timer != "fenwick" and timer != "x":
            return "Invalid timer."
        else:
            data = self.driver.find_element(By.ID, timer+"-minutes").text
            return data

    def getHours(self, timer):
        if timer != "end" and timer != "sday" and timer != "weekend" and timer != "fenwick" and timer != "x":
            return "Invalid timer."
        else:
            data = self.driver.find_element(By.ID, timer+"-hours").text
            return data

    def getDays(self, timer):
        if timer != "end" and timer != "sday" and timer != "weekend" and timer != "fenwick" and timer != "x":
            return "Invalid timer."
        else:
            data = self.driver.find_element(By.ID, timer+"-days").text
            return data

    @staticmethod
    def listTimers():
        timer_list = ["end", "sday", "weekend", "fenwick", "x"]
        return timer_list
