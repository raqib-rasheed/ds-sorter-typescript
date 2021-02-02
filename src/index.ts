import { Sorter } from "./Sorter";
// import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./charactersCollection";

const charactersCollection = new CharactersCollection("RanDomStRinGToSorT");

const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
