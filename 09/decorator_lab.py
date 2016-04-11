import time

#wrapper
def args(f):
    def inner(*arg):
        print f.func_name + str(arg)
        return f(*arg)
    return inner
    
def gettime(function):
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

def make_bold(f):
    return lambda : "<b>" + f() + "</b>"
    
def make_italic(f):
    return lambda : "<i>" + f() + "</i>"
    
@make_bold
@make_italic
def hi():
    return "hi"
