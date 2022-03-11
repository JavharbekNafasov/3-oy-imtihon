// 1-MISOL

var sampleText = "JavaScript is a must-know programming language for a modern developer"

function modifyText(text) {
    
    var textSplit = sampleText.split(" ") // So'zlarni alohida ajratib olish uchun
    var textSplit2 = sampleText.split("") // Harflarni alohida ajratib olish uchun
    var newArray1 = []
    var newArray2 = []
    var result1
    var result2

    for (var item of textSplit) {
        newArray1.unshift(item)
    }

    for (const item2 of textSplit2) {
        newArray2.unshift(item2)
    }

    return {
        result1: newArray1.join(" "),
        result2: newArray2.join("")
    }
}

console.log(modifyText(sampleText));