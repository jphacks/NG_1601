var hoge  = new Date("Sat, 3 Nov 2016 00:00:00 +0900");

console.log(hoge);
hoge_str = hoge.toString();
console.log(hoge_str);
console.log(new Date(hoge_str))
console.log((new Date('Sat, 3 Nov 2016 00:00:00 +0900')).toString());

var h = {
  date: (new Date('Sat, 3 Nov 2016 00:00:00 +0900')).toString()
};
console.log(h);
