Array.prototype.ownMap=function (callback){ //created a polyfill for map and callback function is passed
let temp=[]; //array that will have values to be returned
for (let i=0;i<this.length;i++){ //this refers to input array

temp.push(callback(this[i],i,this)) // here we will callback function, that will return value and it will be pushed to temp
}
return temp; // temp is returned
}

const arr=[1,2,4,5]
console.log(arr.ownMap(item=>item+1)) // here item=>item+1 is callback function used in our polyfill
