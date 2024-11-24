export class Model{
    title;
    items;

    constructor(){
        this.title = "Todo App";
        this.items = [
            new TodoItem("Uyku",false),
            new TodoItem("Namaz",false),
            new TodoItem("Açlık",false),
            new TodoItem("Spor",false),
            new TodoItem("Kitap",false),
           
        ]
    }
}

export class TodoItem{
    description;
    status;

    constructor(description : string, status: boolean){
        this.description = description;
        this.status = status;
    }
}