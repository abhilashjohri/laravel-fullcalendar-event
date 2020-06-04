
(function () {    
    'use strict';
    // ------------------------------------------------------- //
    // Calendar
    // ------------------------------------------------------ //
	jQuery(function() {
		// page is ready
	var calendar=	jQuery('#calendar').fullCalendar({

			themeSystem: 'bootstrap4',
			// emphasizes business hours
			businessHours: false,
			defaultView: 'month',
			// event dragging & resizing
			editable: true,
			// header
			header: {
				left: 'title',
				center: 'month,agendaWeek,agendaDay',
				right: 'today prev,next'
			},
			 events:  {
    url: APP_URL+'/events/',
    type: 'Get',
    data: {
      param: '',
    },
    error: function() {
      alert('there was an error while fetching events!');
    },
    color: 'yellow',   // a non-ajax option
    textColor: 'black' // a non-ajax option
  },


			// events: [
			// 	{
			// 		title: 'Barber',
			// 		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
			// 		start: '2019-07-07',
			// 		end: '2019-07-07',
			// 		className: 'fc-bg-default',
			// 		icon : "circle"
			// 	},
			// 	{
			// 		title: 'Flight Paris',
			// 		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
			// 		start: '2019-08-08T14:00:00',
			// 		end: '2019-08-08T20:00:00',
			// 		className: 'fc-bg-deepskyblue',
			// 		icon : "cog",
			// 		allDay: false
			// 	},
			// 	{
			// 		title: 'Team Meeting',
			// 		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
			// 		start: '2019-07-10T13:00:00',
			// 		end: '2019-07-10T16:00:00',
			// 		className: 'fc-bg-pinkred',
			// 		icon : "group",
			// 		allDay: false
			// 	},
			// 	{
			// 		title: 'Meeting',
			// 		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
			// 		start: '2019-08-12',
			// 		className: 'fc-bg-lightgreen',
			// 		icon : "suitcase"
			// 	},
			// 	{
			// 		title: 'Conference',
			// 		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
			// 		start: '2019-08-13',
			// 		end: '2019-08-15',
			// 		className: 'fc-bg-blue',
			// 		icon : "calendar"
			// 	},
			// 	{
			// 		title: 'Baby Shower',
			// 		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
			// 		start: '2019-08-13',
			// 		end: '2019-08-14',
			// 		className: 'fc-bg-default',
			// 		icon : "child"
			// 	},
			// 	{
			// 		title: 'Birthday',
			// 		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
			// 		start: '2019-09-13',
			// 		end: '2019-09-14',
			// 		className: 'fc-bg-default',
			// 		icon : "birthday-cake"
			// 	},
			// 	{
			// 		title: 'Restaurant',
			// 		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
			// 		start: '2019-10-15T09:30:00',
			// 		end: '2019-10-15T11:45:00',
			// 		className: 'fc-bg-default',
			// 		icon : "glass",
			// 		allDay: false
			// 	},
			// 	{
			// 		title: 'Dinner',
			// 		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
			// 		start: '2019-11-15T20:00:00',
			// 		end: '2019-11-15T22:30:00',
			// 		className: 'fc-bg-default',
			// 		icon : "cutlery",
			// 		allDay: false
			// 	},
			// 	{
			// 		title: 'Shooting',
			// 		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
			// 		start: '2019-08-25',
			// 		end: '2019-08-25',
			// 		className: 'fc-bg-blue',
			// 		icon : "camera"
			// 	},
			// 	{
			// 		title: 'Go Space :)',
			// 		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
			// 		start: '2019-12-27',
			// 		end: '2019-12-27',
			// 		className: 'fc-bg-default',
			// 		icon : "rocket"
			// 	},
			// 	{
			// 		title: 'Dentist',
			// 		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
			// 		start: '2019-12-29T11:30:00',
			// 		end: '2019-12-29T012:30:00',
			// 		className: 'fc-bg-blue',
			// 		icon : "medkit",
			// 		allDay: false
			// 	}
			// ],
			eventRender: function(event, element) {
				if(event.icon){
					element.find(".fc-title").prepend("<i class='fa fa-"+event.icon+"'></i>");
				}
			  },
			dayClick: function() {
				 $('#add-event')[0].reset();
				jQuery('#modal-view-event-add').modal();
			},
			eventClick: function(event, jsEvent, view) {
			        jQuery('.event-icon').html("<i class='fa fa-"+event.icon+"'></i>");
					jQuery('.event-title').html(event.title);
					jQuery('.event-body').html(event.description);
					jQuery('.event-start').html(event.start_date);
					jQuery('.event-end').html(event.end_date);
					jQuery('.event-start-time').html(event.start_time);
					jQuery('.event-end_time').html(event.end_time);
					jQuery('.event-assignto').html(event.assign_to);

                    jQuery('#cru_id').val(event.id); 

                    jQuery('.inp_title').val(event.title);
					jQuery('.inp_body').val(event.description);
					jQuery('.inp_start').val(event.start_date);
					jQuery('.inp_end').val(event.end_date);
					jQuery('.inp_start-time').val(event.start_time_val);
					jQuery('.inp_end-time').val(event.end_time_val);
					jQuery('.inp_assignto').val(event.assign_to);
    
					jQuery('.eventUrl').attr('href',event.url);
					jQuery('#modal-view-event').modal();
			},
		})
	});
  
})(jQuery);

