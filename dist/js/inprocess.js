//Start : Load json Data into the datatable (Demographics)
var inprocess_demographicsTable= $('#dt_inprocess_demographics').DataTable( {
  "ajax": "inprocess/demographics.json",

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
/*{
"targets": 5,
"data": "url",
"render": function(data){
return '<button type="button" class="btn btn-primary btn-sm"><i class="fas fa-edit"></i> Edit</button> <!--<a href="'+data+'">view</a>-->';
},

} */], 

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
 
  var pcmh = $('#pcmh').val();
  var risk = $('#risk').val();
  var searchresult = pcmh+' '+risk;
  inprocess_demographicsTable.search(searchresult).draw();

})
//End : Load json Data into the datatable (Demographics)


//Start : Load json Data into the datatable (conditions and risk)
var inprocess_conditionsandriskTable= $('#dt_inprocess_conditionsandrisk').DataTable( {
  "ajax": "inprocess/conditionsandrisk.json",

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

}],

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
 
  var pcmh = $('#pcmh').val();
  var risk = $('#risk').val();
  var searchresult = pcmh+' '+risk;
  inprocess_conditionsandriskTable.search(searchresult).draw();

})
//End : Load json Data into the datatable (conditions and risk)


//Start : Load json Data into the datatable (cost and utilization)
var inprocess_costandutilizationTable= $('#dt_inprocess_costandutilization').DataTable( {
  "ajax": "inprocess/costandutilization.json",

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

}],

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
 
  var pcmh = $('#pcmh').val();
  var risk = $('#risk').val();
  var searchresult = pcmh+' '+risk;
  inprocess_costandutilizationTable.search(searchresult).draw();

})
//End : Load json Data into the datatable (cost and utilization)



//Start : Load json Data into the datatable (BCBSRI Program)
var inprocess_bcbsriprogramTable= $('#dt_inprocess_bcbsriprogram').DataTable( {
  "ajax": "inprocess/bcbsriprogram.json",

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

}],

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
 
  var pcmh = $('#pcmh').val();
  var risk = $('#risk').val();
  var searchresult = pcmh+' '+risk;
  inprocess_bcbsriprogramTable.search(searchresult).draw();

})
//End : Load json Data into the datatable (BCBSRI Program)


//Start : Load json Data into the datatable (Patient all data)
var inprocess_patientpanelalldataTable= $('#dt_inprocess_patientpanelalldata').DataTable( {
  "ajax": "inprocess/patient_all_data.json",

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

}],

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
 
  var pcmh = $('#pcmh').val();
  var risk = $('#risk').val();
  var searchresult = pcmh+' '+risk;
  inprocess_patientpanelalldataTable.search(searchresult).draw();

})
//End : Load json Data into the datatable (Patient all data)