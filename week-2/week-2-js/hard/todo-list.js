/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todolist = []
  }
  add(todo){
    this.todolist.push(todo)
  }
  remove(index){
    if(index > this.todolist.length){

    }else{
    this.todolist.splice(index,1)
  }}
  update(index,updatedTodo){
    this.todolist[index] = updatedTodo
  }
  get(indexOfTodo){
    return this.todolist[indexOfTodo]
  }
  getAll(){
    return this.todolist
  }
  clear(){
    this.todolist = []
  }
}


const todolist = new Todo();
todolist.add("nifjs")
todolist.add("faisfoif oidjfo;jfd")
todolist.add("hdfja;f;lakdjf")

todolist.remove(1)
todolist.getAll()  
module.exports = Todo;
