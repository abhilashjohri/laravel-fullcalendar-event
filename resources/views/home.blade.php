@extends('layouts.app')
@section('head')
<link rel="stylesheet" type="text/css" href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/air-datepicker/2.2.3/css/datepicker.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.2.7/fullcalendar.min.css"/>

@endsection
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!


                     <!-- full calander start -->
                      <div id="calendar"></div>
                     <!-- calendar modal -->
<div id="modal-view-event" class="modal modal-top fade calendar-modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <h4 class="modal-title"><span class="event-icon"></span><span class="event-title"></span></h4>
                   
    <p> <b> Event detail :</b> <span class="event-body"></span></p>
                      <p>  <span id=" event-start"></span></p>
                        <p> <b> Start date :</b> <span class="event-start"></span></p>
                          <p>  <b>Start time :</b> <span class="event-start-time"></span></p>
                            <p>   <b>End Date :</b><span class="event-end"></span></p>
                              <p>  <b>End Time :</b> <span class="event-end_time"></span></p>
                                <p> <b>Assign to : </b>  <span class=" event-assignto"></span></p>
                               
                   
                </div>
                <div class="modal-footer">
                  
                    <button type="button" class="btn btn-info Editevent "  >Edit</button>
                     <button type="button" class="btn btn-danger Delevent" >Delete</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
          
<div id="modal-view-event-add" class="modal modal-top fade calendar-modal" >
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <form id="add-event" method="Post">
        @csrf
        <div id ="form_result"></div>
        <div class="modal-body">
        <h4>Add Event Detail</h4>  
        <div class="row">      
          <div class="form-group col-md-12">
            <label>Event name</label>

            <input type="text" class="form-control inp_title" required name="name" >
          </div>
          <div class="form-group  col-md-6">
            <label>Event start Date</label>
            <input type='text' class="datetimepicker form-control inp_end " required name="event_start_date">
          </div> 
            <div class="form-group  col-md-6">
            <label>Event start time</label>
            <input type='time' class=" form-control inp_start-time" required name="event_start_time">
          </div>  
            <div class="form-group col-md-6">
            <label>Event End Date</label>
            <input type='text' class="datetimepicker form-control inp_end" required name="event_end_date">
          </div>  
            <div class="form-group col-md-6">
            <label>Event end  time</label>
            <input type='time' class="form-control inp_end-time" required name="event_end_time">
          </div>         
          <div class="form-group col-md-12">
            <label>Event Description</label>
            <textarea class="form-control inp_body" required name="desc"></textarea>
          </div>
            <div class="form-group col-md-12">
            <label>Assign to</label>
            <input type='text' class=" form-control inp_assignto" required name="assign_to">
          </div> 
            </div>
      </div>
        <div class="modal-footer">
             <input type="hidden" name="cru_id" id="cru_id">
             
        <button type="submit" class="btn btn-primary" id="cru_submit" >Save</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>        
      </div>
      </form>
    </div>
  </div>
</div>
                      <!-- end calander -->


                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('script')

  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
 
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.min.js"></script>



  <script src="{{ asset('js/event.js') }}" ></script>

@endsection