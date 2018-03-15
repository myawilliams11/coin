var coin = { 
    state: 0,
    flip: function (){
        Math.round(math.random()*2);
       console.log(this.state); 

//in the above function, you'll want to generate either a *rounded* 0 or a 1 *randomly*.
    },
    toString: function () {
        if (coin === 0){

            document.getElementById("heads.png").src;
        }
        else {
            document.getElementById("tails.png").src;
        }
    },
    toHTML: function() {
        var img = document.createElement("img");
        // set the properties of the image element to show either heads or tails
        return img;
    }

//    for (i = 0; i < 20 ; i++) {}
//     // add for loop to flip 20x
};

for (i = 0; i < 20 ; i++) {}
// add for loop to flip 20x