## WARNING: This is a piece of garbage. Please never use this.
# Timer API
I'm not exactly sure what qualifies as an API, but I think this does.

### NOTE
This API is not good for real-time data. For accurate real-time data, it would probably just be easier to copy the source code from the website and put it into a project.

## How to use
To use the API, you need to create an instance of the Timers class
```
from timers import Timers
class_instance = Timers()
```
Now that you have created an instance, you can use the functions.
```
class_instance.getMinutes("end")
```
In this example, you can replace "end" with anything from ```timer_list```. To get the contents of ```timer_list```, run the ```list_timers()``` function.
Also, instead of ```getMinutes()```, you could use ```getSeconds()```, ```getHours```, or ```getDays()```.

## Example
Here is an example of using the API:
```
from timers import Timers

timers = Timers()

print()
print("Time Until the End of the School Year:")
print(timers.getDays("end")+":"+timers.getHours("end")+":"+timers.getMinutes("end")+":"+timers.getSeconds("end"))
print()
```
This can be found in 'example.py'
