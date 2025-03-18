var merge = function(nums1, m, nums2, n) {
   
    let A= m-1
    let B= n-1
    let C = m+n-1

    //compare two biggest numbers from last of each array and start placing them at the
    //end of the array
    while(C >= 0 && A>=0 && B>=0){
        if(nums1[A]>=nums2[B]){
            nums1[C] = nums1[A]
            A=A-1
        } else{
            nums1[C] = nums2[B]
            B=B-1
        }
        C = C-1
    }

  
  //for remaining elements of B
        while(C >=0 && B >= 0){
            nums1[C] = nums2[B]
            C = C-1
            B = B-1
        }
    
        return nums1
    
};

//Os should be ignored
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))

// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.