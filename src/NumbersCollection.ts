export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftInx: number, rightInx: number): boolean {
    return this.data[leftInx] > this.data[rightInx];
  }

  swap(leftInx: number, rightInx: number): void {
    const leftHand = this.data[leftInx];
    this.data[leftInx] = this.data[rightInx];
    this.data[rightInx] = leftHand;
  }
}
