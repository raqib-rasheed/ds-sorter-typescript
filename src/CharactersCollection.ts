export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }
  compare(leftInx: number, rightInx: number): boolean {
    return this.data[leftInx].toLowerCase() > this.data[rightInx].toLowerCase();
  }

  swap(leftInx: number, rightInx: number): void {
    const characters = this.data.split("");

    const leftHand = characters[leftInx];
    characters[leftInx] = characters[rightInx];
    characters[rightInx] = leftHand;

    this.data = characters.join("");
  }
}
