var coin = { 
    state: 0,
    flip: function (){
        this.state = Math.round(Math.random());
        console.log(this.state); 

//in the above function, you'll want to generate either a *rounded* 0 or a 1 *randomly*.
    },
    toString: function () {
        if (this.state === 0){
            return "H"
        }
        else {
            return "T"
        }
    },

    toHTML: function() {
        var img = document.createElement("img");

        if (this.state === 0){
            img.src = "heads.png"
        }
        else {
            img.src = "tails.png"
        }

        // set the properties of the image element to show either heads or tails
        return img;
    }

//    for (i = 0; i < 20 ; i++) {}
//     // add for loop to flip 20x
};

for (let i = 0; i < 20 ; i++) {
    coin.flip()
    document.getElementById("result1").appendChild(coin.toHTML())

    let textNode= document.createTextNode(coin.toString())
    document.getElementById("result2").appendChild(textNode)

}
// add for loop to flip 20x