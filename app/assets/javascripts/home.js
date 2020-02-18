 $(function() { 
       $(".dial").knob({
       'change': function(v) { 
       			var red = $('#red').val();
       			var green = $('#green').val();
       			var blue = $('#blue').val();       	
       			$('.square').css('background-color', "rgb("+ red + "," + green + "," + blue + ")");
       			$.ajax({
       				beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
       				type: "post",
       				url: "/colors",
       				data: {color:{red: red, green: green, blue: blue}},
       				dataType: "script"
       			});		
       		}

       });
 });

