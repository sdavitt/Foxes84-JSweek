# variable hoisting but make it python aka make it not work
#print(hoisted_variable) # error - not defined here
import colorsys


hoisted_variable = 'Fennec Fox'
print(hoisted_variable)

# breaking python - different data types don't mesh
x = 5
y = 'Zebra'
# x + y error cant add string and int
print(4 == '4')
print("string '4' and integer 4 not the same thing")

# index loop through a string:
mystring = 'Fennec Fox'
for i in range(len(mystring)):
    print(mystring[i])

# while loop through string indexes accessing letters in the string
i = 0
while i < len(mystring):
    print(mystring[i])
    i+=1

# python while loop printing numbers 1 thru 10
n = 1
while n < 11:
    print(n)
    n += 1


# list operations
animals = ['Fennec Fox', 'Honey Badger', 'Echidna', 'Siberian Tiger']
print(animals[0])
animals[1] = 'Giant Panda'
print(animals[1])

for i in range(len(animals)):
    print(i, animals[i])

print(animals)
animals.append('Osprey')
animals.pop()
animals.pop(2)
animals.pop(1)
animals.pop(1)
print(animals)

animals = ['Fennec Fox', 'Honey Badger', 'Echidna', 'Siberian Tiger']
print(animals)
animals.remove('Honey Badger')
print(animals)

for animal in animals:
    print(animal)

# hw exercise #1
print('\n\n')

#Write a function that takes in the string and the list of dog names, loops through 
#the list and checks that the current name is in the string passed in. The output should be:
#"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
#
dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
dog_names = ["max","HAS","PuRple","dog"]


def nameInString(s, n):
    for name in n:
        if name in s: # tricky for JS
            return 'matched dog_name'
    return 'no matches'
    

print(nameInString(dog_string, dog_names))


# python custom object

class Dog:
    def __init__(self, name, breed, color, paws=4):
        self.name = name
        self.breed = breed
        self.color = color
        self.paws = paws

    def printInfo(self):
        print(f'{self.name} is a {self.breed} with {self.paws} paws. They are {self.color}.')

a_dog = Dog('Sir Wesley Charles of Nottingham', 'English Springer Spaniel', 'black and white')
a_dog.printInfo()

# python inhertiance
# Springer shares the attributes and methods of Dog but also has its own new attributes and methods
class Springer(Dog):
    def __init__(self, name, breed, color):
        super().__init__(name, breed, color, paws=4)
        self.jumps = 'high and often'
        self.fast = 'fast'
    
    def zoom(self):
        self.fast = 'very ' + self.fast

a_springer = Springer('Tiger', 'English Springer Spaniel', 'liver and white')
a_springer.printInfo()
a_springer.zoom()
print(a_springer.fast)