//Start : Demographics
  //Start : Load json Data into the datatable (Demographics)

  var demographics_data = [{
    "postID": "1",
    "Mbr_Last_Name": "Pierce",
    "Mbr_First_Name":"Alexander",
    "CONSISTENT_MEMBER_ID": "856963",
    "BCBSRI_ID": "646464564564",
    "Mbr_DOB":"15-08-1990",
    "Mbr_Age": "30",
    "Mbr_Gender":"Male",
    "BCBSRI_Risk_Categorization":"High",
    "New_PCMH_HR_Flag":"",
    "Perf_Guarantee_Mbr":"",
    "contracted_group_name":"",
    "Practice_Site":"Brown Medicine-WARWICK",
    "PCP_Last_Name":"Doe",
    "PCP_First_name":"Bob",
    "Last_PCP_Visit_dt":"15-08-2020",
    "Product":"",
    "Requires_PCP_Referral":"",
    "Medicare_Dual_Coverage_Type":"",
    "Mbr_Addr1":"Coppell Rd",
    "Mbr_Addr2":"Round Grove Rd",
    "Mbr_City":"Coppell",
    "Mbr_State":"TX",
    "Mbr_Zip":"75019",
    "Mbr_Phone_Nbr":"954 325 5852"
    
   },
   
   {
     "postID": "2",
     "Mbr_Last_Name": "Doe",
     "Mbr_First_Name":"Bob",
     "CONSISTENT_MEMBER_ID": "656565",
     "BCBSRI_ID": "856464564596",
     "Mbr_DOB":"20-08-1992",
     "Mbr_Age": "28",
     "Mbr_Gender":"Male",
     "BCBSRI_Risk_Categorization":"Low",
     "New_PCMH_HR_Flag":"",
     "Perf_Guarantee_Mbr":"",
     "contracted_group_name":"",
     "Practice_Site":"Brown Medicine-WARWICK",
     "PCP_Last_Name":"Pierce",
     "PCP_First_name":"Alexander",
     "Last_PCP_Visit_dt":"15-08-2020",
     "Product":"",
     "Requires_PCP_Referral":"",
     "Medicare_Dual_Coverage_Type":"",
     "Mbr_Addr1":"Coppell Rd",
     "Mbr_Addr2":"Round Grove Rd",
     "Mbr_City":"Coppell",
     "Mbr_State":"TX",
     "Mbr_Zip":"75019",
     "Mbr_Phone_Nbr":"954 547 5852"
     
    },
    
    {
     "postID": "3",
     "Mbr_Last_Name": "Roy",
     "Mbr_First_Name":"Riya",
     "CONSISTENT_MEMBER_ID": "356478",
     "BCBSRI_ID": "659745236125",
     "Mbr_DOB":"20-01-1991",
     "Mbr_Age": "29",
     "Mbr_Gender":"Female",
     "BCBSRI_Risk_Categorization":"High",
     "New_PCMH_HR_Flag":"",
     "Perf_Guarantee_Mbr":"",
     "contracted_group_name":"",
     "Practice_Site":"Brown Medicine-WARWICK",
     "PCP_Last_Name":"Pierce",
     "PCP_First_name":"Alexander",
     "Last_PCP_Visit_dt":"",
     "Product":"",
     "Requires_PCP_Referral":"",
     "Medicare_Dual_Coverage_Type":"",
     "Mbr_Addr1":"Coppell Rd",
     "Mbr_Addr2":"Round Grove Rd",
     "Mbr_City":"Coppell",
     "Mbr_State":"TX",
     "Mbr_Zip":"75019",
     "Mbr_Phone_Nbr":"954 325 5852"
     
    }];


  var demographicsTable= $('#dt_recent_demographics').DataTable( {
    "aaData": demographics_data,

    "aoColumnDefs": [ {
    "aTargets": 7,
    "adata": "url",
    "mRender": function(adata){
      if(adata=='High')
      {
      return '<button type="button" class="btn bg-gradient-danger btn-xs">'+adata+'</button> ';
      }
      else  if(adata=='Medium')
      {
      return '<button type="button" class="btn bg-gradient-warning btn-xs">'+adata+'</button> ';
      }
      else
      {
      return '<button type="button" class="btn bg-gradient-success btn-xs">'+adata+'</button> ';
      }
    }
    }],
    
          "aoColumns": [
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
   

    //Start : Search Button Result
    
    $('#btn_search').click(function(){

    var month = $('#month').val();
    var year = $('#year').val();
    var risk = $('#risk').val();
    var searchresult = month+' '+year+' '+risk;
    demographicsTable.search(searchresult).draw();

    })
    //End : Search Button Result

    
    //End : Load json Data into the datatable (Demographics)

  //End : Demographics

//==========================================================================================//


//Start : conditions and risk
    //Start : Load json Data into the datatable (conditions and risk)

    var conditionsandrisk_data = [{
      "postID": "1",
      "Mbr_Last_Name": "Pierce",
      "Mbr_First_Name":"Alexander",
      "CONSISTENT_MEMBER_ID": "856963",
      "BCBSRI_ID": "646464564564",
      "Mbr_DOB":"15-08-1990",
      "BCBSRI_Risk_Categorization":"High",
      "New_PCMH_HR_Flag":"Added August 2020",
      "RUB":"4",
      "Medicare_Risk_Index":"1.522",
      "Hypertension":"1",
      "Hyperlipid":"1",
      "LowBackPain":"0",
      "Diabetes":"1",
      "IschemicHD":"0",
      "Asthma":"1",
      "COPD":"0",
      "CHF":"1",
      "Cancer":"0",
      "Depression":"1",
      "ESRD":"0",
      "CKD":"0",
      "Hospice_Flag":"0",
      "BH_Risk_Category":"Very Low",
      "Adv_Dir_S0257":"N"
     },
     
     {
       "postID": "2",
       "Mbr_Last_Name": "Doe",
       "Mbr_First_Name":"Bob",
       "CONSISTENT_MEMBER_ID": "656565",
       "BCBSRI_ID": "856464564596",
       "Mbr_DOB":"20-08-1992",
       "BCBSRI_Risk_Categorization":"High",
      "New_PCMH_HR_Flag":"Added August 2020",
      "RUB":"4",
      "Medicare_Risk_Index":"1.522",
      "Hypertension":"1",
      "Hyperlipid":"1",
      "LowBackPain":"0",
      "Diabetes":"1",
      "IschemicHD":"0",
      "Asthma":"1",
      "COPD":"0",
      "CHF":"1",
      "Cancer":"0",
      "Depression":"1",
      "ESRD":"0",
      "CKD":"0",
      "Hospice_Flag":"0",
      "BH_Risk_Category":"Very Low",
      "Adv_Dir_S0257":"N"
       
      },
      
      {
       "postID": "3",
       "Mbr_Last_Name": "Roy",
       "Mbr_First_Name":"Riya",
       "CONSISTENT_MEMBER_ID": "356478",
       "BCBSRI_ID": "659745236125",
       "Mbr_DOB":"20-01-1991",
       "BCBSRI_Risk_Categorization":"Medium",
      "New_PCMH_HR_Flag":"Added August 2020",
      "RUB":"4",
      "Medicare_Risk_Index":"1.522",
      "Hypertension":"1",
      "Hyperlipid":"1",
      "LowBackPain":"0",
      "Diabetes":"1",
      "IschemicHD":"0",
      "Asthma":"1",
      "COPD":"0",
      "CHF":"1",
      "Cancer":"0",
      "Depression":"1",
      "ESRD":"0",
      "CKD":"0",
      "Hospice_Flag":"0",
      "BH_Risk_Category":"Very Low",
      "Adv_Dir_S0257":"N"
       
      }];
  
  
    var conditionsandriskTable= $('#dt_recent_conditionsandrisk').DataTable( {
      "aaData": conditionsandrisk_data,
  
      "aoColumnDefs": [ {
      "aTargets": 5,
      "adata": "url",
      "mRender": function(adata){
        if(adata=='High')
        {
        return '<button type="button" class="btn bg-gradient-danger btn-xs">'+adata+'</button> ';
        }
        else  if(adata=='Medium')
        {
        return '<button type="button" class="btn bg-gradient-warning btn-xs">'+adata+'</button> ';
        }
        else
        {
        return '<button type="button" class="btn bg-gradient-success btn-xs">'+adata+'</button> ';
        }
      }
      }],
      
            "aoColumns": [
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
     
  
      //Start : Search Button Result
      
      $('#btn_search').click(function(){
  
      var month = $('#month').val();
      var year = $('#year').val();
      var risk = $('#risk').val();
      var searchresult = month+' '+year+' '+risk;
      conditionsandriskTable.search(searchresult).draw();
  
      })
      //End : Search Button Result

    
    //End : Load json Data into the datatable (conditions and risk)


    
  
  //End : Conditions and risk

//====================================================================================================

//Start : cost and utilization
//Start : Load json Data into the datatable (cost and utilization)

var costandutilization_data = [{
  "postID": "1",
  "Mbr_Last_Name": "Pierce",
  "Mbr_First_Name":"Alexander",
  "CONSISTENT_MEMBER_ID": "856963",
  "BCBSRI_ID": "646464564564",
  "Mbr_DOB":"15-08-1990",
  "BCBSRI_Risk_Categorization":"High",
  "Probability_of_IP_in_6mos":"",
  "IP_Medical_Cnt":"",
  "OP_ER_Cnt":"",
  "Total_Cost":"",
  "Medical_Cost":"",
  "Rx_Cost":"",
  "High_Cost_50k":"",
  "High_Cost_Driver":"",
  "RxSpecialty_Drug":"",
  "RxSpecialty_Disease_Desc":""
 },
 
 {
   "postID": "2",
   "Mbr_Last_Name": "Doe",
   "Mbr_First_Name":"Bob",
   "CONSISTENT_MEMBER_ID": "656565",
   "BCBSRI_ID": "856464564596",
   "Mbr_DOB":"20-08-1992",
   "BCBSRI_Risk_Categorization":"High",
   "Probability_of_IP_in_6mos":"",
   "IP_Medical_Cnt":"",
   "OP_ER_Cnt":"",
   "Total_Cost":"",
   "Medical_Cost":"",
   "Rx_Cost":"",
   "High_Cost_50k":"",
   "High_Cost_Driver":"",
   "RxSpecialty_Drug":"",
   "RxSpecialty_Disease_Desc":""
   
  },
  
  {
   "postID": "3",
   "Mbr_Last_Name": "Doe",
   "Mbr_First_Name":"Riya",
   "CONSISTENT_MEMBER_ID": "356478",
   "BCBSRI_ID": "659745236125",
   "Mbr_DOB":"20-01-1991",
   "BCBSRI_Risk_Categorization":"Medium",
   "Probability_of_IP_in_6mos":"",
   "IP_Medical_Cnt":"",
   "OP_ER_Cnt":"",
   "Total_Cost":"",
   "Medical_Cost":"",
   "Rx_Cost":"",
   "High_Cost_50k":"",
   "High_Cost_Driver":"",
   "RxSpecialty_Drug":"",
   "RxSpecialty_Disease_Desc":""
   
  }];


var costandutilizationTable= $('#dt_recent_costandutilization').DataTable( {
  "aaData": costandutilization_data,

  "aoColumnDefs": [ {
  "aTargets": 5,
  "adata": "url",
  "mRender": function(adata){
    if(adata=='High')
    {
    return '<button type="button" class="btn bg-gradient-danger btn-xs">'+adata+'</button> ';
    }
    else  if(adata=='Medium')
    {
    return '<button type="button" class="btn bg-gradient-warning btn-xs">'+adata+'</button> ';
    }
    else
    {
    return '<button type="button" class="btn bg-gradient-success btn-xs">'+adata+'</button> ';
    }
  }
  }],
  
        "aoColumns": [
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
 

  //Start : Search Button Result
  
  $('#btn_search').click(function(){

  var month = $('#month').val();
  var year = $('#year').val();
  var risk = $('#risk').val();
  var searchresult = month+' '+year+' '+risk;
  costandutilizationTable.search(searchresult).draw();

  })
  //End : Search Button Result


//End : Load json Data into the datatable (cost and utilization)
//End : cost and utilization


//=========================================================================================

//Start : BCBSRI Program

  //Start : Load json Data into the datatable (BCBSRI Program)


  var bcbsriprogram_data = [{
    "postID": "1",
    "Mbr_Last_Name": "Pierce",
    "Mbr_First_Name":"Alexander",
    "CONSISTENT_MEMBER_ID": "856963",
    "BCBSRI_ID": "646464564564",
    "Mbr_DOB":"15-08-1990",
    "BCBSRI_Risk_Categorization":"High",
    "In_Home_Assessment_Status":"",
    "In_Home_Assessment_Status_date":"",
    "BH_CM_Flag":"",
    "BH_CM_Discharge_Dt":"",
    "BH_CM_Discharge_Reason":"",
    "HCBB_Eligible":"",
    "HCBB_Engaged":""
   },
   
   {
     "postID": "2",
     "Mbr_Last_Name": "Doe",
     "Mbr_First_Name":"Bob",
     "CONSISTENT_MEMBER_ID": "656565",
     "BCBSRI_ID": "856464564596",
     "Mbr_DOB":"20-08-1992",
     "BCBSRI_Risk_Categorization":"High",
     "In_Home_Assessment_Status":"",
     "In_Home_Assessment_Status_date":"",
     "BH_CM_Flag":"",
     "BH_CM_Discharge_Dt":"",
     "BH_CM_Discharge_Reason":"",
     "HCBB_Eligible":"",
     "HCBB_Engaged":""
     
    },
    
    {
     "postID": "3",
     "Mbr_Last_Name": "Doe",
     "Mbr_First_Name":"Riya",
     "CONSISTENT_MEMBER_ID": "356478",
     "BCBSRI_ID": "659745236125",
     "Mbr_DOB":"20-01-1991",
     "BCBSRI_Risk_Categorization":"Medium",
     "In_Home_Assessment_Status":"",
     "In_Home_Assessment_Status_date":"",
     "BH_CM_Flag":"",
     "BH_CM_Discharge_Dt":"",
     "BH_CM_Discharge_Reason":"",
     "HCBB_Eligible":"",
     "HCBB_Engaged":""
     
    }];
  
  
  var bcbsriprogramTable= $('#dt_recent_bcbsriprogram').DataTable( {
    "aaData": bcbsriprogram_data,
  
    "aoColumnDefs": [ {
    "aTargets": 5,
    "adata": "url",
    "mRender": function(adata){
      if(adata=='High')
      {
      return '<button type="button" class="btn bg-gradient-danger btn-xs">'+adata+'</button> ';
      }
      else  if(adata=='Medium')
      {
      return '<button type="button" class="btn bg-gradient-warning btn-xs">'+adata+'</button> ';
      }
      else
      {
      return '<button type="button" class="btn bg-gradient-success btn-xs">'+adata+'</button> ';
      }
    }
    }],
    
          "aoColumns": [
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
   
  
    //Start : Search Button Result
    
    $('#btn_search').click(function(){
  
    var month = $('#month').val();
    var year = $('#year').val();
    var risk = $('#risk').val();
    var searchresult = month+' '+year+' '+risk;
    bcbsriprogramTable.search(searchresult).draw();
  
    })
    //End : Search Button Result

  
  //End : Load json Data into the datatable (BCBSRI Program)

//End : BCBSRI Program

//===========================================================================================

//Start : Patient all data

  //Start : Load json Data into the datatable (Patient all data[recent])

  var patientpanelall_data = [{
    "postID": "1",
    "Mbr_Last_Name": "Pierce",
    "Mbr_First_Name":"Alexander",
    "CONSISTENT_MEMBER_ID": "856963",
    "BCBSRI_ID": "646464564564",
    "Mbr_DOB":"15-08-1990",
    "Mbr_Age": "29",
     "Mbr_Gender":"Male",
    "BCBSRI_Risk_Categorization":"High",
    "New_PCMH_HR_Flag":"",
     "Perf_Guarantee_Mbr":"",
     "contracted_group_name":"",
     "Practice_Site":"Brown Medicine-WARWICK",
     "PCP_Last_Name":"Pierce",
     "PCP_First_name":"Alexander",
     "Last_PCP_Visit_dt":"",
     "Product":"",
     "Requires_PCP_Referral":"",
     "Medicare_Dual_Coverage_Type":"",
     "Mbr_Addr1":"Coppell Rd",
     "Mbr_Addr2":"Round Grove Rd",
     "Mbr_City":"Coppell",
     "Mbr_State":"TX",
     "Mbr_Zip":"75019",
     "Mbr_Phone_Nbr":"954 325 5852",
     "RUB":"4",
     "Medicare_Risk_Index":"1.522",
     "Hypertension":"1",
     "Hyperlipid":"1",
     "LowBackPain":"0",
     "Diabetes":"1",
     "IschemicHD":"0",
     "Asthma":"1",
     "COPD":"0",
     "CHF":"1",
     "Cancer":"0",
     "Depression":"1",
     "ESRD":"0",
     "CKD":"0",
     "Hospice_Flag":"0",
     "BH_Risk_Category":"Very Low",
     "Adv_Dir_S0257":"N",
     "Probability_of_IP_in_6mos":"",
     "IP_Medical_Cnt":"",
     "OP_ER_Cnt":"",
     "Total_Cost":"",
     "Medical_Cost":"",
     "Rx_Cost":"",
     "High_Cost_50k":"",
     "High_Cost_Driver":"",
     "RxSpecialty_Drug":"",
     "RxSpecialty_Disease_Desc":"",
     "In_Home_Assessment_Status":"",
     "In_Home_Assessment_Status_date":"",
     "BH_CM_Flag":"",
     "BH_CM_Discharge_Dt":"",
     "BH_CM_Discharge_Reason":"",
     "HCBB_Eligible":"",
     "HCBB_Engaged":""
   },
   
   {
     "postID": "2",
     "Mbr_Last_Name": "Doe",
     "Mbr_First_Name":"Bob",
     "CONSISTENT_MEMBER_ID": "656565",
     "BCBSRI_ID": "856464564596",
     "Mbr_DOB":"20-08-1992",
     "Mbr_Age": "28",
     "Mbr_Gender":"Male",
     "BCBSRI_Risk_Categorization":"High",
     "New_PCMH_HR_Flag":"",
     "Perf_Guarantee_Mbr":"",
     "contracted_group_name":"",
     "Practice_Site":"Brown Medicine-WARWICK",
     "PCP_Last_Name":"Pierce",
     "PCP_First_name":"Alexander",
     "Last_PCP_Visit_dt":"",
     "Product":"",
     "Requires_PCP_Referral":"",
     "Medicare_Dual_Coverage_Type":"",
     "Mbr_Addr1":"Coppell Rd",
     "Mbr_Addr2":"Round Grove Rd",
     "Mbr_City":"Coppell",
     "Mbr_State":"TX",
     "Mbr_Zip":"75019",
     "Mbr_Phone_Nbr":"954 325 5852",
     "RUB":"4",
     "Medicare_Risk_Index":"1.522",
     "Hypertension":"1",
     "Hyperlipid":"1",
     "LowBackPain":"0",
     "Diabetes":"1",
     "IschemicHD":"0",
     "Asthma":"1",
     "COPD":"0",
     "CHF":"1",
     "Cancer":"0",
     "Depression":"1",
     "ESRD":"0",
     "CKD":"0",
     "Hospice_Flag":"0",
     "BH_Risk_Category":"Very Low",
     "Adv_Dir_S0257":"N",
     "Probability_of_IP_in_6mos":"",
     "IP_Medical_Cnt":"",
     "OP_ER_Cnt":"",
     "Total_Cost":"",
     "Medical_Cost":"",
     "Rx_Cost":"",
     "High_Cost_50k":"",
     "High_Cost_Driver":"",
     "RxSpecialty_Drug":"",
     "RxSpecialty_Disease_Desc":"",
     "In_Home_Assessment_Status":"",
     "In_Home_Assessment_Status_date":"",
     "BH_CM_Flag":"",
     "BH_CM_Discharge_Dt":"",
     "BH_CM_Discharge_Reason":"",
     "HCBB_Eligible":"",
     "HCBB_Engaged":""
     
    },
    
    {
     "postID": "3",
     "Mbr_Last_Name": "Doe",
     "Mbr_First_Name":"Riya",
     "CONSISTENT_MEMBER_ID": "356478",
     "BCBSRI_ID": "659745236125",
     "Mbr_DOB":"20-01-1991",
     "Mbr_Age": "29",
     "Mbr_Gender":"Female",
     "BCBSRI_Risk_Categorization":"Medium",
     "New_PCMH_HR_Flag":"",
     "Perf_Guarantee_Mbr":"",
     "contracted_group_name":"",
     "Practice_Site":"Brown Medicine-WARWICK",
     "PCP_Last_Name":"Pierce",
     "PCP_First_name":"Alexander",
     "Last_PCP_Visit_dt":"",
     "Product":"",
     "Requires_PCP_Referral":"",
     "Medicare_Dual_Coverage_Type":"",
     "Mbr_Addr1":"Coppell Rd",
     "Mbr_Addr2":"Round Grove Rd",
     "Mbr_City":"Coppell",
     "Mbr_State":"TX",
     "Mbr_Zip":"75019",
     "Mbr_Phone_Nbr":"954 325 5852",
     "RUB":"4",
     "Medicare_Risk_Index":"1.522",
     "Hypertension":"1",
     "Hyperlipid":"1",
     "LowBackPain":"0",
     "Diabetes":"1",
     "IschemicHD":"0",
     "Asthma":"1",
     "COPD":"0",
     "CHF":"1",
     "Cancer":"0",
     "Depression":"1",
     "ESRD":"0",
     "CKD":"0",
     "Hospice_Flag":"0",
     "BH_Risk_Category":"Very Low",
     "Adv_Dir_S0257":"N",
     "Probability_of_IP_in_6mos":"",
     "IP_Medical_Cnt":"",
     "OP_ER_Cnt":"",
     "Total_Cost":"",
     "Medical_Cost":"",
     "Rx_Cost":"",
     "High_Cost_50k":"",
     "High_Cost_Driver":"",
     "RxSpecialty_Drug":"",
     "RxSpecialty_Disease_Desc":"",
     "In_Home_Assessment_Status":"",
     "In_Home_Assessment_Status_date":"",
     "BH_CM_Flag":"",
     "BH_CM_Discharge_Dt":"",
     "BH_CM_Discharge_Reason":"",
     "HCBB_Eligible":"",
     "HCBB_Engaged":""
     
    }];
  
  
  var patientpanelalldataTable= $('#dt_recent_patientpanelalldata').DataTable( {
    "aaData": patientpanelall_data,
  
    "aoColumnDefs": [ {
    "aTargets": 7,
    "adata": "url",
    "mRender": function(adata){
      if(adata=='High')
      {
      return '<button type="button" class="btn bg-gradient-danger btn-xs">'+adata+'</button> ';
      }
      else  if(adata=='Medium')
      {
      return '<button type="button" class="btn bg-gradient-warning btn-xs">'+adata+'</button> ';
      }
      else
      {
      return '<button type="button" class="btn bg-gradient-success btn-xs">'+adata+'</button> ';
      }
    }
    }],
    
          "aoColumns": [
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
   
  
    //Start : Search Button Result
    
    $('#btn_search').click(function(){
  
    var month = $('#month').val();
    var year = $('#year').val();
    var risk = $('#risk').val();
    var searchresult = month+' '+year+' '+risk;
    patientpanelalldataTable.search(searchresult).draw();
  
    })
    //End : Search Button Result

  //End : Load json Data into the datatable (Patient all data)


//End : Patient all data

//========================================================================================

//Start : Return Reporting

  //Start : Load json Data into the datatable (Return Reporting[recent])

  var returnreport_data = [{
    "slno": "1",
    "Mbr_Last_Name": "Roy",
    "Mbr_First_Name":"Bob",
    "BCBSRI_ID": "646464564564",
    "Mbr_DOB":"15-08-1990",
    "BCBSRI_Risk_Categorization":"High",
    "Perf_Guarantee_Mbr":"",
    "Practice_Site":"Brown Medicine-WARWICK",
    "Practice_Identified_Indicator":"",
    "Outreach_Attempted_Date":"10-09-2020",
    "Enrolled_Status_Date":"10-09-2020",
    "BH_Screening_PHQ-2_PHQ9_Completed_Date":"12-09-2020",
    "Care_Plan_Established_Date":"13-09-2020",
    "Discharged_from_CM_Date":"14-09-2020",
    "Status":"In Process"
 
   }, {
    "slno": "2",
    "Mbr_Last_Name": "Ross",
    "Mbr_First_Name":"Roman",
    "BCBSRI_ID": "674587564564",
    "Mbr_DOB":"15-08-1990",
    "BCBSRI_Risk_Categorization":"High",
    "Perf_Guarantee_Mbr":"",
    "Practice_Site":"Brown Medicine-WARWICK",
    "Practice_Identified_Indicator":"",
    "Outreach_Attempted_Date":"10-09-2020",
    "Enrolled_Status_Date":"10-09-2020",
    "BH_Screening_PHQ-2_PHQ9_Completed_Date":"12-09-2020",
    "Care_Plan_Established_Date":"13-09-2020",
    "Discharged_from_CM_Date":"14-09-2020",
    "Status":"In Process"
   }, {
    "slno": "3",
    "Mbr_Last_Name": "Rhodes",
    "Mbr_First_Name":"Jonny",
    "BCBSRI_ID": "98754564564",
    "Mbr_DOB":"15-08-1990",
    "BCBSRI_Risk_Categorization":"Medium",
    "Perf_Guarantee_Mbr":"",
    "Practice_Site":"Brown Medicine-WARWICK",
    "Practice_Identified_Indicator":"",
    "Outreach_Attempted_Date":"10-09-2020",
    "Enrolled_Status_Date":"10-09-2020",
    "BH_Screening_PHQ-2_PHQ9_Completed_Date":"12-09-2020",
    "Care_Plan_Established_Date":"13-09-2020",
    "Discharged_from_CM_Date":"14-09-2020",
    "Status":"Complated"
   }];
  
  
  var returnreportTable= $('#dt_recent_returnreport').DataTable( {
    "aaData": returnreport_data,
  
    "aoColumnDefs": [ {
    "aTargets": 4,
    "adata": "url",
    "mRender": function(adata){
      if(adata=='High')
      {
      return '<button type="button" class="btn bg-gradient-danger btn-xs">'+adata+'</button> ';
      }
      else  if(adata=='Medium')
      {
      return '<button type="button" class="btn bg-gradient-warning btn-xs">'+adata+'</button> ';
      }
      else
      {
      return '<button type="button" class="btn bg-gradient-success btn-xs">'+adata+'</button> ';
      }
    }
    }],
    
          "aoColumns": [
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
   
  
    //Start : Search Button Result
    
    $('#btn_search').click(function(){
  
    var month = $('#month').val();
    var year = $('#year').val();
    var risk = $('#risk').val();
    var searchresult = month+' '+year+' '+risk;
    returnreportTable.search(searchresult).draw();
  
    })
    //End : Search Button Result

  //End : Load json Data into the datatable (Return Reporting)

