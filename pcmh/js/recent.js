//Start : Load json Data into the datatable (Demographics)
var recent_demographicsTable= $('#dt_recent_demographics').DataTable( {
  "ajax": "recent/demographics.json",

"columnDefs": [ {
"targets": 7,
"data": "url",
"render": function(data){
if(data=='High')
{
return '<button type="button" class="btn bg-gradient-danger btn-xs">'+data+'</button> ';
}
else  if(data=='Medium')
{
return '<button type="button" class="btn bg-gradient-warning btn-xs">'+data+'</button> ';
}
else
{
return '<button type="button" class="btn bg-gradient-success btn-xs">'+data+'</button> ';
}
},

},
{
"targets": 2,
"data": "url",
"render": function(data){
return '<a href="view_details.html">'+data+'</a>';
},

} ], 

  "columns": [
{"data":"Mbr_Last_Name"},        
{ "data": "Mbr_First_Name" },
{ "data": "CONSISTENT_MEMBER_ID" },
{ "data": "BCBSRI_ID" },
{ "data": "Mbr_DOB" },
{ "data": "Mbr_Age" },
{ "data": "Mbr_Gender" },
{ "data": "BCBSRI_Risk_Categorization" },
{ "data": "New_PCMH_HR_Flag" },
{ "data": "Perf_Guarantee_Mbr" },
{ "data": "contracted_group_name" },
{ "data": "Practice_Site" },
{ "data": "PCP_Last_Name" },
{ "data": "PCP_First_name" },
{ "data": "Last_PCP_Visit_dt" },
{ "data": "Product" },
{ "data": "Requires_PCP_Referral" },
{ "data": "Medicare_Dual_Coverage_Type" },
{ "data": "Mbr_Addr1" },
{ "data": "Mbr_Addr2" },
{ "data": "Mbr_City" },
{ "data": "Mbr_State" },
{ "data": "Mbr_Zip" },
{ "data": "Mbr_Phone_Nbr" }
  ]
} );

$('#btn_search').click(function(){
 
  //var pcmh = $('#pcmh').val();
  var risk = $('#risk').val();
  var searchresult = risk;
  recent_demographicsTable.search(searchresult).draw();

})
//End : Load json Data into the datatable (Demographics)


//Start : Load json Data into the datatable (conditions and risk)
var recent_conditionsandriskTable= $('#dt_recent_conditionsandrisk').DataTable( {
  "ajax": "recent/conditionsandrisk.json",

"columnDefs": [ {
"targets": 5,
"data": "url",
"render": function(data){
if(data=='High')
{
return '<button type="button" class="btn bg-gradient-danger btn-xs">'+data+'</button> ';
}
else  if(data=='Medium')
{
return '<button type="button" class="btn bg-gradient-warning btn-xs">'+data+'</button> ';
}
else
{
return '<button type="button" class="btn bg-gradient-success btn-xs">'+data+'</button> ';
}
},

},
{
  "targets": 2,
  "data": "url",
  "render": function(data){
  return '<a href="view_details.html">'+data+'</a>';
  },
  
  } ],

  "columns": [
{"data":"Mbr_Last_Name"},        
{ "data": "Mbr_First_Name" },
{ "data": "CONSISTENT_MEMBER_ID" },
{ "data": "BCBSRI_ID" },
{ "data": "Mbr_DOB" },
{ "data": "BCBSRI_Risk_Categorization" },
{ "data": "New_PCMH_HR_Flag" },
{ "data": "RUB" },
{ "data": "Medicare_Risk_Index" },
{ "data": "Hypertension" },
{ "data": "Hyperlipid" },
{ "data": "LowBackPain" },
{ "data": "Diabetes" },
{ "data": "IschemicHD" },
{ "data": "Asthma" },
{ "data": "COPD" },
{ "data": "CHF" },
{ "data": "Cancer" },
{ "data": "Depression" },
{ "data": "ESRD" },
{ "data": "CKD" },
{ "data": "Hospice_Flag" },
{ "data": "BH_Risk_Category" },
{ "data": "Adv_Dir_S0257" }
  ]
} );

$('#btn_search').click(function(){
 
  //var pcmh = $('#pcmh').val();
  var risk = $('#risk').val();
  var searchresult = risk;
  recent_conditionsandriskTable.search(searchresult).draw();

})
//End : Load json Data into the datatable (conditions and risk)


