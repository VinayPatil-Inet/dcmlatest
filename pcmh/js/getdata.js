//Start : Demographics
  //Start : Load json Data into the datatable (Demographics)

  demographics_data()
  conditionsandrisk_data()
  costandutilization_data()
  bcbsriprogram_data()
  patient_all_data()
  returnreporting_data()

  function demographics_data()
  {
    var pcmhid=2
    var demographicsdata ='{"demographicsdatatype":"demographics","pcmhid":"'+pcmhid+'"}';
      fetch("https://apimsdcm.azure-api.net/PCMH/pcmhreports", {
        method: 'post',
       // mode: 'no-cors', // no-cors, *cors, same-origin

       headers: { 'Content-Type': 'application/json',
            "x-functions-key": "Y75v69weCc0+ZanTjf0jSihLRlZAOUJGRM8xTAbdDLMZdQiXYNiJfg==",
            "Ocp-Apim-Subscription-Key": "2584a9c08dd04aa49db05cbb265c9b91",
            // "subscription-key":"da91fd77-c908-4f23-9469-52acf3239a11"
            },
        body: demographicsdata
    }).then((response) => {

                     if (response.ok) {
                    return response
                } else {
                    throw `update Looks like something went wrong. Status: ${response}`;
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log("data: [" + JSON.stringify(data)+"]")
                review_return_filedata = JSON.stringify(data);
                
              setTimeout(function() {
                var demographicsTable= $('#dt_recent_demographics').DataTable( {
                "aaData": JSON.parse(review_return_filedata),

                "aoColumnDefs": [ {
                "aTargets": 7,
                "adata": "BCBSRI_Risk_Categorization",
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
                  { "data": "month_name" },
                  { "data": "for_year" }
                      ]
                  } );


                  $('#btn_search').click(function(){
  
                    var risk = $('#risk').val();
                    var year = $('#year').val();
                    var month = $('#month').val();
                    var searchresult = risk+' '+month+' '+year;
                    demographicsTable.search(searchresult).draw();
                
                  })
               
              },2000);     
     
             
            })
            .catch(error => {
                console.log(error)
            })  

            
  }
  

    //End : Load json Data into the datatable (Demographics)

  
//End : Demographics

//==============================================================================================//

//Start : conditions and risk
  //Start : Load json Data into the datatable (conditions and risk[Recent])

  function conditionsandrisk_data()
  {
    var pcmhid=2
    var conditionsandriskdata ='{"conditionsandriskype":"conditionsandrisk","pcmhid":"'+pcmhid+'"}';
      fetch("https://apimsdcm.azure-api.net/PCMH/pcmhreports", {
        method: 'post',
       // mode: 'no-cors', // no-cors, *cors, same-origin

       headers: { 'Content-Type': 'application/json',
            "x-functions-key": "Y75v69weCc0+ZanTjf0jSihLRlZAOUJGRM8xTAbdDLMZdQiXYNiJfg==",
            "Ocp-Apim-Subscription-Key": "2584a9c08dd04aa49db05cbb265c9b91",
            // "subscription-key":"da91fd77-c908-4f23-9469-52acf3239a11"
            },
        body: conditionsandriskdata
    }).then((response) => {

                     if (response.ok) {
                    return response
                } else {
                    throw `update Looks like something went wrong. Status: ${response}`;
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log("data: [" + JSON.stringify(data)+"]")
                conditionsandrisk_return_data = JSON.stringify(data);
                
              setTimeout(function() {
                var conditionsandriskTable= $('#dt_recent_conditionsandrisk').DataTable( {
                "aaData": JSON.parse(conditionsandrisk_return_data),

                "aoColumnDefs": [ {
                "aTargets": 5,
                "adata": "BCBSRI_Risk_Categorization",
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
                  { "data": "Adv_Dir_S0257" },
                  { "data": "month_name" },
                  { "data": "for_year" }
                      ]
                  } );

                  $('#btn_search').click(function(){
  
                    var risk = $('#risk').val();
                    var year = $('#year').val();
                    var month = $('#month').val();
                    var searchresult = risk+' '+month+' '+year;
                    conditionsandriskTable.search(searchresult).draw();
                
                  })

              },2000);     
     
               
            })
            .catch(error => {
                console.log(error)
            })  

            
  }


  //End : Load json Data into the datatable (conditions and risk[Recent])

   

//End : conditions and risk

//==================================================================================================//



//Start : cost and utilization

function costandutilization_data()
{
  var pcmhid=2
  var costandutilizationkdata ='{"costandutilizationtype":"costandutilizationtype","pcmhid":"'+pcmhid+'"}';
    fetch("https://apimsdcm.azure-api.net/PCMH/pcmhreports", {
      method: 'post',
     // mode: 'no-cors', // no-cors, *cors, same-origin

     headers: { 'Content-Type': 'application/json',
          "x-functions-key": "Y75v69weCc0+ZanTjf0jSihLRlZAOUJGRM8xTAbdDLMZdQiXYNiJfg==",
          "Ocp-Apim-Subscription-Key": "2584a9c08dd04aa49db05cbb265c9b91",
          // "subscription-key":"da91fd77-c908-4f23-9469-52acf3239a11"
          },
      body: costandutilizationkdata
  }).then((response) => {

                   if (response.ok) {
                  return response
              } else {
                  throw `update Looks like something went wrong. Status: ${response}`;
              }
          })
          .then(response => response.json())
          .then(data => {
              console.log("data: [" + JSON.stringify(data)+"]")
              costandutilization_return_data = JSON.stringify(data);
              
            setTimeout(function() {
              var costandutilizationTable= $('#dt_recent_costandutilization').DataTable( {
              "aaData": JSON.parse(costandutilization_return_data),

              "aoColumnDefs": [ {
              "aTargets": 5,
              "adata": "BCBSRI_Risk_Categorization",
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
                { "data": "RxSpecialty_Disease_Desc" },
                { "data": "month_name" },
                { "data": "for_year" }
                    ]
                } );

                $('#btn_search').click(function(){

                  var risk = $('#risk').val();
                  var year = $('#year').val();
                  var month = $('#month').val();
                  var searchresult = risk+' '+month+' '+year;
                  costandutilizationTable.search(searchresult).draw();
              
                })
             
            },2000);     
   
             
          })
          .catch(error => {
              console.log(error)
          })  

         
    }

  //Start : Load json Data into the datatable (cost and utilization[recent])
  
 

  
  //End : Load json Data into the datatable (cost and utilization[recent])

  

//End : cost and utilization

//===========================================================================================//

//Start : BCBSRI Program

function bcbsriprogram_data()
{
  var pcmhid=2
  var bcbsriprogramdata ='{"bcbsriprogramtype":"bcbsriprogram","pcmhid":"'+pcmhid+'"}';
    fetch("https://apimsdcm.azure-api.net/PCMH/pcmhreports", {
      method: 'post',
     // mode: 'no-cors', // no-cors, *cors, same-origin

     headers: { 'Content-Type': 'application/json',
          "x-functions-key": "Y75v69weCc0+ZanTjf0jSihLRlZAOUJGRM8xTAbdDLMZdQiXYNiJfg==",
          "Ocp-Apim-Subscription-Key": "2584a9c08dd04aa49db05cbb265c9b91",
          // "subscription-key":"da91fd77-c908-4f23-9469-52acf3239a11"
          },
      body: bcbsriprogramdata
  }).then((response) => {

                   if (response.ok) {
                  return response
              } else {
                  throw `update Looks like something went wrong. Status: ${response}`;
              }
          })
          .then(response => response.json())
          .then(data => {
              console.log("data: [" + JSON.stringify(data)+"]")
              bcbsriprogram_returndata = JSON.stringify(data);
              
            setTimeout(function() {
              var bcbsriprogramTable= $('#dt_recent_bcbsriprogram').DataTable( {
              "aaData": JSON.parse(bcbsriprogram_returndata),

              "aoColumnDefs": [ {
              "aTargets": 5,
              "adata": "BCBSRI_Risk_Categorization",
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
                { "data": "HCBB_Engaged" },
                { "data": "month_name" },
                { "data": "for_year" }
                    ]
                } );

                $('#btn_search').click(function(){

                  var risk = $('#risk').val();
                  var year = $('#year').val();
                  var month = $('#month').val();
                  var searchresult = risk+' '+month+' '+year;
                  bcbsriprogramTable.search(searchresult).draw();
              
                })

            },2000);     
   
             
          })
          .catch(error => {
              console.log(error)
          })  

         
    }



  
  //End : Load json Data into the datatable (BCBSRI Program[recent])


  


//End : BCBSRI Program

//==============================================================================================//

//Start : Patient all data
  //Start : Load json Data into the datatable (Patient all data[recent])

  function patient_all_data()
{
  var pcmhid=2
  var patient_alldata ='{"patientalldatatype":"patientalldata","pcmhid":"'+pcmhid+'"}';
    fetch("https://apimsdcm.azure-api.net/PCMH/pcmhreports", {
      method: 'post',
     // mode: 'no-cors', // no-cors, *cors, same-origin

     headers: { 'Content-Type': 'application/json',
          "x-functions-key": "Y75v69weCc0+ZanTjf0jSihLRlZAOUJGRM8xTAbdDLMZdQiXYNiJfg==",
          "Ocp-Apim-Subscription-Key": "2584a9c08dd04aa49db05cbb265c9b91",
          // "subscription-key":"da91fd77-c908-4f23-9469-52acf3239a11"
          },
      body: patient_alldata
  }).then((response) => {

                   if (response.ok) {
                  return response
              } else {
                  throw `update Looks like something went wrong. Status: ${response}`;
              }
          })
          .then(response => response.json())
          .then(data => {
              console.log("data: [" + JSON.stringify(data)+"]")
              patientallreturn_data = JSON.stringify(data);
              
            setTimeout(function() {
              var patientpanelalldataTable= $('#dt_recent_patientpanelalldata').DataTable( {
              "aaData": JSON.parse(patientallreturn_data),

              "aoColumnDefs": [ {
              "aTargets": 7,
              "adata": "BCBSRI_Risk_Categorization",
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
               // { "data": "Last_PCP_Visit_dt" },
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
                { "data": "Hospice" },
                { "data": "BH_Risk_Category" },
                { "data": "Adv_Dir_S0257" },
                { "data": "Probability_of_IP_in_6mos" },
                { "data": "IP_Medical_Cnt" },
                { "data": "OP_ER_Cnt" },
                { "data": "Total_Cost" },
                { "data": "Medical_Cost" },
                //{ "data": "Rx_Cost" },
               // { "data": "High_Cost_50k" },
                { "data": "High_Cost_Driver" },
                { "data": "RxSpecialty_Drug" },
                { "data": "RxSpecialty_Disease_Desc" },
                { "data": "In_Home_Assessment_Status" },
               // { "data": "In_Home_Assessment_Status_date" },
                //{ "data": "BH_CM_Flag" },
                //{ "data": "BH_CM_Discharge_Dt" },
                { "data": "BH_CM_Discharge_Reason" },
                { "data": "HCBB_Eligible" },
                { "data": "HCBB_Engaged" },
                { "data": "month_name" },
                { "data": "for_year" }
                    ]
                } );

                $('#btn_search').click(function(){

                  var risk = $('#risk').val();
                  var year = $('#year').val();
                  var month = $('#month').val();
                  var searchresult = risk+' '+month+' '+year;
                  patientpanelalldataTable.search(searchresult).draw();
              
                })
             
            },2000);     
   
             
          })
          .catch(error => {
              console.log(error)
          })  

         
    }

  
  //End : Load json Data into the datatable (Patient all data[recent])

  

//End : Patient all data

//=================================================================================================//


//Start : Return Reporting

 //Start : Load json Data into the datatable (Return Reporting[recent])
 

 function returnreporting_data()
{
  var pcmhid=2
  var returnreportingdata ='{"returnreportingdatatype":"returnreporting","pcmhid":"'+pcmhid+'"}';
    fetch("https://apimsdcm.azure-api.net/PCMH/pcmhreports", {
      method: 'post',
     // mode: 'no-cors', // no-cors, *cors, same-origin

     headers: { 'Content-Type': 'application/json',
          "x-functions-key": "Y75v69weCc0+ZanTjf0jSihLRlZAOUJGRM8xTAbdDLMZdQiXYNiJfg==",
          "Ocp-Apim-Subscription-Key": "2584a9c08dd04aa49db05cbb265c9b91",
          // "subscription-key":"da91fd77-c908-4f23-9469-52acf3239a11"
          },
      body: returnreportingdata
  }).then((response) => {

                   if (response.ok) {
                  return response
              } else {
                  throw `update Looks like something went wrong. Status: ${response}`;
              }
          })
          .then(response => response.json())
          .then(data => {
              console.log("data: [" + JSON.stringify(data)+"]")
              returnreporting_data = JSON.stringify(data);
              
            setTimeout(function() {
              var reportingtableTable= $('#dt_recent_return_report').DataTable( {
              "aaData": JSON.parse(returnreporting_data),

              "aoColumnDefs": [ {
              "aTargets": 4,
              "adata": "BCBSRI_Risk_Categorization",
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
          { "data": "BH_Screening_PHQ2_PHQ9_Completed_Date" },
          { "data": "Care_Plan_Established_Date" },
          { "data": "Discharged_from_CM_Date" },
          { "data": "Status" },
          { "data": "month_name" },
          { "data": "for_year" }
                    ]
                } );

                $('#btn_search').click(function(){

                  var risk = $('#risk').val();
                  var year = $('#year').val();
                  var month = $('#month').val();
                  var searchresult = risk+' '+month+' '+year;
                  reportingtableTable.search(searchresult).draw();
              
                })

            },2000);     
   
             
          })
          .catch(error => {
              console.log(error)
          })  

         
    }


  //End : Load json Data into the datatable (Return Reporting[recent])

  

  //End : Return Reporting