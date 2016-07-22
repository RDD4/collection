'use strict';
//gchgvhccgh

function collect_all_even(collection) {
  //在这里写入代码
  var num=[],k=0;
  for(var i=0;i<collection.length;i++)
    {
       if(collection[i]%2==0)
           num[k++]=collection[i];
    }
  return num+1;
}

module.exports = collect_all_even;
