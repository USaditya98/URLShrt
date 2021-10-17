document.getElementById("myYearFactButton").addEventListener("click", myYearFactFunction);
// document.getElementById("copy").addEventListener("click", copyFunction);
    function myYearFactFunction(){
      var value = document.getElementById('yearFactValue').value;
      const api_url = " https://api.shrtco.de/v2/shorten?url="+value;
      async function getapi(url) {
          const response = await fetch(url,{"method": "GET"});
      var data = await response.json();
      console.log(data.result);
      if (response) {
        show(data);
      }
    }
    getapi(api_url);
    function show(data) {
    let tab = `<div class='text-left' style='font-weight:bold;letter-spacing:2px'></div>`;
        tab += `<div>
                <div  style='padding:1rem;font-weight:bold;letter-spacing:2px'><a>${data.result.full_short_link}</a> </div>
                <div  style='padding:1rem;font-weight:bold;letter-spacing:2px'><a>${data.result.full_short_link2}</a></div>
                <div  style='padding:1rem;font-weight:bold;letter-spacing:2px'><a>${data.result.full_short_link3}</a></div>
                <div  style='padding:1rem;font-weight:bold;letter-spacing:2px'><a>${data.result.short_link}</a></div>
                <div  style='padding:1rem;font-weight:bold;letter-spacing:2px'><a>${data.result.short_link2}</a></div>
                <div  style='padding:1rem;font-weight:bold;letter-spacing:2px'><a>${data.result.short_link3}</a></div>
                </div>`;
                document.getElementById("tableData").innerHTML = tab;
    }
  }