//Start : Load json Data into the datatable (cost and utilization)
var recent_costandutilizationTable= $('#dt_recent_costandutilization').DataTable( {
  "ajax": "recent/costandutilization.json",

"columnDefs": [ {
"targets": 5,
"data": "url",
"render": function(data){
if(data=='High')
{
return '<button type="button" class="btn bg-gradient-danger btn-xs">'+data+'</button> ';
}
else  if(data=='Medium')
{
return '<button type="button" class="btn bg-gradient-warning btn-xs">'+data+'</button> ';
}
else
{
return '<button type="button" class="btn bg-gradient-success btn-xs">'+data+'</button> ';
}
},

},{
  "targets": 2,
  "data": "url",
  "render": function(data){
  return '<a href="view_details.html">'+data+'</a>';
  },
  
  } ],

  "columns": [
{"data":"Mbr_Last_Name"},        
{ "data": "Mbr_First_Name" },
{ "data": "CONSISTENT_MEMBER_ID" },
{ "data": "BCBSRI_ID" },
{ "data": "Mbr_DOB" },
{ "data": "BCBSRI_Risk_Categorization" },
{ "data": "Probability_of_IP_in_6mos" },
{ "data": "IP_Medical_Cnt" },
{ "data": "OP_ER_Cnt" },
{ "data": "Total_Cost" },
{ "data": "Medical_Cost" },
{ "data": "Rx_Cost" },
{ "data": "High_Cost_50k" },
{ "data": "High_Cost_Driver" },
{ "data": "RxSpecialty_Drug" },
{ "data": "RxSpecialty_Disease_Desc" }
  ]
} );

$('#btn_search').click(function(){
 
  //var pcmh = $('#pcmh').val();
  var risk = $('#risk').val();
  var searchresult = risk;
  recent_costandutilizationTable.search(searchresult).draw();

})
//End : Load json Data into the datatable (cost and utilization)



//Start : Load json Data into the datatable (BCBSRI Program)
var recent_bcbsriprogramTable= $('#dt_recent_bcbsriprogram').DataTable( {
  "ajax": "recent/bcbsriprogram.json",

"columnDefs": [ {
"targets": 5,
"data": "url",
"render": function(data){
if(data=='High')
{
return '<button type="button" class="btn bg-gradient-danger btn-xs">'+data+'</button> ';
}
else  if(data=='Medium')
{
return '<button type="button" class="btn bg-gradient-warning btn-xs">'+data+'</button> ';
}
else
{
return '<button type="button" class="btn bg-gradient-success btn-xs">'+data+'</button> ';
}
},

},
{
  "targets": 2,
  "data": "url",
  "render": function(data){
  return '<a href="view_details.html">'+data+'</a>';
  },
  
  } ],

  "columns": [
{"data":"Mbr_Last_Name"},        
{ "data": "Mbr_First_Name" },
{ "data": "CONSISTENT_MEMBER_ID" },
{ "data": "BCBSRI_ID" },
{ "data": "Mbr_DOB" },
{ "data": "BCBSRI_Risk_Categorization" },
{ "data": "In_Home_Assessment_Status" },
{ "data": "In_Home_Assessment_Status_date" },
{ "data": "BH_CM_Flag" },
{ "data": "BH_CM_Discharge_Dt" },
{ "data": "BH_CM_Discharge_Reason" },
{ "data": "HCBB_Eligible" },
{ "data": "HCBB_Engaged" }
  ]
} );

$('#btn_search').click(function(){
 
  //var pcmh = $('#pcmh').val();
  var risk = $('#risk').val();
  var searchresult = risk;
  recent_bcbsriprogramTable.search(searchresult).draw();

})
//End : Load json Data into the datatable (BCBSRI Program)


