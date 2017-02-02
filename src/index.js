import combine from './combine';

function* _mergesort(arr, startIndex , endIndex ){
  //console.log('mergesort',startIndex,endIndex);
  if(endIndex - startIndex < 0 ){
    return;
  }
  if(startIndex == endIndex){
    yield arr[startIndex];
  }
  else if(endIndex - startIndex == 1){
     if(arr[startIndex] <= arr[endIndex]){
       yield arr[startIndex];
       yield arr[endIndex];
     }else{
       yield arr[endIndex] ;
       yield arr[startIndex];
     }
  }
  else{
    const diff = endIndex-startIndex;
    let mid;
    if(diff % 2 == 0){
      mid = (endIndex+startIndex)/2;
    }else{
      mid = (endIndex - 1 +startIndex)/2;
    }
    //console.log('mergesort',startIndex,mid,endIndex);
    const g1 = _mergesort(arr,startIndex,mid);
    const g2 = _mergesort(arr,mid+1,endIndex);
    yield* combine(g1,g2);
  }
}


export default function mergesort(arr){
  if(!Array.isArray(arr)){
    throw new TypeError('expected array');
  }
  try{
    return Array.from(_mergesort(arr, 0 , arr.length - 1));
  }catch(err){
    console.log(err);
  }


}
