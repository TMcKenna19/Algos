// Singly Linked List Flatten Children
// Given a Singly Linked List that may contain nodes with children, return a flattened version of the list
// Ex: given 1 -> 2 -> 3    ->  4 -> 5
//                |             |
//                1 -> 2 -> 3   2 -> 3
// Return a list like so: 1 -> 2 -> 1 -> 2 -> 3 -> 3 -> 4 -> 2 -> 3 -> 5

// Singly Linked List Unflatten Children
// Given a Singly Linked List that may have flattened children, unflatten it back to its original state

flatten(){
    let runner = this.head;
    while(runner){
        let next = runner.next;
        if(runner.child){
            runner.next = runner.child.head;
            let child_runner = runner.child.head;
            while(child_runner.next){
                
                child_runner = child_runner.next;
            }
            child_runner.next = next;

        }
        runner = runner.next;
    }
}
