def repeat(string):
    return lambda x: string * x

def repeat(word):
    def times(x):
        return word * x
    return times

r1 = repeat('hello')
r2 = repeat('cool')
print r1(2)
print r2(2)
print repeat('cool')(3)
