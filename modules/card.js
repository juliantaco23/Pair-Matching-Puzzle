export default class Card{
    #id;
    #urlImage;
    #position;

    constructor(id, urlImage, position){
        this.#id = id,
        this.#urlImage = urlImage,
        this.#position = position
    }

    getUrlImage(){
        return this.#urlImage;
    }

    getId(){
        return this.#id;
    }

    getPosition(){
        return this.#position;
    }

    

}
