Math.Vector = function (x,y) {
    this.x = x;
    this.y = y;
}
Math.Vector.prototype = {
    clone: function () {
        return new Math.Vector(this.x, this.y);
    },
    negate: function () {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    },
    neg: function () {
        return this.clone().negate();
    },
    addeq: function (v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    },
    subeq: function (v) {
        return this.addeq(v.neg());
    },
    add: function (v) {
        return this.clone().addeq(v);
    },
    sub: function (v) {
        return this.clone().subeq(v);
    },
    multeq: function (c) {
        this.x *= c;
        this.y *= c;
        return this;
    },
    diveq: function (c) {
        this.x /= c;
        this.y /= c;
        return this;
    },
    mult: function (c) {
        return this.clone().multeq(c);
    },
    div: function (c) {
        return this.clone().diveq(c);
    },

    dot: function (v) {
        return this.x * v.x + this.y * v.y;
    },
    length: function () {
        return Math.sqrt(this.dot(this));
    },
    normal: function () {
        return this.clone().diveq(this.length());
    }
};

function evade(evt) {
    var $this = $(this),
        corner = $this.offset(),
        center = {x: corner.left + $this.outerWidth() / 2, y: corner.top + $this.outerHeight() / 2},
        dist = new Math.Vector(center.x - evt.pageX, center.y - evt.pageY),
        closest = $this.outerWidth() / 2;
    
    // proximity test
    if (dist.length() >= closest) {
        return;
    }

    // calculate new position
    var delta = dist.normal().multeq(closest).sub(dist),
        newCorner = {left: corner.left + delta.x, top: corner.top + delta.y};

    // bounds check
    var padding = parseInt($this.css('padding-left'));
    if (newCorner.left < -padding) {
        newCorner.left = -padding;
    } else if (newCorner.left + $this.outerWidth() - padding > $(document).width()) {
        newCorner.left = $(document).width() - $this.outerWidth() + padding;
    }
    if (newCorner.top < -padding) {
        newCorner.top = -padding;
    } else if (newCorner.top + $this.outerHeight() - padding > $(document).height()) {
        newCorner.top = $(document).height() - $this.outerHeight() + padding;
    }

    // move bumper
    $this.offset(newCorner);
}

var count = 0;

function beginEvade() {
    $(this).bind('mousemove', evade);
    count++;

    // Random number generators
    var red = Math.random() * 255;
    var green = Math.random() * 255;
    var blue = Math.random() * 255;
    var randSize = Math.random()*80;
    var randPosX = Math.random()*document.documentElement.clientHeight;
    var randPosY = Math.random()*document.documentElement.clientWidth;

    if(count % 2 == 0){
        //Create a new div
        var webdomain = document.createElement('div');

        //Set the class to circle and id to link#
        webdomain.setAttribute('class', 'circle');
        webdomain.setAttribute('id', `link${count}`);

        //Style the div
        webdomain.style.color = `rgb(${red}, ${green}, ${blue})`;
        webdomain.style.position = 'absolute';
        webdomain.style.fontSize = `${randSize}px`;
        webdomain.innerText = 'www.Ege.com';

        //Add the div to the webpage via the wrapper div
        document.getElementById('wrapper').append(webdomain);

        //Randomly place the element on the page
        document.getElementById(`link${count}`).style.left = `${randPosX}px`;
        document.getElementById(`link${count}`).style.top = `${randPosY}px`;
    }

}

function endEvade() {
   $(this).unbind('mousemove', evade);
}

$(function () {
    $('.circle').wrap('<span class="bumper" />')
    $('.bumper').bind('mouseover', beginEvade);
    $('.bumper').bind('mouseout', endEvade);
});
