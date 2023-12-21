import { useState } from "react"
let boolean = false;
function App() {
  const [search, setSearch] = useState("");
  const [arraySorted, setArraySorted] = useState();
  const searchHandler = (e) => {
    setSearch(e.target.value);
  }
  //take first two values and compare them if a is bigger than b then b becomes a and a becomes b.
  //then move to the next pair b,c and do the same until you reach the end of the array and start again
  //create a variable with a boolean value. if false then go through the loop again
  const arranger = () => {
    boolean = true;
    for (a = 0, b = 1; b < arrLength; a++, b++) {
      if (arrToSort[a] > arrToSort[b]) {
        [arrToSort[a], arrToSort[b]] = [arrToSort[b], arrToSort[a]];
        boolean = false;
      }
    }
    sortedArray.unshift(arrToSort[b]);
  }
  const arrToSort = [...search];
  let sortedArray = [];
  let arrLength = arrToSort.length;
  const arraySorter = () => {
    let a, b, rest;
    if (boolean = false) {
      arranger()
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