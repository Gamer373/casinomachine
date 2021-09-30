class Slot {
    x;
    y;
    getal;
    constructor(x, getal){
        this.x = x;
        this.getal = getal;

    }


    show(){
        fill(0, 255, 255);
        rect(this.x, 100, 300, 500);
        


        fill(0, 0, 0);
        textSize(400);
        text(this.getal, this.x + 50, 500);
    }


};