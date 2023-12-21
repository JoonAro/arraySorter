import { useState, useRef } from "react"
function App() {
  const [search, setSearch] = useState("");
  const [arraySorted, setArraySorted] = useState();
  const [boolean, setBoolean] = useState(false);
  const [arrToSort, setArrToSort] = useState([...search]);
  const arrLength = useRef();
  let a, b;
  const searchHandler = (e) => {
    setSearch(e.target.value);
  }
  //take first two values and compare them if a is bigger than b then b becomes a and a becomes b.
  //then move to the next pair b,c and do the same until you reach the end of the array and start again
  //create a variable with a boolean value. if false then go through the loop again
  const arraySorter = () => {
    arrLength.current = arrToSort.length;
    if (boolean = false) {
      arranger()
    }
  }
  const arranger = () => {
    setBoolean(true);
    for (a = 0, b = 1; b < arrLength; a++, b++) {
      console.log(arrToSort);
      if (arrToSort[a] > arrToSort[b]) {
        [arrToSort[a], arrToSort[b]] = [arrToSort[b], arrToSort[a]];
        setBoolean(false);
      }
    }
    setArraySorted(arraySorted.unshift(arrToSort[b]));
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