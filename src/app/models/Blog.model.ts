export class Blog {
    constructor(
        public id:number,
        public titre:string,
        public article:string,
        public aime:number,
        public aimepas:number,
        public created_at: Date
    ){}
}