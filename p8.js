function findCommonElements(ar1, ar2, ar3) {

  const output = [];


  let i = 0;
  while (i < ar1.length) {
  
    let j = 0;
    let k = 0;
    while (j < ar2.length && k < ar3.length) {
      if (ar1[i] === ar2[j] && ar1[i] === ar3[k]) {
       
        output.push(ar1[i]);
        j++;
        k++;
      } else if (ar1[i] < ar2[j]) {
        j++;
      } else {
        k++;
      }
    }
    i++;
  }

  return output;
}