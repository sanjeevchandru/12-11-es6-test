document.write("1.Which method is used to solve async fuunction into sync?"+"<br>");
document.write("1.callback"+"<br>"+"2.callback hell"+"<br>"+"3.Promise"+"<br>"+"4.Promise chaning"+"<bvr>"+"5.async/await"+"<br><br>");


document.write("2. input:[3,4,5,6]"+"<br>"+"output:[3,5,7,9]"+"<br>"+"How to achieve this output?"+"<br>");
let arr=[3,4,5,6];
function f1(arr){
    let x=arr.filter((e)=>{
        return e%2!=0;
    })
    x.push(7,9);
    return x;
}
document.write(f1(arr)+"<br><br>");

document.write("3.Mention three states of promise in ES6?"+"<br>");
document.write("1.pending-initial state, neither fulfilled nor rejected."+"<br>"+"2.fulfilled: meaning that the operation was completed successfully."+"<br>"+"3.rejected: meaning that the operation failed."+"<br><br>");

document.write("4.What  is the output?"+"<br>"+"check the console"+"<br><br>");
for(var i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
    },1000)
}

// document.write("5.solve palindrome logic in promise"+"<br>");
var num=1221;
function palindrome(num){
    return new Promise((res,rej)=>{
        let rev=0,rem,n=num;
        while(n!=0){
            rem=n%10;
            rev=(rev*10)+rem;
            n=parseInt(n/10);
        }
        if(num==rev){
            res( "5.solve palindrome logic in promise"+"<br>"+"The number of "+num+" is palindrome")
        }
        else{
            rej("5.solve palindrome logic in promise"+"<br>"+"The number of "+num+" is not a palindrome")
        }
    })
}

palindrome(num).then((x)=>
{document.write(x+"<br><br>")})
.catch((y)=>{
    document.write(y);
});

document.write("6.What is the Output?"+"please refresh the page"+"<br><br>");
function t(p1,p2){
    alert(p1+" and "+p2);
}
function f2(c,p1,p2){
    c(p1,p2)
}
f2(t,"hii","hello")

document.write("7.What is ES6?"+"<br>");
document.write(" ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015."+"<br><br>");

document.write("8.What are the new futures introducted in ES6? "+"<br>");
document.write("ES6 introduced several key features like const, let, arrow functions, template literals, default parameters, and a lot more."+"<br><br>");

document.write("9.Different between calback hell and promise chaning?"+"<br>");
document.write("Callback Hell contributes to excessive indentation and a visually overwhelming structure, while Promise Chaining encourages a more flattened and organized code structure."+"<br><br>");

document.write("10.find output"+"<br>");
const [,,website]=["sanjeev","chandru","codesweetly.com"];
document.write(website+"<br><br>");


document.write("11. How to create a class in ES6?"+"<br>");
document.write(" In this method, we simply write the code and add the keyword class as a prefix to the class name."+"<br>");
document.write("Class c_name{"+"<br>"+"constructor(a,b){"+"<br>"+"this.a=a;"+"<br>"+"this.b=b;"+"} }"+"<br>"+"let x=new c_name('sanjeev','chandru');"+"<br><br>");


function f3(n){
    let count=0;
    for(let i=0;i<=n;i++){
        if(n%i==0){
            count++;
        }
    }
    return new Promise((res,rej)=>{
        res(count)
    })
}
function f4(a){
    return new Promise((res,rej)=>{
        if(a===2){
            res("12.Write any one example for async/await?"+"<br>"+"prime Number");
        }
        else{
            rej("Not Prime Number")
        }
    })
}
async function f5(){
    try{
        let x=await f3(23);
        let y=await f4(x)
        document.write(y);
    }
    catch(err){
        console.log(err);
    }
}
f5()

document.write("13.Print which one having more than or equal to two vowel.."+"<br>");
let colors = ["Red","Blue","Green","Yellow","Gray","Purple"];
function f8(colors){
    let x=["a","e","i","o","u"];
    let y=[];
    colors.map((e)=>{
        let c=0;
        for(i=0;i<e.length;i++){
            if(x.includes(e[i])){
                c++;
                if(c>1 && (e[i]!==e[i+1])){
                 y.push(e)
                }
            }
        }
        return c
    })
    return y[0]+","+y[y.length-1];
}
document.write(f8(colors)+"<br><br>");

document.write("14. Difference between map ,filter and foreach"+"<br>");
document.write("map() will return a new array as per the conditions applied. forEach() will not return anything. forEach() returns undefined. filter() method will return an array of matching elements else will return an empty array if no matching happens."+"<br><br>");

document.write("15.Solve reverse number logic using without argument with return type"+"<br>");
function f7(){
    let n=123;
    let rev=0;
    while(n>0){
        let rem=n%10;
        rev=(rev*10)+rem;
        n=parseInt(n/10);
    }
    return rev;
}
document.write("Reverse Of given number is : "+f7()+"<br><br>");




