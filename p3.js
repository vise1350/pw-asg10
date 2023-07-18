function findPeakElement(nums) {
    // Initialize the left and right pointers to the beginning and end of the array, respectively.
    let low = 0;
    let high = nums.length - 1;
  
   
    while (low <= high) {
      // Calculate the middle index.
      let mid = Math.floor((low + high) / 2);
  
     
      if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
        return mid;
      } else if (nums[mid] < nums[mid + 1]) {
       
        low = mid + 1;
      } else {
        
        high = mid - 1;
      }
    }
  
    return -1;
  }
  
  // Example
  const nums = [1, 2, 3, 1];
  const index = findPeakElement(nums);
  console.log(index); // 2
  