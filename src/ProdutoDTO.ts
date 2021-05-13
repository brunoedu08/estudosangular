export class ProdutoDTO{
	id:number;
	nome:string;
	valor:number;

	constructor(obj: Object = {}) {
        Object.assign(this, obj);
    }
}