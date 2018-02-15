(function () {
  'use strict';
}());

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
  initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $('.project a').click(addProjectDetails);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
  // Prevents following the link
  e.preventDefault();

  // Get the div ID, e.g., "project3"
  var projectID = $(this).closest('.project').attr('id');

  // Get rid of 'project' from the front of the id 'project3'
  var idNumber = projectID.substr('project'.length);

  // Create URL
  var url = '/project/' + idNumber;

  // Log URL to verify
  console.log('/project/' + idNumber);

  // GET request
  $.get(url, addProject);
}

function addProject(result) {
  console.log(result);
  var projectHTML = '<a href="#" class="thumbnail">' +
    '<img src="' + result.image + '" class="detailsImage">' +
    '<p>' + result.title + '</p>' +
    '<p><small>' + result.date + '</small></p></a>' + result.summary;

  var element = '#project' + result.id + ' .thumbnail .details';

  $(element).html(projectHTML);
}
