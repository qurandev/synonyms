_.chain(synonymdetails)
 .pluck('id')
 .uniq()
 .map(function(i){ return i.match(/[^\d]+/)[0]; })
 //.uniq()
 .countBy( function(a){ return a; })
 .value()
Object
A: 28
AA: 49
E: 13
TA: 7
ZA: 2
b: 80
d: 36
dd: 9
f: 14
gg: 27
gh: 9
h: 17
k: 45
l: 17
m: 49
n: 34
p: 59
q: 18
t: 34
tt: 8
w: 4
xAA: 1
y: 4
zk: 1