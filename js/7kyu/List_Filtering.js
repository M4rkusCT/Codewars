const filter_list = l => l.filter(n => n === Number(n)).map(n => n);

filter_list([1,'a','b',0,15]);