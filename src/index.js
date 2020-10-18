
// You should implement your task here.

module.exports = function towelSort (matrix) {
   return matrix === undefined || matrix.length === 0 ? [] :
     matrix.map(function(curr, ind) 
     {return ind % 2 === 1 ? curr.reverse() : curr}).join(",").split(",")
     .map(function(curr) {return isNaN(curr) ? curr : Number(curr)});
}
