function merge(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p3 = nums1.length - 1;
  while (p2 > -1) {
    if (p3 < 0) {
        nums1.splice(0, 0, nums2[p2])
        p2--;
    } else if (p3 === p1) {
        console.log('p3 === p1');
        if (nums1[p1] > nums2[p2]) {
            p1--;
            p3--;
        } else {
            console.log('p2 > p1');
            nums1.splice(p3 + 1, 0, nums2[p2]);
            p2--;
        }
    } else if (p3 > p1) {
        if (nums1[p1] > nums2[p2]) {
            console.log('p1 > p2');
            nums1[p3] = nums1[p1];
            nums1.splice(p1, 1);
            p3 = p3 - 2;
            p1--;
        } else {
            console.log('p2 > p1');
            nums1[p3] = nums2[p2];
            p2--;
            p3--;
        }
    }
    
  }
  
};

// const n1 = [1,2,3,0,0,0]

// const n2 = [2,5,6]


// merge(n1, 3, n2, 3);

// const n1 = [2, 0];
// const n2 = [1];

// merge(n1, 1, n2, 1);

// const n1 = [1,2,4,5,6,0]

// const n2 = [3]

// merge(n1, 5, n2, 1);

// n1 = [0,0,3,0,0,0,0,0,0]

// const n2 = [-1,1,1,1,2,3]

// merge(n1, 3, n2, 6);

n1 = [1,2,4,5,6,0];

const n2 = [3];

merge(n1, 5, n2, 1);

console.log(n1);