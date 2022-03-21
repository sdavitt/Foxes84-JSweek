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