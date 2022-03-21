# variable hoisting but make it python aka make it not work
#print(hoisted_variable) # error - not defined here
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