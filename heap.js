remove(){
    //first- swap the min value (index 1) with the value (at the last index of the heap)
    [this.heap[this.heap.length-1], this.heap[1]]=[this.heap[1],this.heap[this.heap.length-1]]
    //pop out the last value
    this.heap.pop();

    //rearrange the heap
    let current = 1;
    let child = current*2;
    while(this.heap[current]>this.heap[child] || this.heap[current]>this.heap[child+1]){
            if(this.heap[child] < this.heap[child+1]) {
                    [this.heap[current], this.heap[child]]=[this.heap[child],this.heap[current]]
                    current = child
            }
            else {
                    [this.heap[current], this.heap[child+1]]=[this.heap[child+1],this.heap[current]]
                    current = child+1
            }
            child = current*2
    }
    return this;
}