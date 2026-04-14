def shout(text): 
    return text.upper() 
  
def whisper(text): 
    return text.lower() 
  
def greet(func): 
    # storing the function in a variable 
    greeting = func("Hi, I am created by a function passed as an argument.") 
    print(greeting)  
  
greet(shout) 
greet(whisper)

#map functions
def addition(n): 
    return n + n 
  
# We double all numbers using map() 
numbers = (1, 2, 3, 4) 
results = map(addition, numbers) 

# Does not Print the value
print(results)

# For Printing value
for result in results:
    print(result, end = " ")

# filters functions
def fun(variable):
    letters=('a','e','i','o','u')
    if(variable in letters):
        return True
    else:
        return False
seq=['g','e','e','k','s','f','o','r','g','e','e','k','s']
filtered=filter(fun,seq)
print('Filtered letters:')
for s in filtered:
    print(s)

#Lambda functions

cube=lambda x:x*x*x
print(cube(5))
L=[1,2,3,4,5]
is_even=[x for x in L if x%2==0] #from all the elements in L keep the x only if it is even
print(is_even)

#reduce function
from functools import reduce
a=["Get","Set","go"]
r=reduce(lambda x,y:x+" "+y,a)
print(r)