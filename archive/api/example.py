#!/usr/bin/python3

# This is a demo script for getting timer information from the website usring the api
# The following code displays how much time is currently left on the 'end timer'

from timers import Timers

timers = Timers()

print()
print("Time Until the End of the School Year:")
print(timers.getDays("end")+":"+timers.getHours("end")+":"+timers.getMinutes("end")+":"+timers.getSeconds("end"))
print()
