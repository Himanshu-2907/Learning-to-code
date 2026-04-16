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


class car():
    def __init__(self,name,model):
        self


def check_occ(hs,n):
    hs1=len(hs)
    n1=len(n)
    for i in range(hs1-n1+1):
        if(hs[i:i+n1]==n):
            return i
    return -1
n='sad'
hs='sadbutsad'
print(check_occ(hs,n))


#restart and build on knowledge
"""__init__ method is used to assign values to object
 properties, it's a consturtor and initializes the instance, this method is called
when new object is created 
self(like an object itself) parameter is reference to current instance of the class, without it 
python wouldn't know about project properties"""
class Person:
  def __init__(self,name,age):
     self.name=name
     self.age=age
  def greet(self):
     print("Hello "+ self.name)
     return self.name
  def welcome(self):
      message=self.greet()
      print(message,"! Welocme to this page",self.age)
p1=Person("john",36)
p1.welcome()

class Student():
    def __init__(self,name,age=19):
        self.name=name
        self.age=age
p1=Student('Emil')
print(p1.name)
print(p1.age)

#class properties and object properties
"""property defined under __init__ belongs to the
 class's instance the objects  """
""" Properties defined outside the methods 
belong to the class, these properties are shared by all the objects"""

class Person:
    def __init__(self, name):
        #print(p1.city) gives error as city is not passsed as a parameter
        self.name=name
p1=Person("Carl")
p1.city="Oslo" #this adds the attribute only to p1 object of the class not the other objects
print(p1.name)
p2=Person("Shyam")
p2.age="29"
print(p2.age)
#print(p2.city) error: p2 object has no attribute city

class Calculator:
    def add(self,a,b):
        return a+b
    def multiply(self,a,b):
        return a*b
calc=Calculator()
print(calc.add(2,3))
print(calc.multiply(2,3))

class person:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def __str__(self):
        return f"{self.name} {self.age}"
p1=person("Emil",23)
print(p1)

#Inheritance


class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
    def __init__(self,fname,lname,year):
        #Person.__init__(self,fname,lname)
        super().__init__(fname,lname)  # this method is used to access and initialize the attributes of parent class
        #self.graduationyear=2019
        self.graduationyear=year
    def welcome(self):
        print(f"Welcome {self.firstname}{self.lastname} a {self.graduationyear} graduate")
#Use the Person class to create an object, and then execute the printname method:

x=Student('him','anshu',2025)
x.welcome()

class time:
    def __init__(self):
        self.hours=0
        self.mins=0
    def print_time(self,hr,mn):
        self.hr=hr
        self.mn=mn
        print('start time is ')
        print('hours: ',self.hours)
        print('minutes: ',self.mins)
        print('after 75 minutes')
        print('hours ',self.hr)
        print('minutes ',self.mn)
time1=time()
time1.hours=7
time1.mins=15
time1.print_time(8,30)

class Person:
    def __init__(self,name):
        self.name=name
    def get_name(self):
        return self.name
    def isEmployee(self):
        return False
class Employee(Person):
    def isEmployee(self):
        return True
print(issubclass(Employee,Person)) #imp to check if a class is derived or not
print(issubclass(Person,Employee))

emp=Person("himanshu")
print(emp.get_name(),emp.isEmployee())
emp=Employee("Himanshu")
print(emp.get_name(),emp.isEmployee())

class Base1:
    def __init__(self):
        self.str1="Base1"
        print("u1")
class Base2:
    def __init__(self):
        self.str2="base2"
        print("u1")
class Derived(Base1,Base2):
    def __init__(self):
        Base1.__init__(self)
        Base2.__init__(self)
        print("Derived")
    def printstr(self):
        print(self.str1,self.str2)
ob=Derived()
ob.printstr()

class Person(object):
	def __init__(self,name):
		self.name=name
	def getName(self):
		return self.name
	def isEmployee(self):
		return False
class Employee(Person):
	def __init__(self,name,eid):
		super(Employee,self).__init__(name)
		self.empID=eid
	def isEmployee(self):
		return True
	def getID(self):
		return self.empID
emp=Employee("Geek1","E101")
print(emp.getName(),emp.isEmployee(),emp.getID())

#Polymorphism

class Car:
    def __init__(self,brand,name):
        self.name=name
        self.brand=brand
    def move(self):
        print('drive')
class boat:
    def __init__(self,brand,name):
        self.name=name
        self.brand=brand
    def move(self):
        print('float')
class plane:
    def __init__(self,brand,name):
        self.name=name
        self.brand=brand
    def move(self):
        print('fly')
car1=Car('ford','bronco')
boat1=boat('porsche','frauscher')
plane1=plane('boieng','747')
for x in (car1,boat1,plane1):
    print(x.brand,x.name," - ")
    x.move()

class vehicle:
    def __init__(self,brand,name):
        self.brand=brand
        self.name=name
    def move(self):
        print('move')
class Car(vehicle):
    pass
class boat(vehicle):
    def move(self):
        print('float')
class plane(vehicle):
    def move(self):
        print('fly')
car1=Car('ford','bronco')
boat1=boat('porsche','frauscher')
plane1=plane('boieng','747')
for x in (car1,boat1,plane1):
    print(x.brand,x.name," - ")
    x.move()  

#getter/setter
class person:
    def __init__(self,name,age):
        self.name=name
        self.__age=age
    def get_age(self):
        return self.__age
    def set_age(self,age):
        if age>0:
            self.__age=age
        else:
            print('age must be positive')

p1=person('sanya','19')
print("age",p1.get_age())
p1.set_age(26)
print("update age ",p1.get_age())

#Inner class
class Outer:
    def __init__(self):
        self.name='Emil'
    class Inner:
        def __init__(self,outer):
            self.outer=outer
        def display(self):
            print(f"This is the inner class {self.outer.name}")

outer=Outer()
inner=outer.Inner(outer)
inner.display()



class Car:
    def __init__(self,name,model):
        self.name=name
        self.model=model
        self.engine=self.Engine()
    class Engine:
        def __init__(self):
            self.status="off"
        def start(self):
            self.status="running"
            print("The engine is running")
        def stop(self):
            self.status="off"
            print("The engine is off")
    def drive(self):
        if self.engine.status=="running":
            print(f"the {self.name} {self.model} can move")
        else:
            print("the car cannot move")
c1=Car('ford','bronco')
c1.drive()
c1.engine.start()
c1.drive()

    