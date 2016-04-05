#a simple closure in Python
def makeAdder(n):
    def inner(x):
        return x+n
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)

print add3(10) #returns 13
print add5(10) #returns 15

########################################################
########################################################

# A clunky approach to class type abstraction
def make_counter():
    # private "instance" data
    # has to be a list due to weird python scoping rules
    count = [0]

    # public methods
    def inc():
        count[0]=count[0]+1
    def dec():
        count[0]=count[0]-1
    def reset():
        count[0]=0
    def get():
        return count[0]

    # return a diction so we have access to all the methods
    return {'inc': inc, 'dec': dec, 'reset': reset, 'get':get}

c1 = make_counter()
c2 = make_counter()

# Must use clinky list notation:

c1['inc']()
c1['inc']()
c1['inc']()
print c1['get']()

c2['inc']()
print c2['get']()

c1['reset']()
print c1['get']()

'''
How is this useful?
Suppose routiens like the folloowing, which returns a string:
'''

import random
def get_name():
    names = ['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
    return random.choice(names)

print get_name()
'''
Suppose many calls to get_name throughout code.
Suppose want to double name each time used.
A "traditional" way of doing this might be:
'''

def dble(f):
    name = f()
    return name+name

print dble(get_name)


#########################################################
#########################################################
