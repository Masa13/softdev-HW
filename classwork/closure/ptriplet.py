######################################################
######################################################
#Pythagorean Triplets 

def pt(n):
    triplets=[]
    for c in xrange(1,n):
        for a in xrange(1,c):
            for b in xrange(1,a):
                if a**2 + b**2 == c**2:
                    triplets.append([b,a,c])
    return triplets

print pt(100)

'''
def pt1(n):
    triplets=[]
    for a in range(1,n):
        for b in range(1,n):
            for c in range(1,n):
                if a*a + b*b == c*c:
                    triplets.append([a,b,c])
    return triplets

print pt1(100)
'''

##################################################

def pt2(n):
    return([a,b,c] 
