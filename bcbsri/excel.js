let selectedFile;
console.log(window.XLSX);
document.getElementById('upload_spreadsheet').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
    
})

let data=[{
    
}]

var result = {};
document.getElementById('submit').addEventListener("click", () => {
    XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
         console.log(workbook);
         workbook.SheetNames.forEach(sheet => {
            var rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
              console.log(rowObject);
              if (rowObject.length) result[sheet] = rowObject;
             // document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
         });
         document.getElementById("jsondata").innerHTML = JSON.stringify(result,undefined,4)
        }
    }
});