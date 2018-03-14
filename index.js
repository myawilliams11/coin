var coin = { "0", "1" 
    state: 0, 1
    flip: function getFlip(i= 0; i >= 1; i ++) {
            return Math.random();
          }
    },
    toString: function() {
        if (coin === 0){
            document.getElementById("heads.png")
        }
        else {
            document.getElementById("tails.png")
        }
    },
    toHTML: function() {
        var img = document.createElement("img");
        // set the properties of the image element to show either heads or tails
        return img;
    }
};
