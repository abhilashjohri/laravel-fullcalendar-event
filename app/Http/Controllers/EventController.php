<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Event;
use Illuminate\Support\Facades\Hash;
use Validator;
use Illuminate\Support\Str; 
use Illuminate\Validation\Rule;


class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
      public function __construct()
    {
        $this->middleware('auth');

        // $this->middleware('log')->only('index');

        // $this->middleware('subscribed')->except('store');
    }

   public function index(Request $request)
   {
  //  if(request()->ajax())
  //  {
          $data =[];
        $events = Event::where("user_id",auth()->user()->id)->get();
       foreach ($events as $key => $value) {
            $arr = [];
            //`user_id`, `name`, `desc`, `event_start_date`, `event_start_time`, `event_end_date`, `event_end_time`, `assign_to`, 
             $arr['id'] =   $value->id;  
              $arr['title'] =   $value->name;
                $arr['description'] = $value->desc;
                  $arr["start"]  =$value->event_start_date."T".$value->event_start_time;
                    $arr['end']=$value->event_end_date."T".$value->event_end_time;
                      $arr['className'] =  'fc-bg-default';
                        $arr['allDay'] = false;
                          $arr['icon'] = 'cutlery';
                            $arr['start_date'] =date("m/d/Y",strtotime($value->event_start_date));
                              $arr['start_time'] =date("h:i A",strtotime($value->event_start_time));
                                $arr['end_date'] =date("m/d/Y",strtotime($value->event_end_date));
                                  $arr['end_time'] = date("h:i A",strtotime($value->event_end_time));
                                    $arr['start_time_val'] =$value->event_start_time;
                            
                                  $arr['end_time_val'] = $value->event_end_time;
                                  $arr['assign_to'] =$value->assign_to;
                                  $arr['url'] ='';


              $data[] = $arr;
         # code...
      // }

    
       
    }
    
       return response()->json($data);
}

    /**
     * Show the form for creatig a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

       
    }
 
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
     

       $rules = array(
    'desc'    =>  'required',
     'name' => 'required',
      'event_start_date' => 'required',
        'event_end_date' => 'required',
          'event_start_time' => 'required',
            'event_end_time' => 'required',
                'assign_to' => 'required',
                
           
        );

        $error = Validator::make($request->all(), $rules);

        if($error->fails())
        {
            return response()->json(['errors' => $error->errors()->all()]);
        }
            $start_date =   strtotime($request->event_start_date.' '.$request->event_start_time);
       $end_date = strtotime($request->event_end_date.' '.$request->event_end_time);
      if($start_date>$end_date)
        {
            return response()->json(['errors' => ['start date and end date is not valid']]);
        }
    
        $form_data = array(
            'name'        =>  $request->name,
            'desc'        =>  $request->desc,
              'event_start_date'        =>  date("Y-m-d",strtotime($request->event_start_date)),
                'event_end_date'        =>    date("Y-m-d",strtotime($request->event_end_date)),
                  'event_start_time'        =>   date("H:i:s",strtotime($request->event_start_time)),
                    'event_end_time'        =>  date("H:i:s",strtotime($request->event_end_time)),
                      'assign_to'        =>  $request->desc,
          
             
            'user_id'    =>  auth()->user()->id,

        );
        if($request->cru_id) {
        Event::whereId($request->cru_id)->update($form_data);

        return response()->json(['success' => 'Data is successfully updated']);
      }else{
        Event::create($form_data);

        return response()->json(['success' => 'Event Added successfully.']);
      }


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
          
         $data = Event::findOrFail($id);
         
           return response()->json($data);
       
    }
      

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
      
       
    }

   
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Event::findOrFail($id);
       echo $data->delete();
    }

 
}
