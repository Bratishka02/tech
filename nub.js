function getMathResult(number, count) {
    let res ="";
    if(count && count<=0){
        for(let i = 1; i<=count; i++){
            if (i===count){
                res += `${number * i}`;
            } else {
                res += `${number * i}---`;
            }
        }
    } else {
        return number;
    }
    return res;
}