let currentValue=0;
let logEntries=[];


function reusable(){
    return `${(userInput.value)}`;
}

function calcOperation(current,operator,value){
    const text=`${current} ${operator} ${value}`;
    console.log(currentValue);
    outputResult(currentValue, text);
}

function writeLog(userInput,operation,prevResult,result){
    const logEntry={
        usrInput:userInput,
        operation:operation,
        prevResult:prevResult,
        result:result
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(){
    const val=reusable();
    const textValue=currentValue;
    currentValue+=parseInt(val);
    calcOperation(textValue,'+',val);
    writeLog(val,"Addition",textValue,currentValue);
}

function subtract(){
    const val=reusable();
    const textValue=currentValue;
    currentValue-=parseInt(val);
    calcOperation(textValue,'-',val);
    writeLog(val,"Subtract",textValue,currentValue);
}

function multiply(){
    const val=reusable();
    const textValue=currentValue;
    currentValue*=parseInt(val);
    calcOperation(textValue,'*',val);
    writeLog(val,"Multiply",textValue,currentValue);
}

function divide(){
    const val=reusable();
    const textValue=currentValue;
    currentValue/=parseInt(val);
    calcOperation(textValue,'/',val);
    writeLog(val,"Divide",textValue,currentValue);

}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);