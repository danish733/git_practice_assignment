function isPalindrome(str) {
   
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    
    return cleanStr === cleanStr.split('').reverse();
  }
  
  console.log(isPalindrome("racecar")); 