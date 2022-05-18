var $img = $("img");
var $vp = $("#viewport");

var viewporthWidth = $vp.width();
var viewporthHeight = $vp.height();
var imageWidth = $img.width();
var imageHeight = $img.height();
var padding = .1;

var tooTall = imageHeight > viewporthHeight;
var tooWide = imageWidth > viewporthWidth;

var aspectRatio = imageWidth / imageHeight;
if (tooWide && tooTall) {
    // Figure out if it's better to scale on height or width by 
    if ((imageWidth / viewporthWidth) > (imageHeight / viewporthHeight))
    //if((imageWidth - viewporthWidth) > (imageHeight - viewporthHeight))
    {
        adaptedWidth = (1.0 - padding) * viewporthWidth;
        adaptedHeight = adaptedWidth / aspectRatio;
    } else {
        adaptedHeight = (1.0 - padding) * viewporthHeight;
        adaptedWidth = adaptedHeight * aspectRatio;
    }
} else if (tooWide) {
    adaptedWidth = (1.0 - padding) * viewporthWidth;
    adaptedHeight = adaptedWidth / aspectRatio;
} else if (tooTall) {
    adaptedHeight = (1.0 - padding) * viewporthHeight;
    adaptedWidth = adaptedHeight * aspectRatio;
} else {
    adaptedWidth = imageWidth;
    adaptedHeight = imageHeight;
}

$img.width(adaptedWidth);
$img.height(adaptedHeight);