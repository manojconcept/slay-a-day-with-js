/**
 * Time complexity; // running time;
 * space complexity; // memory take;
 * --------------------------------
 * omega,theta,omicron 
 * omega --> better case;
 * theta ---> average case;
 * omicron --> worst case; --> know as big O;
 */

// O(n);
function logItems(n){
    for(let i=0;i<n;i++){
        console.log(i);
    }
}

logItems(10);
//------------------------------
// drop constants;
function logItems(n){
    for(let i=0;i<n;i++){
        console.log(i);
    }
    for(let j=0;j<n;j++){
        console.log(j);
    }
}

logItems(3);
// so code run n+n =2n, so O(2n) ---> drop the constants O(n);
//------------------------------

// O(n squared )

function logItems(n){
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            for(let k=0;k<n;k++){
                console.log(i,j,k); //n cube --> but simplifying o(n square) worst case
            }
        }
    }
   
}
logItems(10);

//------------------------------

// Drop non-Dominants

function logItems(n){
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
                console.log(i,j);  //O(n square) is dominants
        }
    }

    for(let k=0;k<n;k++){
        console.log(i,j,k); // O(n) is non-dominants --> removing it show only O(n square);
    }
   
}
logItems(10);

//------------------------------
//O(1) // referred as constant time.
function addItem(n){
    return n + n // O(n); if n+n+n O(2), but after simplifying O(1);
}
//The most efficient BigO, nothing is more efficient;
//------------------------------

// O(log n); --> This is a technique called divide and conquer;
/**
 /*
 * [1,2,3,4,5,6,7,8];
 * [1,2,3,4]; step 1
 * [1,2] step 2
 * [1] step 3
 * this is a technique called divide and conquer
 * 2 cube = 8 where 8 is the items in an array;
 * log<sub>2 8 = 3
 */
 


//------------------------------
// O(nlog n); ---> some soring Algorithms

//------------------------------
//Different Terms for Inputs
/**
 * O(a + b)
 */

function logItem(a,b){
    for(let i=0;i<a;i++){
        console.log(i);  //O(n); ---> // O(a); @parameter are different
    }

    for(let j=0;j<b;j++){
        console.log(j); //O(n); ---> // O(b); @parameter are different
    }
    
}
logItem(10,8);
//------------------------------
//Different Terms for Inputs
/**
 * O(a * b)
 */

function logItem(a,b){
    for(let i=0;i<a;i++){
        for(let j=0;j<b;j++){
            console.log(j); 
        }
    }
}




