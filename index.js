class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }
  add(item) {
    // this will add new item in items array     
    this.items.push(item)
    // this will sort the items array in ascending order
    this.items.sort((a, b) => a - b)
    // this will update the length of array
    this.length = this.items.length

  }
  get(pos) {
    
    // it will return the element at index pos from items array and if index if greater the lenght of array it will throw error
    if (pos < this.items.length)
      return this.items[parseInt(pos)]
    else {
      throw new Error('OutOfBounds')
    }

  }
  max() {
  
    // this will return the max element as items array is sorted it will be at the end of items array
    if (this.items.length > 0)
      return this.items[this.items.length - 1]
    else
      throw new Error('EmptySortedList')

  }
  min() {
     // this will return the min element as items array is sorted it will be at the beginning of items array
    if (this.items.length > 0)
      return this.items[0]
    else
      throw new Error('EmptySortedList')

  }
  avg() {
     
    // it will calculate the average of all the numbers in items
    if (this.items.length > 0)
      return this.sum() / this.items.length
    else
      throw new Error('EmptySortedList')

  }

  sum() {
    // it will calculate the sum of all the numbers in array
    if (this.items.length > 0)
      return this.items.reduce((acc, item) => acc = acc + item, 0)
    else
      return 0
  }

};

module.exports = SortedList;
