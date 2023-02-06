# Ejercicio 1
from decimal import Decimal
my_list = ['itemList1','itemList2', 'itemList3']
my_tuple = ('itemTuple1', 'itemTuple2', 'itemTuple3')
my_float = 43.4
my_int = 12
my_decimal = Decimal(21.30)
my_dictionary = {
    'key1' : 'value1',
    'key2': 'value2',
    'key3': 'value3',
}

# Ejercicio 2
import math
my_float_rounded= math.ceil(my_float)
# my_float_rounded= round(my_float)
print(my_float_rounded)


# Ejercicio 3
my_float_sqr = math.sqrt(my_float)
print(my_float_sqr)


# Ejercicio 4
dict_first = my_dictionary['key1']
print(dict_first)


# Ejercicio 5
tuple_second = my_tuple[1]
print(tuple_second)


# Ejercicio 6
my_list.append('newItemList4')
# list_add_last = my_list + ['itemList4']
print(my_list)


# Ejercicio 7
my_list[0]='replacedItemList1'
print(my_list)


# Ejercicio 8
my_list.sort()
print(my_list)

# Ejercicio 9
my_tuple += ('newItemTuple4',)
print(my_tuple)




