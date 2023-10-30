//vvi for interview
//js is single thread -- in js everything is executed in process
/*

below we taken examples of this code
let val1 = 10
let va2 =5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)



js execution context

-> excution phases

1) first --  global execution/environment context is created  -- it refers to this   //it is ddiff of browser,nodejs,bun etc
--another is function execution context
-- another EC which is eval EC //moongose documentation have

js code is executes in 2phases--
2) 1st - memory creation phase    -- here only mem is allocated for var , fn
    initially all the variables holds undefined
    val1 -> undefined
    val2 -> undefined
    addnum -> defination
    result1 -> undefined
    result2 -> undefined

3) 2nd -- execution phase 
   val1 = 10
   val2 = 5
   addNum -> another execution context -> new variable environment + execution thread   //whenever fn is call exwcution context is created
   //the addNum exeution context is also deleted after work
   after this memory creation phase and add execution phase for addNum is done

   after that the total of execution context of fn return back to global execution of js code


*/


// call stack



