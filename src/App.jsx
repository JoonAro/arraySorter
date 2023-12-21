import { useState } from "react"
function App() {
  const [search, setSearch] = useState("");
  const [arrayBefore, setArrayBefore] = useState();
  const [result, setResult] = useState();
  const searchHandler = (e) => {
    setSearch(e.target.value);
  }
  const arraySorter = () => {
    setArrayBefore(search);
    let a, b;
    let arrToSort = search.split(",");
    let arrLength = arrToSort.length;
    if (arrLength === 1 || arrToSort === "") {
      return setResult("Input is not an array");
    }
    let stringArray = [];
    let numberArray = [];
    if (arrLength)
      arrToSort.map((whatever) => {
        if (isFinite(whatever) === true) {
          return numberArray.push(Number(whatever))
        }
        else {
          return stringArray.push(whatever)
        }
      });
    arrToSort = numberArray.concat(stringArray);
    let numberOfSwitches;
    //if number of switches is larger than zero continue the loop
    for (; numberOfSwitches !== 0;) {
      numberOfSwitches = 0;
      for (a = 0, b = 1; b < arrLength; a++, b++) {
        if (arrToSort[a] > arrToSort[b]) {
          [arrToSort[a], arrToSort[b]] = [arrToSort[b], arrToSort[a]];
          numberOfSwitches++
        }
      }
    }
    let result2 = "";
    let times = 0;
    const resultToPage = () => arrToSort.forEach((element) => {
      console.log(element);
      times++
      element.toString();
      if (times !== arrToSort.length) {
        element += ", ";
      }
      result2 += element;
    });
    resultToPage();
    setResult(result2);
  }
  return (
    <>
      <h1>Array sorter</h1>
      <p>Insert a list of values divided by commas in any order. Array sorter will use bubblesort to sort everything. If there are numbers and strings mixed together it puts the numbers in the beginning of the sorted array and strings after that</p>
      <input type="text" onChange={searchHandler} onKeyDown={(e) => { if (e.key === "Enter") arraySorter() }} />
      <p>Array: {arrayBefore}</p>
      <p>Sorted array: {result}</p>
    </>
  )
}
export default App