jQuery(document).ready(function(){
	  $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
            }
        });
    
  jQuery('.datetimepicker').datepicker({
      timepicker: true,
      language: 'en',
      range: true,
      multipleDates: true,
		  multipleDatesSeparator: " - "
    });
   $('#cru_submit').on('click', function(event){
     //   alert();

         var formid = $(this).closest("form").attr('id');
        var url =APP_URL+"/event/manage"
    event.preventDefault();
      if(validated_form(formid)){
       
		   $.ajax({
		      url:url,
		      method:"POST",
		      data: new FormData($('#'+formid)[0]),
		      contentType: false,
		      cache: false,
		      processData: false,
		      dataType:"json",
		      success:function(data)
		      {
		       var html = '';
		       if(data.errors)
		       {
		        html = '<div class="alert alert-danger">';
		        for(var count = 0; count < data.errors.length; count++)
		        {
		         html += '<p>' + data.errors[count] + '</p>';
		       }
		       html += '</div>';
		     }
		     if(data.success) 
		     {
		      html = '<div class="alert alert-success">' + data.success + '</div>';
		     // $('#aformj')[0].reset();
		    $('#calendar').fullCalendar('refetchEvents');
    setTimeout(function(){
     
   
      	jQuery('#modal-view-event-add').modal('hide');

      	jQuery('#modal-view-event').modal('hide');
      	$('#form_result').html('');
     }, 2200);
		   
		  }
		   $('#form_result').html(html);
		}
	});
  $('.modal-content').animate({scrollTop : 0},700);
}
 });
$(document).on('click', '.Delevent', function(){

    if(confirm("are you sure ")){
    	id =$("#cru_id").val();
    	 $.ajax({
     url:APP_URL+"/event/delete/"+id,
     beforeSend:function(){
      $('#ok_button').text('Deleting...');
    },
    success:function(data)
    {
    	 $('#calendar').fullCalendar('refetchEvents');
    
      
      	jQuery('#modal-view-event-add').modal('hide');

      	jQuery('#modal-view-event').modal('hide');
   
    }
  })

    }
  });
$(document).on('click', '.Editevent', function(){
   
 		jQuery('#modal-view-event-add').modal();
  });


  jQuery("#add-event1").submit(function(){
      alert("Submitted");
      var values = {};
      $.each($('#add-event').serializeArray(), function(i, field) {
          values[field.name] = field.value;
      });
      console.log(
        values
      );
  });
});
