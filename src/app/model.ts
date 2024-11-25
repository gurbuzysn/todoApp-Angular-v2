export class Model{
    title;
    items;

    constructor(){
        this.title = "Todo App";
        this.items = [
            new TodoItem("Spor",false),
            new TodoItem("Kitap Oku",false),
            new TodoItem("Market Alışverişi",false),
            new TodoItem("Proje",false),
            new TodoItem("Sinema",false),
           
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