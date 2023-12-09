import { useState } from "react"
let boolean = false;
function App() {
  const [search, setSearch] = useState("");
  const [arraySorted, setArraySorted] = useState();

  const searchHandler = (e) => {
    setSearch(e.target.value);
  }

  const arranger = () => {
    boolean = true;
    for (a = 0, b = 1; b < arrLength; a++, b++) {
      if (arrToSort[a] > arrToSort[b]) {
        [arrToSort[a], arrToSort[b]] = [arrToSort[b], arrToSort[a]];
        boolean = false;
      }
      /*  if (b === arrLength - 1) {
         //sortedArray.push(arrToSort[b])
         console.log(sortedArray.unshift(arrToSort[b]));
         //arrToSort.pop();
       } */
    }
    sortedArray.unshift(arrToSort[b])
    //}
    console.log(arrToSort);
    console.log(sortedArray);
  }
  //a,b, ...arrayToSort
  //take first two values and compare them if a is bigger than b then b becomes a and a becomes b.
  //then move to the next pair b,c and do the same until you reach the end of the array and start again
  //first is array[0] compared to array[1]
  //then array[1] compared to array[2]
  //in the end array[array.length-1]
  const arrToSort = [...search];
  let sortedArray = [];
  let arrLength = arrToSort.length;
  const arraySorter = () => {
    let a, b, rest;
    console.log(arrToSort);
    /*  [a, b, ...rest] = arrayToSort;
     console.log(a, b); */
    /* if (arrToSort[0] > arrToSort[1]) {
      [arrToSort[0], arrToSort[1]] = [arrToSort[1], arrToSort[0]];
    } */
    //create a variable with a boolean value. if false then go through the loop again
    console.log(arrToSort);
    //for (length = arrToSort.length; length > 1; length--) {

    console.log(boolean);
    if (boolean = false) {
      arranger()
      console.log(arrToSort);
    }

  }
  return (
    <>
      <h1>Array sorter</h1>
      <input type="text" onChange={searchHandler} onKeyDown={(e) => { if (e.key === "Enter") arraySorter() }} />
      <p>Sorted array</p>
    </>
  )
}

export default App
