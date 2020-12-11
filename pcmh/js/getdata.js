//Start : Demographics
  //Start : Load json Data into the datatable (Demographics)
  var logged_in_userid=sessionStorage.getItem("userid");
  var usertype=sessionStorage.getItem("usertype");
  var pcmhid=sessionStorage.getItem("pcmhid");
  demographics_data()
  conditionsandrisk_data()
  costandutilization_data()
  bcbsriprogram_data()
  patient_all_data()
  returnreporting_data()

 

  function demographics_data()
  {
    var logged_in_userid=sessionStorage.getItem("userid");
  var usertype=sessionStorage.getItem("usertype");
  var pcmhid=sessionStorage.getItem("pcmhid");

  var month =document.getElementById('month').value;
      var year =document.getElementById('year').value;
      var risk =document.getElementById('risk').value;

    document.getElementById("loader").style.display = "block";
    $.fn.dataTable.ext.errMode = 'throw';
    var demographicsdata ='{"demographicsdatatype":"demographics","logged_in_userid":"'+logged_in_userid+'","usertype":"'+usertype+'","pcmhid":"'+pcmhid+'","month":"'+month+'","year":"'+year+'","risk":"'+risk+'"}';
   
   
                
              setTimeout(function() {
                var demographicsTable= $('#dt_recent_demographics').DataTable( {
                // "aaData": JSON.parse(review_return_filedata),
               
                "paging": true,  
                "ordering": true,  
                "filter": true,  
                "destroy": true,  
                "pageLength": 10,
                "orderMulti": false,  
                "serverSide": true,  
                "processing": true, 
                "searching": true,
                ajax: {
                    url: 'https://apimsdcm.azure-api.net/PCMH/pcmhreports',
                    dataType: "JSON",
                    type: 'POST',
                    data:jQuery.parseJSON(demographicsdata),
                    dataFilter: function(data){
                      console.log("demographicsdata==== "+data);
                      $('#dt_recent_demographics').show();
                        var json = jQuery.parseJSON( data );
                        json.recordsTotal = json.recordsTotal;
                        json.recordsFiltered = json.recordsFiltered;
                        json.data = json.data;
            
                        console.log("jsondemographicsdata==== "+JSON.stringify( json ));

                        return JSON.stringify( json ); // return JSON string
                    },
                    error: function (xhr, error, code)
                    {
                        console.log("vxxxxx=== "+xhr);
                        console.log(code);
                        $('#dt_recent_demographics_processing').hide();
                        $('#dt_recent_demographics').hide();
                        $('#dt_recent_demographics_info').show();
                       
                        document.getElementById('dt_recent_demographics_info').innerHTML="No Data Available"

                       //  json_encode(array('data'=>''));
                      //  var json = jQuery.parseJSON( data );
                      //   json.recordsTotal = 0;
                      //   json.recordsFiltered = 0;
                      //   json.data = 'No data Found';
                      //   //  var json ='No data Found'
                      //    return JSON.stringify(json) ;
                    }
                    },

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
                    document.getElementById("loader").style.display = "block";
                    setTimeout(function() {
                      var month_number = $('#month').val();
                      var  months_names_array = ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                      var month=months_names_array[month_number];
                      var risk = $('#risk').val();
                      var year = $('#year').val();
                      
                      var searchresult = risk+' '+month+' '+year;
                      demographicsTable.search(searchresult).draw();
                      document.getElementById("loader").style.display = "none";
                    },1000);  
                  })
                  document.getElementById("loader").style.display = "none";
              },2000);     
     
              
            // })
            // .catch(error => {
            //     console.log(error)
            // })  

            
  }

  function conditionsandrisk_data()
  {
    var logged_in_userid=sessionStorage.getItem("userid");
  var usertype=sessionStorage.getItem("usertype");
  var pcmhid=sessionStorage.getItem("pcmhid");
  document.getElementById("loader").style.display = "block";
  var month =document.getElementById('monthrisk').value;
      var year =document.getElementById('yearrisk').value;
      var risk =document.getElementById('condrisk').value;

  $.fn.dataTable.ext.errMode = 'throw';
    var conditionsandriskdata ='{"conditionsandriskype":"conditionsandrisk","logged_in_userid":"'+logged_in_userid+'","usertype":"'+usertype+'","pcmhid":"'+pcmhid+'","month":"'+month+'","year":"'+year+'","risk":"'+risk+'"}';
     console.log("conditionsandriskdata=== "+conditionsandriskdata);
                
              setTimeout(function() {
                var conditionsandriskTable= $('#dt_recent_conditionsandrisk').DataTable( {
                  "paging": true,  
                "ordering": true,  
                "filter": true,  
                "destroy": true,  
                "pageLength": 10,
                "orderMulti": false,  
                "serverSide": true,  
                "processing": true, 
                "searching": true,
                ajax: {
                    url: 'https://apimsdcm.azure-api.net/bcbsri/conditionsandrisks',
                    dataType: "JSON",
                    type: 'POST',
                    data:jQuery.parseJSON(conditionsandriskdata),
                    dataFilter: function(data){
                      console.log("conditionsandriskdata==== "+data);
                      $('#dt_recent_conditionsandrisk').show();
                        var json = jQuery.parseJSON( data );
                        json.recordsTotal = json.recordsTotal;
                        json.recordsFiltered = json.recordsFiltered;
                        json.data = json.data;
            
                        console.log("JSONconditionsandriskdata==== "+JSON.stringify( json ));
                        document.getElementById("loader").style.display = "none";
                        return JSON.stringify( json ); // return JSON string
                    } ,
                    error: function (xhr, error, code)
                    {
                      document.getElementById("loader").style.display = "none";
                        console.log("vxxxxx=== "+xhr);
                        console.log(code);
                        $('#dt_recent_conditionsandrisk_processing').hide();
                        $('#dt_recent_conditionsandrisk').hide();
                        $('#dt_recent_conditionsandrisk_info').show();
                       
                        document.getElementById('dt_recent_conditionsandrisk_info').innerHTML="No Data Available"
                       
                       //  json_encode(array('data'=>''));
                      //  var json = jQuery.parseJSON( data );
                      //   json.recordsTotal = 0;
                      //   json.recordsFiltered = 0;
                      //   json.data = 'No data Found';
                      //   //  var json ='No data Found'
                      //    return JSON.stringify(json) ;
                    }
                    },

                "aaSorting": [],

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
  
                    var month_number = $('#month').val();
                      var  months_names_array = ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                      var month=months_names_array[month_number];
                      var risk = $('#risk').val();
                      var year = $('#year').val();
                    var searchresult = risk+' '+month+' '+year;
                    conditionsandriskTable.search(searchresult).draw();
                
                  })

              },2000);     
     
               
           
            
  }

  function costandutilization_data()
{
  var logged_in_userid=sessionStorage.getItem("userid");
  var usertype=sessionStorage.getItem("usertype");
  var pcmhid=sessionStorage.getItem("pcmhid");
  document.getElementById("loader").style.display = "block";
  var month =document.getElementById('monthcost').value;
      var year =document.getElementById('yearcost').value;
      var risk =document.getElementById('riskcost').value;

  $.fn.dataTable.ext.errMode = 'throw';
  var costandutilizationkdata ='{"costandutilizationtype":"costandutilizationtype","logged_in_userid":"'+logged_in_userid+'","usertype":"'+usertype+'","pcmhid":"'+pcmhid+'","month":"'+month+'","year":"'+year+'","risk":"'+risk+'"}';
    
              
            setTimeout(function() {
              var costandutilizationTable= $('#dt_recent_costandutilization').DataTable( {
                "paging": true,  
                "ordering": true,  
                "filter": true,  
                "destroy": true,  
                "pageLength": 10,
                "orderMulti": false,  
                "serverSide": true,  
                "processing": true, 
                "searching": true,
                ajax: {
                    url: 'https://apimsdcm.azure-api.net/bcbsri/costandutilization',
                    dataType: "JSON",
                    type: 'POST',
                    data:jQuery.parseJSON(costandutilizationkdata),
                    dataFilter: function(data){
                      console.log("conditionsandriskdata==== "+data);
                      $('#dt_recent_costandutilization').show();
                        var json = jQuery.parseJSON( data );
                        json.recordsTotal = json.recordsTotal;
                        json.recordsFiltered = json.recordsFiltered;
                        json.data = json.data;
            
                        console.log("JSONconditionsandriskdata==== "+JSON.stringify( json ));
                        document.getElementById("loader").style.display = "none";
                        return JSON.stringify( json ); // return JSON string
                    },
                    error: function (xhr, error, code)
                    {
                      document.getElementById("loader").style.display = "none";
                        console.log("vxxxxx=== "+xhr);
                        console.log(code);
                        $('#dt_recent_costandutilization_processing').hide();
                        $('#dt_recent_costandutilization').hide();
                        $('#dt_recent_costandutilization_info').show();
                       
                        document.getElementById('dt_recent_costandutilization_info').innerHTML="No Data Available"
                     
                       //  json_encode(array('data'=>''));
                      //  var json = jQuery.parseJSON( data );
                      //   json.recordsTotal = 0;
                      //   json.recordsFiltered = 0;
                      //   json.data = 'No data Found';
                      //   //  var json ='No data Found'
                      //    return JSON.stringify(json) ;
                    }
                    },
              "aaSorting": [],

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

                  var month_number = $('#month').val();
                      var  months_names_array = ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                      var month=months_names_array[month_number];
                      var risk = $('#risk').val();
                      var year = $('#year').val();
                  var searchresult = risk+' '+month+' '+year;
                  costandutilizationTable.search(searchresult).draw();
              
                })
             
            },2000);     
   
          
    }

    function bcbsriprogram_data()
{
  var logged_in_userid=sessionStorage.getItem("userid");
  var usertype=sessionStorage.getItem("usertype");
  var pcmhid=sessionStorage.getItem("pcmhid");
  document.getElementById("loader").style.display = "block";
  var month =document.getElementById('monthbcbsri').value;
      var year =document.getElementById('yearbcbsri').value;
      var risk =document.getElementById('riskbcbsri').value;

  $.fn.dataTable.ext.errMode = 'throw';
  var bcbsriprogramdata ='{"bcbsriprogramtype":"bcbsriprogram","logged_in_userid":"'+logged_in_userid+'","usertype":"'+usertype+'","pcmhid":"'+pcmhid+'","month":"'+month+'","year":"'+year+'","risk":"'+risk+'"}';
                 
            setTimeout(function() {
              var bcbsriprogramTable= $('#dt_recent_bcbsriprogram').DataTable( {
                "paging": true,  
                 "ordering": true,  
                 "filter": true,  
                 "destroy": true,  
                 "pageLength": 10,
                 "orderMulti": false,  
                 "serverSide": true,  
                 "processing": true, 
                 "searching": true,
                 ajax: {
                    url: 'https://apimsdcm.azure-api.net/bcbsri/bcbsriprograms',
                    dataType: "JSON",
                    type: 'POST',
                    data:jQuery.parseJSON(bcbsriprogramdata),
                    dataFilter: function(data){
                      console.log("conditionsandriskdata==== "+data);
                      $('#dt_recent_bcbsriprogram').show();
                        var json = jQuery.parseJSON( data );
                        json.recordsTotal = json.recordsTotal;
                        json.recordsFiltered = json.recordsFiltered;
                        json.data = json.data;
            
                        console.log("JSONconditionsandriskdata==== "+JSON.stringify( json ));
                        document.getElementById("loader").style.display = "none";
                        return JSON.stringify( json ); // return JSON string
                    },
                    error: function (xhr, error, code)
                    {
                      document.getElementById("loader").style.display = "none";
                        console.log("vxxxxx=== "+xhr);
                        console.log(code);
                        $('#dt_recent_bcbsriprogram_processing').hide();
                        $('#dt_recent_bcbsriprogram').hide();
                        $('#dt_recent_bcbsriprogram_info').show();
                       
                        document.getElementById('dt_recent_bcbsriprogram_info').innerHTML="No Data Available"
                     
                       //  json_encode(array('data'=>''));
                      //  var json = jQuery.parseJSON( data );
                      //   json.recordsTotal = 0;
                      //   json.recordsFiltered = 0;
                      //   json.data = 'No data Found';
                      //   //  var json ='No data Found'
                      //    return JSON.stringify(json) ;
                    }
                    },
              "aaSorting": [],

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

                  var month_number = $('#month').val();
                      var  months_names_array = ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                      var month=months_names_array[month_number];
                      var risk = $('#risk').val();
                      var year = $('#year').val();
                  var searchresult = risk+' '+month+' '+year;
                  bcbsriprogramTable.search(searchresult).draw();
              
                })

            },2000);     
   
             
        

         
    }

    function patient_all_data()
{
  var logged_in_userid=sessionStorage.getItem("userid");
  var usertype=sessionStorage.getItem("usertype");
  var pcmhid=sessionStorage.getItem("pcmhid");
  document.getElementById("loader").style.display = "block";
  var month =document.getElementById('monthpatient').value;
      var year =document.getElementById('yearpatient').value;
      var risk =document.getElementById('riskpatient').value;

  $.fn.dataTable.ext.errMode = 'throw';
  var patient_alldata ='{"patientalldatatype":"patientalldata","logged_in_userid":"'+logged_in_userid+'","usertype":"'+usertype+'","pcmhid":"'+pcmhid+'","month":"'+month+'","year":"'+year+'","risk":"'+risk+'"}';
    
            setTimeout(function() {
              var patientpanelalldataTable= $('#dt_recent_patientpanelalldata').DataTable( {
                "paging": true,  
                 "ordering": true,  
                 "filter": true,  
                 "destroy": true,  
                 "pageLength": 10,
                 "orderMulti": false,  
                 "serverSide": true,  
                 "processing": true, 
                 "searching": true,
                 ajax: {
                    url: 'https://apimsdcm.azure-api.net/bcbsri/patientpanelalldata',
                    dataType: "JSON",
                    type: 'POST',
                    data:jQuery.parseJSON(patient_alldata),
                    dataFilter: function(data){
                      console.log("conditionsandriskdata==== "+data);
                      $('#dt_recent_patientpanelalldata').show();
                        var json = jQuery.parseJSON( data );
                        json.recordsTotal = json.recordsTotal;
                        json.recordsFiltered = json.recordsFiltered;
                        json.data = json.data;
            
                        console.log("JSONconditionsandriskdata==== "+JSON.stringify( json ));
                        document.getElementById("loader").style.display = "none";
                        return JSON.stringify( json ); // return JSON string
                    },
                    error: function (xhr, error, code)
                    {
                      document.getElementById("loader").style.display = "none";
                        console.log("vxxxxx=== "+xhr);
                        console.log(code);
                        $('#dt_recent_patientpanelalldata_processing').hide();
                        $('#dt_recent_patientpanelalldata').hide();
                           $('#dt_recent_patientpanelalldata_info').show();
                          
                           document.getElementById('dt_recent_patientpanelalldata_info').innerHTML="No Data Available"
                         
                       //  json_encode(array('data'=>''));
                      //  var json = jQuery.parseJSON( data );
                      //   json.recordsTotal = 0;
                      //   json.recordsFiltered = 0;
                      //   json.data = 'No data Found';
                      //   //  var json ='No data Found'
                      //    return JSON.stringify(json) ;
                    }
                    },
              "aaSorting": [],

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

                  var month_number = $('#month').val();
                      var  months_names_array = ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                      var month=months_names_array[month_number];
                      var risk = $('#risk').val();
                      var year = $('#year').val();
                  var searchresult = risk+' '+month+' '+year;
                  patientpanelalldataTable.search(searchresult).draw();
              
                })
             
            },2000);     
   
          

         
    }

    function returnreporting_data()
{
  var logged_in_userid=sessionStorage.getItem("userid");
  var usertype=sessionStorage.getItem("usertype");
  var pcmhid=sessionStorage.getItem("pcmhid");
  document.getElementById("loader").style.display = "block";
  var month =document.getElementById('monthreturn').value;
      var year =document.getElementById('yearreturn').value;
      var risk =document.getElementById('riskreturn').value;

  $.fn.dataTable.ext.errMode = 'throw';
  var returnreportingdata ='{"returnreportingdatatype":"returnreporting","logged_in_userid":"'+logged_in_userid+'","usertype":"'+usertype+'","pcmhid":"'+pcmhid+'","month":"'+month+'","year":"'+year+'","risk":"'+risk+'"}';
              
            setTimeout(function() {
              var reportingtableTable= $('#dt_recent_return_report').DataTable( {
                "paging": true,  
                 "ordering": true,  
                 "filter": true,  
                 "destroy": true,  
                 "pageLength": 10,
                 "orderMulti": false,  
                 "serverSide": true,  
                 "processing": true, 
                 "searching": true,
                 ajax: {
                    url: 'https://apimsdcm.azure-api.net/bcbsri/returnreporting',
                    dataType: "JSON",
                    type: 'POST',
                    data:jQuery.parseJSON(returnreportingdata),
                    dataFilter: function(data){
                      console.log("conditionsandriskdata==== "+data);
                      $('#dt_recent_return_report').show();
                        var json = jQuery.parseJSON( data );
                        json.recordsTotal = json.recordsTotal;
                        json.recordsFiltered = json.recordsFiltered;
                        json.data = json.data;
            
                        console.log("JSONconditionsandriskdata==== "+JSON.stringify( json ));
                        document.getElementById("loader").style.display = "none";
                        return JSON.stringify( json ); // return JSON string
                    }
                    ,
                    error: function (xhr, error, code)
                    {
                        console.log("vxxxxx=== "+xhr);
                        document.getElementById("loader").style.display = "none";
                        console.log(code);
                        $('#dt_recent_return_report_processing').hide();
                        $('#dt_recent_return_report').hide();
                        $('#dt_recent_return_report_info').show();
                       
                        document.getElementById('dt_recent_return_report_info').innerHTML="No Data Available"
                     
                       //  json_encode(array('data'=>''));
                      //  var json = jQuery.parseJSON( data );
                      //   json.recordsTotal = 0;
                      //   json.recordsFiltered = 0;
                      //   json.data = 'No data Found';
                      //   //  var json ='No data Found'
                      //    return JSON.stringify(json) ;
                    }
                    },
              "aaSorting": [],

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

                  var month_number = $('#month').val();
                  var  months_names_array = ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                  var month=months_names_array[month_number];
                  var risk = $('#risk').val();
                  var year = $('#year').val();
                  var searchresult = risk+' '+month+' '+year;
                  reportingtableTable.search(searchresult).draw();
              
                })

            },2000);     
   
             
         
         
    }


  //End : Load json Data into the datatable (Return Reporting[recent])

  

  //End : Return Reporting