##############Pythagorean Triplets##############

def pta(n):
    triplets=[]
    for c in xrange(1,n):
        for a in xrange(1,c):
            for b in xrange(1,a):
                if a**2 + b**2 == c**2:
                    triplets.append([b,a,c])
    return triplets

print 'Testing pt1...'
print pta(20)


#Classcode
'''
def ptb(n):
    triplets=[]
    for a in range(1,n):
        for b in range(1,n):
            for c in range(1,n):
                if a*a + b*b == c*c:
                    triplets.append([a,b,c])
    return triplets

print ptb(100)
'''


def pt2a(n):
    return[(a,b,c)
           for c in xrange(n)
           for b in xrange(c)
           for a in xrange(b)
           if a**2 + b**2 == c**2]
print '\n\nTesting pt2...'
print pt2a(20)

#Classcode
'''
def pt2b(n):
    return [(a,b,c)
            for a in range(1,n)
            for b in range(1,n)
            for c in range(1,n)
            if a*a + b*b == c*c]
'''

#####################Quicksort######################
'''
(1)Pick a PIVOT
(2)Partition into 2 Lists, s.t.
   *such that all v's < p are in lower half
   *such that all v's > p are in upper half
   *Pivot in F.R.P
(3) qsort(LH) + p + (qsortUH)
'''

def qsort(list):
    lower=[]
    upper=[]

    if len()
