let str="naman";
let bag="";
for(let i=str.length;i>0;i--){
    bag=bag+str[i];
}
if(bag==str){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}