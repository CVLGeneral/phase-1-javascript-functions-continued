function saturdayFun(task="roller-skate"){
    return `This Saturday, I want to ${task}!`

}
function mondayWork(toDo='go to the office'){
    return `This Monday, I will ${toDo}.`
}




function wrapAdjective(symbol='special'){
    return function (adjective) {

        return `You are ${symbol}${adjective}${symbol}!`;
          

    }
}

