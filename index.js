function saturdayFun(task="roller-skate"){
    return `This Saturday, I want to ${task}!`

}
function mondayWork(toDo='go to the office'){
    return `This Monday, I will ${toDo}.`
}




function wrapAdjective(symbol='*'){
    
    return function (adjective='special') {

        return `You are ${symbol}${adjective}${symbol}!`;
          

    }
}

