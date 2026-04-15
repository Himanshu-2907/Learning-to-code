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

#-->if not used lambda function
result=a[0]
for i in a[1:]:
    result=result+" "+i
print(result)

a1=[1,2,3,4]
r1=reduce(lambda x,y:x+y,a1)
print(r1)

def add_three(a, b, c):
    for i in range(len([1,2])):
        z=a+b+c
        print(z)
        return a + b + c
list(map(add_three, [1, 2], [10, 20], [100, 200]))

#decorators
def my_decorator(func):
    def wrapper():
        print("Something before the function.")
        func()
        print("Something after the function.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()


def decorator(func):
    def wrapper(*args, **kwargs):
        print("Before function runs")
        func(*args, **kwargs)
        print("After function runs")
    return wrapper

@decorator
def greet(name):
    print(f"Hello {name}")

greet("Himanshu")

#generators and iterators
num=[1,2,3,4,5]
it=iter(num)
print(next(it))
print(next(it))
print(next(it))

#->generators
print('generators')
def gen():
    print('start')
    yield 1
    print('mid')    
    yield 2
g=gen()
print(next(g))
print(next(g))

