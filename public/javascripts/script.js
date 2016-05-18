console.log("it works!");

$(function() {

  var newComment = {};

  // GET COMMENTS
  function getComments() {
    var comments="";
    $.ajax({
        url: 'http://localhost:3000/posts',
        success: function(data) {
          // console.log(data);
          comments = data;
          $.each(comments, function(index, comment) {
            $('#comments').append("<li>" + comment.commentText + "</em></li>");
          });
        }
    });
  }

  getComments();

  // GRAB COMMENT DATA
  $('#new-comment').submit(function(event) {
    event.preventDefault();

    var comment = $(this).find('input[name="commentText"]').val();

    var pet = $(this).find('select[name="pet"]').val();

    var newComment = {
      "pet": pet,
      "commentText": comment
    };

    addComment(newComment);
    });

  // SAVE COMMENT DATA
  function createNewComment(newComment) {
    $.ajax({
      url: 'http://localhost:3000/posts',
      type: 'POST',
      dataType: 'json',
      data: newComment,
      success: function(data){
        console.log(data);
        addComment(data);
      }
    });
  }

  // ADD COMMENT TO VIEW
  function addComment(comment) {
  $('#comments').append("<li>" + comment.pet + " - <em>" + comment.commentText + "</em> </li>");
  }

});



