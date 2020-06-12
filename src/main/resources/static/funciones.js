function eliminar(id){
	swal({
		  title: "Estas seguro?",
		  text: "Una vez eliminado, No se podra recuperar la pregunta!",
		  icon: "Peligro",
		  buttons: true,
		  dangerMode: true,
		})
		.then((OK) => {
		  if (OK) {
			  $.ajax({
				  url:"/eliminar/"+id,
				  success: function(res) {
					  console.log(res);
				  },
			  });
		    swal("La pregunta seleccionada ha sido eliminada!", {
		      icon: "success",
		    }).then((ok)=>{
		    	if(ok){
		    		location.href="/listar";
		    	}
		    });
		  } else {
		    swal("La pregunta ha sido guardada!");
		  }
		});
}