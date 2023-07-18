function majorityElement(nums) {
   
    let count = 0;
  

    for (let i = 0; i < nums.length; i++) {
   
      if (count === 0) {
        count = 1;
        majorityElement = nums[i];
      } else if (nums[i] === majorityElement) {
        count++;
      } else {
        count--;
      }
    }

 return majorityElement;
  }
  