//Start : Load json Data into the datatable (Patient all data)
var recent_patientpanelalldataTable= $('#dt_recent_patientpanelalldata').DataTable( {
  "ajax": "recent/patient_all_data.json",

"columnDefs": [ {
"targets": 7,
"data": "url",
"render": function(data){
if(data=='High')
{
return '<button type="button" class="btn bg-gradient-danger btn-xs">'+data+'</button> ';
}
else  if(data=='Medium')
{
return '<button type="button" class="btn bg-gradient-warning btn-xs">'+data+'</button> ';
}
else
{
return '<button type="button" class="btn bg-gradient-success btn-xs">'+data+'</button> ';
}
},

},
{
  "targets": 2,
  "data": "url",
  "render": function(data){
  return '<a href="view_details.html">'+data+'</a>';
  },
  
  } ],

  "columns": [
{"data":"Mbr_Last_Name"},        
{ "data": "Mbr_First_Name" },
{ "data": "CONSISTENT_MEMBER_ID" },
{ "data": "BCBSRI_ID" },
{ "data": "Mbr_DOB" },
{ "data": "Mbr_Age" },
{ "data": "Mbr_Gender" },
{ "data": "BCBSRI_Risk_Categorization" },
{ "data": "New_PCMH_HR_Flag" },
{ "data": "Perf_Guarantee_Mbr" },
{ "data": "contracted_group_name" },
{ "data": "Practice_Site" },
{ "data": "PCP_Last_Name" },
{ "data": "PCP_First_name" },
{ "data": "Last_PCP_Visit_dt" },
{ "data": "Product" },
{ "data": "Requires_PCP_Referral" },
{ "data": "Medicare_Dual_Coverage_Type" },
{ "data": "Mbr_Addr1" },
{ "data": "Mbr_Addr2" },
{ "data": "Mbr_City" },
{ "data": "Mbr_State" },
{ "data": "Mbr_Zip" },
{ "data": "Mbr_Phone_Nbr" },
{ "data": "RUB" },
{ "data": "Medicare_Risk_Index" },
{ "data": "Hypertension" },
{ "data": "Hyperlipid" },
{ "data": "LowBackPain" },
{ "data": "Diabetes" },
{ "data": "IschemicHD" },
{ "data": "Asthma" },
{ "data": "COPD" },
{ "data": "CHF" },
{ "data": "Cancer" },
{ "data": "Depression" },
{ "data": "ESRD" },
{ "data": "CKD" },
{ "data": "Hospice_Flag" },
{ "data": "BH_Risk_Category" },
{ "data": "Adv_Dir_S0257" },
{ "data": "Probability_of_IP_in_6mos" },
{ "data": "IP_Medical_Cnt" },
{ "data": "OP_ER_Cnt" },
{ "data": "Total_Cost" },
{ "data": "Medical_Cost" },
{ "data": "Rx_Cost" },
{ "data": "High_Cost_50k" },
{ "data": "High_Cost_Driver" },
{ "data": "RxSpecialty_Drug" },
{ "data": "RxSpecialty_Disease_Desc" },
{ "data": "In_Home_Assessment_Status" },
{ "data": "In_Home_Assessment_Status_date" },
{ "data": "BH_CM_Flag" },
{ "data": "BH_CM_Discharge_Dt" },
{ "data": "BH_CM_Discharge_Reason" },
{ "data": "HCBB_Eligible" },
{ "data": "HCBB_Engaged" }

  ]
} );

$('#btn_search').click(function(){
 
  //var pcmh = $('#pcmh').val();
  var risk = $('#risk').val();
  var searchresult = risk;
  recent_patientpanelalldataTable.search(searchresult).draw();

})
//End : Load json Data into the datatable (Patient all data)

var example1Table= $('#dt_recent_return_report').DataTable( {
  "ajax": "view_return_report.json",

  "columnDefs": [ {
  "targets": 4,
  "data": "url",
  "render": function(data){
    if(data=='High')
    {
    return '<button type="button" class="btn bg-gradient-danger btn-xs">'+data+'</button> ';
    }
    else  if(data=='Medium')
    {
    return '<button type="button" class="btn bg-gradient-warning btn-xs">'+data+'</button> ';
    }
    else
    {
    return '<button type="button" class="btn bg-gradient-success btn-xs">'+data+'</button> ';
    }
  }
  }],
  
        "columns": [
  { "data": "Mbr_Last_Name" },
  { "data": "Mbr_First_Name" },
  { "data": "BCBSRI_ID" },
  { "data": "Mbr_DOB" },
  { "data": "BCBSRI_Risk_Categorization" },
  { "data": "Perf_Guarantee_Mbr" },
  { "data": "Practice_Site" },
  { "data": "Practice_Identified_Indicator" },
  { "data": "Outreach_Attempted_Date" },
  { "data": "Enrolled_Status_Date" },
  { "data": "BH_Screening_PHQ-2_PHQ9_Completed_Date" },
  { "data": "Care_Plan_Established_Date" },
  { "data": "Discharged_from_CM_Date" },
  { "data": "Status" }
        ]
    } );

    $('#btn_search').click(function(){

var date = $('#date').val();
var searchresult = date;
example1Table.search(searchresult).draw();

})