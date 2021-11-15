/*
Given an array of integer, return the indices
of the 2 numbers that add upto a given
target.
*/

//Ask these questions to interviewer => Constraints

//Question1:- Are all the number positive or can ther be any negative numbers?
//Question2:- Are there duplicate numbers in the array?
//Question3:- Will there always be a solution availiable?
//Question4:- What do we return if there are no solutions?
//Question5:- Can there be multiple pairs that add upto this target number?

const array = [1, 3, 7, 9, 2];

const target = 11;

function findPositionTarget(array, target) {
  for (var i = 0; i < array.length; i++) {
    p = i;
    console.log(" ");
    console.log({p, value: array[i]});
    console.log(" ");
    var numberToFind = target - array[p];
    console.log({numberToFind, target});
    console.log(" ");
    for (var j = p + 1; j < array.length; j++) {
      console.log({j, value: array[j]});
      if (array[j] === numberToFind) {
        return [p, j];
      }
    }
  }
  return null;
}

console.log(findPositionTarget(array, target));
