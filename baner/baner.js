//var duration = Math.floor((Math.random() * 10) + 1);
$(document).ready(function () {
	var str = '';
		$('.preload').html(function(){
			for(i=1; i<=117; i++){
				str+= '<div class="pic'+i+'"></div>';
				$('.preload').html(str);
				console.log(1)
			}
		})
});
function start(pl_class, numb) {
    var pl = $(pl_class);
    if(numb){
        var getDuration = numb;
    } else {
        var getDuration = 3;
    }
    for (var i = 0; i < pl.length; ++i) {
        if (i > 6) {
            var setDuration = i / 40;
            getDuration += setDuration;
            $(pl_class).eq(i).css('animation-delay', '0.' + i + 's');
            $(pl_class).eq(i).css('animation-duration', getDuration + 's');
            (function (i) {
                setTimeout(function () {
                    $(pl_class).eq(i).css('opacity', '0.5');
                }, 14000 + i * 100);
            })(i);
            
            (function (i) {
                setTimeout(function () {
                    $(pl_class).eq(i).css('opacity', '1');
                }, 15000 + i * 100);
            })(i);
            
        } else{
            var setDuration = i / 9;
            getDuration += setDuration;
            $(pl_class).eq(i).css('animation-delay', '0.' + i + 's');
            $(pl_class).eq(i).css('animation-duration', getDuration + 's');
            (function (i) {
                setTimeout(function () {
                    $(pl_class).eq(i).css('opacity', '0.5');
                }, 14000 + i * 100);
            })(i);
            
            (function (i) {
                setTimeout(function () {
                    $(pl_class).eq(i).css('opacity', '1');
                }, 15000 + i*100);
            })(i);
            
        }
    }
}

setTimeout(function () {
    $('.center_puzzle').toggleClass('active');
    
    start('.pl_top');
    start('.pl_bottom');
    start('.pl_tl', 4.4);
    start('.pl_tr', 4.5);
    start('.pl_bl', 4.6);
    start('.pl_br', 4.7);
    start('.pl_left');
    start('.pl_right');
    
}, 2000);


/*for svg*/
var svg_duration = 3000;
var svg_color = '#e15a30';
var svg_delay = 10000;

