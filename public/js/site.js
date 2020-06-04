$(document).ready(function () 
{

    // alpha only
    $('.alphaonly').bind('keyup blur',function(){ 
        var node = $(this);
        node.val(node.val().replace(/[^a-zA-Z ]/g,'') ); }
        );
  $('body').on('keypress', '.contact_no,.numerical,.numerical_value', function (e) 
    {

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#errmsg").html("Digits Only").show().fadeOut("slow");
            return false;
        }
    });

    //code for float value value in input feild
    $('body').on('keypress', '.qty,.float', function () {
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57 || hasDecimalPlace($(this).val(), 2))) {
            event.preventDefault();
        }
    });

    // code for input keypress 
 $('body').on('keypress', 'input', function (e) {
        if (this.value.length == 0 && e.which == 48) {
            return false;
        }
    });
 

 // form save -> check  client validation js by  abhilash johri

$('body').on('click', '.submitform', function (e) 
{
  e.preventDefault()
        //  getting form  id 
        var formid = $(this).closest("form").attr('id');
        $("#" + formid).validate({
            ignore: [],
              errorElement : 'label',
            errorLabelContainer: '.error',
             errorPlacement: function(error, element) {
            if (element.is(':checkbox')) {
                $(element).parent('div').addClass('checkbox-error');
            }
            else {
             

              var cls = element.parent().attr('class');
             console.log(element.parent().attr('class'))
               if( cls == 'input-group') {
               element.parent().before(error);
             }else {
               element.before(error);
             }
            }
         }
        });

             // form validation 
             if(!formid){
                alert('form id is requried');
            }
            if ($("#" + formid).valid()) { 
              return true;
          }else {
           return false;

       }
     $("body,.modal-body").animate({ scrollTop: 0 }, "slow");
   });  
});
// image prev
function image_prev(input,img_id) {
     
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
              $('#'+img_id).show();
            $('#'+img_id).attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
function randomPassword(filed_id,length) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
//    return pass;
       $("#"+filed_id).val(pass);
}
 function validated_form(formid) {
  
        $("#" + formid).validate({
            ignore: [],
              errorElement : 'label',
            errorLabelContainer: '.error',
             errorPlacement: function(error, element) {
            if (element.is(':checkbox')) {
                $(element).parent('div').parent('div').addClass('checkbox-error');
            }
            else {
             

              var cls = element.parent().attr('class');
             console.log(element.parent().attr('class'))
               if( cls == 'input-group') {
               element.parent().after(error);
             }else {
               element.after(error);
             }    
            }
         },
           unhighlight: function(element) {
            
            if ($(element).is(':checkbox') || $(element).is(':radio') ) {
               $(element).parent().parent('div').removeClass('checkbox-error');
            }
          }
         
        });

             // form validation 
             if(!formid){
                alert('form id is requried');
            }
            if ($("#" + formid).valid()) { 
              return true;
          }else {
           return false;

       }
}

 function validated_form2(formid) {
  
        $("#" + formid).validate({
            ignore: [],
            errorElement : 'label',
            errorLabelContainer: '.error',
             errorPlacement: function(error, element) {
            if (element.is(':checkbox') || element.is(':radio') ) {
                $(element).parent().parent('div').addClass('error');
            }
            else {
               $(element).parent('div').addClass('error');
                element.parent().after(error);
            }
         },
          unhighlight: function(element) {
            
            if ($(element).is(':checkbox') || $(element).is(':radio') ) {
               $(element).parent().parent('div').removeClass('error');
            }else {
              $(element).parent('div').removeClass("error");
            }
          }
         
        });

             // form validation 
             if(!formid){
                alert('form id is requried');
            }
            if ($("#" + formid).valid()) { 
              return true;
          }else {
           return false;

       }
}

$(document).ready(function(){ //alert();
                /** add active class and stay opened when selected */
                var url = window.location; 
                // for sidebar menu entirely but not cover treeview
                $('ul.nav-sidebar a').filter(function() {
                     return this.href == url;
                }).addClass('active').parent().parent().show().addClass('active');

          
            });  
