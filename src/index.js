function combine(arr1,arr2){
  //console.log('combine',arr1,arr2);
  let i = 0, j = 0;
  const res = [];
  while(i < arr1.length || j < arr2.length){
    if(i<arr1.length && j<arr2.length){
      if(arr1[i]<=arr2[j]){
         res.push(arr1[i]);
         i++;
      }else{
        res.push(arr2[j]);
        j++;
      }
    }else{
      if(i == arr1.length){
         res.push(...arr2.slice(j));
         j = arr2.length;
      }else{
         res.push(...arr1.slice(i));
         i = arr1.length;
      }
    }
  }
  return res;
}

function _mergesort(arr){
  //console.log('mergesort',JSON.stringify(arr));
  if(!arr.length){
    return [];
  }else if(arr.length == 1){
    return [arr[0]];
  }
  else if(arr.length == 2){
     const [a,b] = arr;
     if(a<=b){
       return [a,b] ;
     }else{
       return [b,a];
     }
  }
  else{
    const a1 = _mergesort(arr.slice(0,arr.length/2));
    const a2 = _mergesort(arr.slice(arr.length/2));
    return combine(a1,a2);
  }
}


export default function mergesort(arr){
  if(!Array.isArray(arr)){
    throw new TypeError('expected array');
  }
  return _mergesort(arr);
}
