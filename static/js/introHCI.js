$(document).ready(function() {
    initializePage();
});

function projectClick(e){
  e.preventDefault();
  $(this).css("background-color", "#7fff00");
}

function initializePage() {
    $('#testjs').click(function(e) {
            $('.jumbotron h1').text("Javascript is connected");
            });
}
