#4/12/16

def fib1(n):
    if n < 2:
        return n
    else:
        return fib(n-1) + fib(n-2)

'''
DYNAMIC PROGRAMMING
(aka "dynamic programming")
Means of solving a complex problem by solving its
component subproblems just once and storing their solutions


MEMOIZATION
Technique of storing solutions to subproblems to avoid recomputation
                     or 
use of caches to retrieve previously computed values
to reduce time complexity of algorithms
'''

####################################################################
fib_cache = {}

def fib_memo(n):
    if n < 2:
        return n
    elif n in fib_cache:
        return fib_cache[n]
    else:
        val = fib_memo(n-1) + fib_memo(n-2)
        fib_cache[n] = val
        return val

#print fib(30)
print('output of fib(999) \n')
print fib_memo(999)

####################################################################

def memoize(f):
    memo = {} #hashmap/dict for O(1) lookup
    def inner(x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return inner

@memoize
def fib2(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib2(n-1) + fib2(n-2)
    

fib = memoize(fib2) #turn memoize into a decorator

print fib2(0)
print fib2(1)
print fib2(2)
print fib2(3)
print fib2(999)
