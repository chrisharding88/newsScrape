$.getJSON("/articles", function (data) {
    // Displays every article
    for (var i = 0; i < data.length; i++) {
        $("#articles").append(`<p data-id=${data[i]._id}>${data[i].title}<br/>${data[i].link}</p>`)
    }
});

$(document).click("p", function(){
// Empty the notes from the note section
   $("#notes").empty()
// Save the id from the p tag
    var articleId = $(this).attr("data-id");

    $.ajax({
        method: "GET",
        url: `/articles/${articleId}`
    })
    .then(function(data){

    $("notes").append(`<h2>${data.title}</h2>`);
    $("notes").append(`<input id='titleinput' name='title'>`);
    $("notes").append(`<textarea id='bodyinput' name='body'></textarea>`);
    $("notes").append(`<button data-id=${data._id} id='notesave'>Save Note</button>`);

    if (data.note){
        // Place the title of the note in the title input
        $("#titleinput").val(data.note.title);
        // Place the body of the note in the body textarea
        $("#bodyinput").val(data.note.body)
    }
  });

});

$(document).click("#notesave", function(){
$.ajax({
    method: "POST",
    url: `/articles/${articleId}`,
    data:{
        title:$('#titleinput').val(),
        body:$('#bodyinput').val()

    }
  })
  .then(function(data){
    // Log the response
    console.log(data);
    // Empty the notes
    $("#notes").empty();
  })

  //Clears the values in the note entry
  $('#titleinput').val(""),
  $('#bodyinput').val("")

});