 function map (arr, tu) {
    const w = []
   for  ( let i = 0; i < arr.length; i++ ) {
    w.push(tu(arr[i])) 
   }
   console.log(w)

}
 const tu = (a) => {
    return a*2
 }
 map([1,2,3], tu)
 
 function wet (k)  {
   if (k === 1) {
      return 1
   }
 return wet(k-1)*k
 }
 console.log(wet(5))

  const registr = (world) => {
   return world.toLowerCase()

 }
 console.log(registr("HELLO"))







 console.log(wet(5))
 const mass = [1,2,3]
 console.log(Array.isArray(mass))

 let firstObj = { name: 'Hello' };

 let secondObj = firstObj;
 
 firstObj = { name: 'Bye' };
 
 console.log(secondObj.name);

console.log(secondObj);
z


