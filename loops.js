const input = "i am a genius"
const vowels = ["a","e","i", "o", "u"]
const resultsArray = [] 

for(let i = 0; i < input.length; i++){
    for(let j = 0; j < vowels.length; j++){
        if(input[i] === vowels[j]){
            resultsArray.push(input[i])
        }
        if(input[i] === "e"){ // this will double every e it finds. 
            resultsArray.push(input[i]) //
        }
        if(input[i] === "u"){ // this will double every u it finds. 
            resultsArray.push(input[i])
        }
    }
}

const finalResults = resultsArray.join('').toUpperCase()
console.log(finalResults)