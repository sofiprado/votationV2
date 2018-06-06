
$('.icon').on('click', function(){
console.log($(this).attr('data-id'))
$.ajax({
  method: 'PUT', 
  url: "http://localhost:3000/home",
  data: {
   id: $(this).attr('data-id')
  }
})
})

$('#add').on('click', function(){
  //console.log($(this).attr('data-id'))
  //console.log($('.enterData').val())
  //console.log($('.enterImg').val())
  $.ajax({
    method: 'POST', 
    url: "http://localhost:3000/agregar",
    data: {
     nombre: $('.enterData').val(),
     imagen: $('.enterImg').val()  
    }
  })   
  $('.enterData').val('')
  $('.enterImg').val('')
})



