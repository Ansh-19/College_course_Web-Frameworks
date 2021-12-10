console.log("This is my first TS code...");
let NumVar:number = 23.87;
console.log("Number variable value is:", NumVar);
// NumVar = "defsfs";
var boolVar : boolean = true;
console.log(boolVar);
let str:string = "This is a string variable";
console.log(str);
nm:function addno(x:number, y:number):number{
    return x+y;
}
console.log(addno(10,20));
let n:number = addno(20,30);
console.log(n);
let l:number[] = [2,3,4,5,6,7];
console.log(l);
let myList:Array<boolean> = [true, true, false, false];
console.log(myList);
let dataPkt:[string, number, string, boolean] = ["127.0.0.1" ,34, "192.0.0.1", true];
dataPkt = ["fasfsa", 77, "frff", false];
console.log(dataPkt);
enum month {jan=1, feb, mar, apr, may, jun, jul, aug, sep,oct, nov, dec};
let m:month = month.aug;
console.log(m);
var myAnyVar:any = 78;
console.log(myAnyVar);
myAnyVar = "xlx;axksa";
console.log(myAnyVar);
let obj = function create(obj:Object | null): void