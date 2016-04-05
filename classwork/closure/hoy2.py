import random

def doubler(f):
    def inner():
        name=f()
        return name+name
    return inner

@doubler
def get_name():
    names = ['tom','sue','harry','lisa','sarah','horatio']
    return random.choice(names)

print doubler(get_name)


'''
2nd eg will hae demo return "hellohello" whenever we invoke it

equiv to:
get_name = double(get_name)

TAKEAWAY:
BAM!: can write fxns that transform fxns.

A Python decorator is merely shorthand
for callign a wrapper-type function like doubler.

A Python decorator encapsulates a closure.

A decorator allows to transparently wrap functionality
'''
