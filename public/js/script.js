// let totalHeight = $(".entries-container").height();
// let titleHeight = $(".title").height();
// $(".content-input").height(totalHeight - titleHeight);

let windowHeight = window.innerHeight;
let titleHeight = $(".title").outerHeight();
$(".content").height(windowHeight - titleHeight);

let titleBoxHeight = $(".title-input").outerHeight();
let contentHeight = $(".content").outerHeight();
let settingHeight = contentHeight - 60 - titleBoxHeight;
$(".content-input").outerHeight(settingHeight);

let divWidth = $(".entries-container").width();

$(".title-input").outerWidth(divWidth);
$(".content-input").outerWidth(divWidth);