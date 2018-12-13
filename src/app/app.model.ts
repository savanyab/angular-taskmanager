export class AppModel {
    
    constructor (
        public title?: string, //?: nem kötelező megadni azt a változót (akkor undefinedra inicializálódnak)
        public checked?: boolean,
        public category?: string,
        public text?: string
    ) {

    }
}