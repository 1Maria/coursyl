// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .


function disableButton() {
  var button = document.getElementById("update_button");
  setTimeout(function() {button.disabled = true;}, 1);
}


function hideRow() {
  if (document.getElementById("show_hide_row") != "null") {
    var row = document.getElementById("show_hide_row");
    var last = row.lastElementChild;
    last.style.display = 'none';
  }
}

function addRow() {
  if (document.getElementById("show_hide_row") != "null") {
    var row = document.getElementById("show_hide_row");
    var last = row.lastElementChild;
    last.style.display = 'block';
  }
}



//= When a Delete button is clicked, hide the row to which it belongs, but mark the hidden _destroy field in that row as truthy.



//= Back on the course detail page, you'll notice that clicking on the various nav buttons in the blue box will cause the page to snap to that section. Implement smooth scrolling instead.
