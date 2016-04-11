import time

#wrapper
def args(f):
    def inner(*arg):
        print f.func_name + str(arg)
        return f(*arg)
    return inner
    
def time(function):
    def inner(*args):
        t1 = time.time()
        t2 = f(*args)
        print "Executed in " + str(time.time() - start) + ' seconds'
        return t2
    return inner
  
@time
@args
def hello(*arg):
    return "hello world"

#a simple example of applying multiple decorators
def make_bold(fn):
    return lambda : "<b>" + fn() + "</b>"

def make_italic(fn):
    return lambda : "<i>" + fn() + "</i>"

@make_bold
@make_italic
def hello():
    return "hello world"

helloHTML = hello()

print helloHTML

###############################################

def quicksort(g):
    if len(g) <= 1:
        return g
    pivot = random.choice(g)
    lower = [x for x in g if x < pivot]
    upper = [x for x in g if x > pivot]
    return quicksort(lower) + ([pivot]*g.count(pivot)) + quicksort(upper)


###############################################
def timer(f):
    def inner(*arg):
        t = time.time() 
        x = f(*arg)
        print 'execution time: ' str(time.time() - t)
    return x

#def randList(n, lower=-100, upper=100):
#    l = []
    
