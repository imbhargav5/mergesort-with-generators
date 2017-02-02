module.exports = function* combine(iter1,iter2){
  // console.log(typeof g1);
  // var iter1 = g1();
  // var iter2  = g2();
  let i = iter1.next();
  let j = iter2.next();

  try{
    while(!i.done || !j.done){
      //console.log(i, j);
      if(i.done){
        //console.log('i is done');
        //console.log(j);
        yield j.value;
        yield* iter2;
        //console.log(res);
        break;
      }
      else if(j.done){
        //console.log('j is done');
        yield i.value;
        yield* iter1;
        break;
      }

      else if(i.value <= j.value){
        //console.log('i is less than j',i,j);
        yield i.value;
        i = iter1.next();
        //console.log(`i is now ${i.value}`);
      }else{
        //console.log('i is greater than j',i,j);
        yield j.value;
        j = iter2.next();
        //console.log(`j is now ${j.value}`);
      }
    }

  }catch(err){
    console.log(err);
  }
};
