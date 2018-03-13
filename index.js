var coin = {
    state: 0,
    flip: function() {
        // randomly set this.state to be either 0 or 1
    },
    toString: function() {
        // return “H” or “T” depending on whether this.state is 0 or 1
    },
    toHTML: function() {
        var img = document.createElement("img");
        // set the properties of the image element to show either heads or tails
        return img;
    }
};
