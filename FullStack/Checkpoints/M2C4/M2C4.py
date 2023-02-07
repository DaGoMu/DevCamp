# Ejercicio 1
from decimal import Decimal
my_list = ['itemList1','itemList2', 'itemList3']
my_tuple = ('itemTuple1', 'itemTuple2', 'itemTuple3')
my_float = 43.4
my_int = 12
my_decimal = Decimal(21.30)
my_dictionary = {
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3',
}


# Ejercicio 2
import math
my_float_rounded= math.ceil(my_float)
# my_float_rounded= round(my_float)
print(f'Ejercicio 2: {my_float_rounded}\n')


# Ejercicio 3
my_float_sqrt = math.sqrt(my_float)
print(f'Ejercicio 3: {my_float_sqrt}\n')


# Ejercicio 4
dict_first = my_dictionary['key1']
#dict_first = list(my_dictionary.items())[0] 
print(f'Ejercicio 4: {dict_first}\n')


# Ejercicio 5
tuple_second = my_tuple[1]
print(f'Ejercicio 5: {tuple_second}\n')


# Ejercicio 6
my_list.append('newItemList4')
# list_add_last = my_list + ['itemList4']
print(f'Ejercicio 6: {my_list}\n')


# Ejercicio 7
my_list[0]='replacedItemList1'
print(f'Ejercicio 7: {my_list}\n')


# Ejercicio 8
my_list.sort()
print(f'Ejercicio 8: {my_list}\n')


# Ejercicio 9
my_tuple += ('newItemTuple4',)
print(f'Ejercicio 9: {my_tuple}\n')




