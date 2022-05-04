#!/usr/bin/python3

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from pyvirtualdisplay import Display
import json

class Timers:
    driver = None
    timers = {
      "end": {"days": None, "hours": None, "minutes": None, "seconds": None},
      "sday": {"days": None, "hours": None, "minutes": None, "seconds": None},
      "weekend": {"days": None, "hours": None, "minutes": None, "seconds": None},
      "fenwick": {"days": None, "hours": None, "minutes": None, "seconds": None},
      "x": {"days": None, "hours": None, "minutes": None, "seconds": None},
    }
    timer_list = ["end", "sday", "weekend", "fenwick", "x"]

    def setTimers(self, listname):
        self.timers[listname]["seconds"] = self.driver.find_element(By.ID, listname+"-seconds").text
        self.timers[listname]["minutes"] = self.driver.find_element(By.ID, listname+"-minutes").text
        self.timers[listname]["hours"] = self.driver.find_element(By.ID, listname+"-hours").text
        self.timers[listname]["days"] = self.driver.find_element(By.ID, listname+"-days").text

    def __init__(self):
        display = Display(visible=0, size=(800, 600))
        display.start()
        self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
        self.driver.get("https://gooderprojects.github.io/school/json/index.html")
        self.setTimers("end")
        self.setTimers("sday")
        self.setTimers("weekend")
        self.setTimers("fenwick")
        self.setTimers("x")


    def getSeconds(self, timer):
        if timer not in self.timer_list:
            return "Invalid timer."
        else:
            data = self.driver.find_element(By.ID, timer+"-seconds").text
            if data == self.timers[timer]["seconds"]:
                self.driver.get("https://gooderprojects.github.io/school/json/index.html")
                new_data = self.driver.find_element(By.ID, timer+"-seconds").text
                return new_data
            else:
                return data

    def getMinutes(self, timer):
        if timer not in self.timer_list:
            return "Invalid timer."
        else:
            data = self.driver.find_element(By.ID, timer+"-minutes").text
            if data == self.timers[timer]["minutes"]:
                self.driver.get("https://gooderprojects.github.io/school/json/index.html")
                new_data = self.driver.find_element(By.ID, timer+"-minutes").text
                return new_data
            else:
                return data

    def getHours(self, timer):
        if timer not in self.timer_list:
            return "Invalid timer."
        else:
            data = self.driver.find_element(By.ID, timer+"-hours").text
            if data == self.timers[timer]["hours"]:
                self.driver.get("https://gooderprojects.github.io/school/json/index.html")
                new_data = self.driver.find_element(By.ID, timer+"-hours").text
                return new_data
            else:
                return data

    def getDays(self, timer):
        if timer not in self.timer_list:
            return "Invalid timer."
        else:
            data = self.driver.find_element(By.ID, timer+"-days").text
            if data == self.timers[timer]["days"]:
                self.driver.get("https://gooderprojects.github.io/school/json/index.html")
                new_data = self.driver.find_element(By.ID, timer+"-days").text
                return new_data
            else:
                return data

    def listTimers(self):
        return self.timer_list
