function findRange(nums, target) {
    // Initialize the start and end indices to -1.
    let start = -1;
    let end = -1;
  
    
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        start = mid;
        high = mid - 1;
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
   
    if (start === -1) {
      return [-1, -1];
    }
  
    //  binary search to find the last occurrence of the target value.
    low = start;
    high = nums.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        end = mid;
        low = mid + 1;
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    
    return [start, end];
  }
  

  