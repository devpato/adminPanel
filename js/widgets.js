var positions = JSON.parse(localStorage.positions || "{}");
$(function () {
var d = $("[id=draggable]").attr("id", function (i) {
    return "draggable_" + i
})
$.each(positions, function (id, pos) {
    $("#" + id).css(pos)
})
var highestObject = 500;
d.draggable({obstacle: "#draggable1",
    preventCollision: true,
    containment: "#containment-wrapper",
    scroll: false,
    start: function() {
        highestObject++
        $(this).css('z-index', highestObject)
    },
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
        //obstacle: ".obstacle", preventCollision: true
    }
});
});
