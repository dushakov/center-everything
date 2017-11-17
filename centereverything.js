$(document).ready(function (){
        centerContentVertically(); //on document ready
        centerContentHorizontally();
 });
$(window).resize(function(){
        centerContentVertically(); //on resize
        centerContentHorizontally();
});

function centerContentVertically() {
        $(".center-content-vertically").each(function() { //class can be anything you want it to be
              var contentHeight = $(this).height(); //gets height of the content you want to be centered
              var parentContainer = $(this).parent().height(); //gets that content's parent height
              var addMarginTop = (parentContainer - contentHeight) / 2; //quick maths, man's not hot (google this)

              if (parentContainer > contentHeight) $(this).css("margin-top", addMarginTop); //if parent container is taller, apply margin.
        });
}

function centerContentHorizontally() {
       $(".center-content-horizontally").each(function() { //class can be anything you want it to be
              var contentWidth = $(this).width(); //gets width of the content you want to be centered
              var parentContainer = $(this).parent().width(); //gets that content's parent width
              var addMarginLeft = (parentContainer - contentWidth) / 2; //quick maths, man's not hot (google this)

              if (parentContainer > contentWidth) $(this).css("margin-left", addMarginLeft); //if parent container is wider, apply margin.
       });
}