var svg1 = {
    "svg1": {
        "strokepath": [
            {
                "path": "M846.669,120.413l-89,57l-20-94.5l-103,14l-27,16.5l-62-14.5l-60.5-38  l-45-60l-33.5,59.5l-47-34l-51.5,15.5l-42-8l-46,87l-67-37l-153-55",
                "duration": svg_duration
            }
        ],
        "dimensions": {
            "width": 847,
            "height": 179
        }
    }
};
$(document).ready(function () {
    $('#svg1').lazylinepainter(
        {
            "svgData": svg1,
            delay: svg_delay,
            reverse: true,
            strokeColor: svg_color,
            onComplete: function () {
                var svg1sd = $('#svg1 path').css('stroke-dasharray');
                $('#svg1 path').css('stroke-dasharray', '0, ' + svg1sd);
            }
        }).lazylinepainter('paint');

});
/*-----------------------------------------------------------------*/
var svg2 = {
    "svg2": {
        "strokepath": [
            {
                "path": "M526.456,203.705l-106-3.5l-32-41.5l-104-66l-76-2.5l-13-44.5  l-67.5,57.5l-41,8l-55.5-42l-31-69",
                "duration": svg_duration
            }
        ],
        "dimensions": {
            "width": 527,
            "height": 205
        }
    }
};
$(document).ready(function () {
    $('#svg2').lazylinepainter(
        {
            "svgData": svg2,
            delay: svg_delay,
            reverse: true,
            strokeColor: svg_color,
            onComplete: function () {
                var svg2sd = $('#svg2 path').css('stroke-dasharray');
                $('#svg2 path').css('stroke-dasharray', '0, ' + svg2sd);
            }
        }).lazylinepainter('paint');
});
/*-----------------------------------------------------------------*/
var svg3 = {
    "svg3": {
        "strokepath": [
            {
                "path": "M0.498,183.197l5-55l27-19l80-24l-33-40l85-17l-12-28",
                "duration": svg_duration
            }
        ],
        "dimensions": {
            "width": 166,
            "height": 184
        }
    }
};
$(document).ready(function () {
    $('#svg3').lazylinepainter(
        {
            "svgData": svg3,
            delay: svg_delay,
            reverse: true,
            strokeColor: svg_color,
            onComplete: function () {
                var svg3sd = $('#svg3 path').css('stroke-dasharray');
                $('#svg3 path').css('stroke-dasharray', '0, ' + svg3sd);
            }
        }).lazylinepainter('paint');
});
/*-----------------------------------------------------------------*/
var svg4 = {
    "svg4": {
        "strokepath": [
            {
                "path": "M3.503,236.885l-3-50.5l9-43.5l20-20l51.5-6.5l85,2.5l11.5-34.5  l66-15.5l54-34.5l41-34",
                "duration": svg_duration
            }
        ],
        "dimensions": {
            "width": 339,
            "height": 237
        }
    }
};
$(document).ready(function () {
    $('#svg4').lazylinepainter(
        {
            "svgData": svg4,
            delay: svg_delay,
            reverse: true,
            strokeColor: svg_color,
            onComplete: function () {
                var svg4sd = $('#svg4 path').css('stroke-dasharray');
                $('#svg4 path').css('stroke-dasharray', '0, ' + svg4sd);
            }
        }).lazylinepainter('paint');
});
/*-----------------------------------------------------------------*/
var svg5 = {
    "svg5": {
        "strokepath": [
            {
                "path": "M838.283,45.569l-46,53l-51,107l-41-48l-154,21l-25-45l-91,20l11-118  l-71,21l-67-56l-127.72,47l-72.28-18l-18,62l-50,33l-35,24",
                "duration": svg_duration
            }
        ],
        "dimensions": {
            "width": 839,
            "height": 207
        }
    }
};
$(document).ready(function () {
    $('#svg5').lazylinepainter(
        {
            "svgData": svg5,
            delay: svg_delay,
            strokeColor: svg_color,
			reverse: true,
            onComplete: function () {
				var svg5sd = $('#svg5 path').css('stroke-dasharray');
				 $('#svg5 path').css('stroke-dasharray', '0, ' + svg5sd);
            }
        }).lazylinepainter('paint');
});
/*-----------------------------------------------------------------*/
var svg6 = {
    "svg6": {
        "strokepath": [
            {
                "path": "M0.44,19.613l39,72.5l135,3l-32-93.5l61,53.5l8.5,2l2.5-4.5l125.5,37  l45.5,66l20.5-8l3-29l31,36.5l72.5-49l71-25l65.5,36h46l16,67l-16,19",
                "duration": svg_duration
            }
        ],
        "dimensions": {
            "width": 712,
            "height": 204
        }
    }
};
$(document).ready(function () {
    $('#svg6').lazylinepainter(
        {
            "svgData": svg6,
            delay: svg_delay,
            reverse: true,
            strokeColor: svg_color,
            onComplete: function () {
                var svg6sd = $('#svg6 path').css('stroke-dasharray');
                $('#svg6 path').css('stroke-dasharray', '0, ' + svg6sd);
            }
        }).lazylinepainter('paint');
});
/*-----------------------------------------------------------------*/
var svg7 = {
    "svg7": {
        "strokepath": [
            {
                "path": "M46.498,0.165l22,63l-63.5,36.5l-4.5,55",
                "duration": svg_duration
            }
        ],
        "dimensions": {
            "width": 70,
            "height": 155
        }
    }
};
$(document).ready(function () {
    $('#svg7').lazylinepainter(
        {
            "svgData": svg7,
            delay: svg_delay,
            reverse: true,
            strokeColor: svg_color,
            onComplete: function () {
                var svg7sd = $('#svg7 path').css('stroke-dasharray');
                $('#svg7 path').css('stroke-dasharray', '0, ' + svg7sd);
            }
        }).lazylinepainter('paint');
});
/*-----------------------------------------------------------------*/
var svg8 = {
    "svg8": {
        "strokepath": [
            {
                "path": "M690.39,0.203l-43.5,98l-54,4l-70.5-2.5l-13.5-7l-85.5-58.5  l-13.5,46.5l-55,18.5l-53-24.5l-14.5,11.5l-4,23.5l30.5,42l-62,26.5l-164-71l-87.5,109",
                "duration": svg_duration
            }
        ],
        "dimensions": {
            "width": 691,
            "height": 217
        }
    }
};
$(document).ready(function () {
    $('#svg8').lazylinepainter(
        {
            "svgData": svg8,
            delay: svg_delay,
            reverse: true,
            strokeColor: svg_color,
            onComplete: function () {
                var svg8sd = $('#svg8 path').css('stroke-dasharray');
                $('#svg8 path').css('stroke-dasharray', '0, ' + svg8sd);
            }
        }).lazylinepainter('paint');
});
/*end for svg*/

