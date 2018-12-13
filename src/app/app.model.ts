export class AppModel {
    
    constructor (
        public title?: string, //?: nem kötelező megadni azt a változót (akkor undefinedra inicializálódnak)
        public checked?: boolean,
        public category?: Category,
        public text?: string) {
        
    }

    
}

export enum Category {
    BILLING ='BILLING', 
    HOUSE = 'HOUSE', 
    SHOPPING = 'SHOPPING', 
    TRAVEL = 'TRAVEL'
}