class Slot {
    x;
    y;
    nummer;

    constructor(x_, y_, nummer){
        this.x = x_;
        this.yy = y_;
        nummer = random(0-9);


    }
    
    show(){
        fill(0, 255, 0);
        Rect(this.x, this.y, 50, 50);
    }


};