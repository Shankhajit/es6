
sampleFunction=function()
{
var x=10
var y=20
{

}
}
sampleFunction()
console.log("Code for each")
var friends=["obn","oaa","occ","opp"]
console.log("Code for each with arrow function")

friends.forEach(f=>console.log(f))
console.log("Code for each with named function")
friends.forEach(printOut)
function printOut(f)
{
console.log(f)
}
console.log("Code for map")
var newFriends=friends.map(f=>f.length
)
newFriends.forEach(f=>console.log(f))
console.log("Code for flter")

var scores=[10,50,100,200,150,25,300,41,66]
console.log("filter named function")
var filteredScores=scores.filter(greaterThan100)
function greaterThan100(score)
{
    return score>100
}
filteredScores.forEach(s=>console.log(s))

console.log("filter arrow function")
var filteredScores=scores.filter(score=>score>100)

filteredScores.forEach(s=>console.log(s))

console.log("code for find")
var friends=[
    {
        name:"obb",
        score:10
    },
    {
        name:"obc",
        score:20
    },
    {
        name:"oba",
        score:30
    },
]
var foundFriend=friends.find(findMe)

    function findMe(f)
    {
        return f.score>15
    }
console.log(foundFriend)


console.log("Code for reduce")
var scores=[10,50,100,200,150,25,300,41,66]
var totalOfScores=scores.reduce(totalOfAll,0)
function totalOfAll(t,iv)
{
    return t+iv
}
var filteredTotal=scores.filter(score=>score>=100).reduce((onescore,iv=0)=>onescore+iv)
console.log(filteredTotal)


console.log("default function arguments")
var scores=[10,50,100,200,150,25,300,41,66]
function sortScores(ary=[],order='ascending')
{
    console.log("array "+ary)
    console.log("order"+order)
}
sortScores(scores)
sortScores(scores,'descending')

console.log("code for spread operator");
var scores=[10,50,100,200,150,25,300,41,66]
var copyOfScores=[...scores]
console.log(scores)
console.log(copyOfScores)
console.log(scores==copyOfScores)

console.log("code for merging arrays")
var s1=[10,50,100,200]
var s2=[150,25,300,41,66]
var mergedArray=[...s1,...s2]
console.log(mergedArray)


//rest operator

function displayScoresFromArray(first, second, third, ...others)
{
    console.log(first)
    console.log(second)
    console.log(third)
    console.log(others)
}
displayScoresFromArray(10,50,100,200,150,25,300,41,66)