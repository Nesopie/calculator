import Calculator from './components/calculator.js';
import { useState, useEffect } from 'react'

function App() {
    const [ stack, setStack ] = useState([0]);
    const [ displayText, setDisplayText] = useState("");

    function onClick(e) {
        if(e.target.className === "number") {
            let newStack = [...stack];
            if(isNaN(+stack[stack.length - 1])) {
                setStack([...newStack, +e.target.innerText]);
            }else {
                let str = `${newStack[newStack.length - 1]}`;
                if(str.indexOf(".") !== -1) {
                    if(str[str.length - 1] === "0") {
                        str = str.slice(0, str.length - 1) + e.target.innerText;
                    }else {
                        str += e.target.innerText
                    }
                    newStack[newStack.length - 1] = +str;
                }else{
                    newStack[newStack.length - 1] = newStack[newStack.length - 1] * 10 + +e.target.innerText;
                }
                setStack(newStack);
            }
        }else if(e.target.className === "operator") {
            setStack([...stack, e.target.innerText]);
        }else if(e.target.className === "submit") {
            if(isNaN(+stack[-1])) {
                let newStack = [...stack];
                setStack(newStack.pop());
            }
            setStack([evaluatePostfix()]);
        }else if(e.target.className === "decimal") {
            if(!isNaN(+stack[stack.length - 1])) {
                if(+stack[stack.length - 1] % 1 === 0) {
                    let newStack = [...stack];
                    newStack[newStack.length - 1] = newStack[newStack.length - 1].toFixed(1);
                    console.log(newStack);
                    setStack(newStack);
                }
            }
        }else if(e.target.className === "reset") {
            setStack([]);
        }else if(e.target.className === "delete") {
            if(stack.length === 0 ) return;
            let str = `${stack[stack.length - 1]}`;
            let newStack = [...stack];
            if(isNaN(stack[stack.length - 1])) {
                newStack.pop();
                setStack(newStack);
            }else if(str.indexOf(".") !== -1) {
                str = str.slice(0, str.length - 1);
                if(str[str.length - 1] === "0") {
                    str = str.slice(0, str.length- 1);
                }
                if(str === undefined) {
                    newStack.pop();
                }else {
                    newStack[newStack.length - 1] = +str;
                }
                setStack(newStack);
            }else if(str.indexOf(".") === -1) {
                newStack[newStack.length - 1] = Math.trunc(newStack[newStack.length - 1] / 10);
                if(newStack[newStack.length - 1] === 0) {
                    newStack.pop();
                    newStack = newStack.length === 0 ? [0] : newStack;
                }
                setStack(newStack);
            }
        }
    }

    function getPrecedence(operator) {
        if(operator === "x" || operator === "/") {
            return 1;
        }else {
            return 0;
        }
    }

    function infixToPostfix() {
        let postfix = [];
        let tempStack = [];
        for(let i = 0; i < stack.length; i++) {
            if(!isNaN(+stack[i])) {
                postfix.push(+stack[i]);
            }else {
                while(tempStack.length !== 0 && getPrecedence(stack[i]) <= getPrecedence(tempStack[-1])) {
                    postfix.push(tempStack.pop());
                }
                tempStack.push(stack[i]);
            }
        }

        while(tempStack.length) {
            postfix.push(tempStack.pop());
        }
        return postfix;
    }

    function evaluatePostfix() {
        let postfix = infixToPostfix();
        let tempStack = [];

        for(let i = 0; i < postfix.length; i++) {
            if(!isNaN(+postfix[i])) {
                tempStack.push(+postfix[i]);
            }else {
                let currentOperator = postfix[i];
                let operand2 = tempStack.pop();
                let operand1 = tempStack.pop();

                let result;

                if(currentOperator === "x") {
                    result = operand1 * operand2;
                }else if(currentOperator === "/") {
                    result = operand1 / operand2;
                }else if(currentOperator === "-") {
                    result = operand1 - operand2;
                }else {
                    result = operand1 + operand2;
                }
                tempStack.push(result);
            }
        }
        return tempStack[0];
    }

    useEffect(() => {
        setDisplayText(stack.join(" "));
    }, [stack])

    return (
        <Calculator onClick={onClick} display={displayText}/>
    )
}

export default App;
