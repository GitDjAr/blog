let a = '12lkhaksdh1888 12flhalkjshdlkjhfljh12'
console.log('object :>> ', a.includes('1a2'));
console.log('object :>> ', a.endsWith(12));
console.log('object :>> ', a.startsWith(1111));


function fun(x){
  let a = x || 5 ;
  console.log('x :>> ', a);
}
fun(12),
fun(undefined)
fun(null)