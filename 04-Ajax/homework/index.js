$('#boton').one('click',function() {
    $.get('http://localhost:5000/amigos', function (dato){
        dato.forEach(element =>{
            $(`<li id= '${element.id}'> ${element.name} </li>`).appendTo('#lista')
        }); 
        
    })
    
});


$('#search').click(function(){
   let input = document.querySelector('#input')
   if(input.value){
    $.get(`http://localhost:5000/amigos/${input.value}`, function (dato){
       $('#amigo').text(`  El nombre localizado es: ${dato.name}`)
    })
   }
    if(!input.value){
       $('#amigo').text(' No ingresaste ningun valor')
   }
   if (input.value > 6 || input.value < 1){
    $('#amigo').text('  No se encuentra ningun nombre con ese ID')
   }
   
})


$('#delete').click(function(){
    let valor = document.querySelector('#inputDelete')
    if(valor.value){
        $(`#${valor.value}`).remove()
        $.get(`http://localhost:5000/amigos/${valor.value}`, function (dato){
            $('#success').text(`El nombre ELIMINADO fue: ${dato.name}`)
    })
    }
    if(!valor.value){
        $('#success').text('No ingresaste ningun valor')
    }
    if(valor.value > 6 || valor.value < 1) {
        $('#success').text('  No se encuentra ningun nombre con ese ID')
    }
    





})