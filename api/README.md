# Timer API
I'm not exactly sure what qualifies as an API, but I think this does.

## How to use
To use the api, you need to create an instance of the Timers class
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
