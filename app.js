

  function myfuncttion(){

    const  apiUrl = 'https://api.covid19api.com/summary';
    async function getISS() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);

//var Greece = data.Countries[65].Country;
      var Greece = data.Countries.find((item) => {
        return item.Country === "Greece"
      })
      var confirmed = Greece.NewConfirmed;
      var confirmedCases = Greece.TotalConfirmed;
      var newDeaths = Greece.NewDeaths;
      var totalDeaths = Greece.TotalDeaths;
      var newRecovered = Greece.NewRecovered;
      var totalRecovered = Greece.TotalRecovered;
      var day = Greece.Date;

      document.getElementById('todaysDate').innerHTML = `( ` + day + ` )`;
      document.getElementById('sick').innerHTML = confirmed;
      document.getElementById('totalCases').innerHTML = `( ` + confirmedCases + ` )`;
      document.getElementById('recovered').innerHTML = newRecovered;
      document.getElementById('totalRecovers').innerHTML = `( ` + totalRecovered + ` )`;
      document.getElementById('dead').innerHTML = newDeaths;
      document.getElementById('totalDeaths').innerHTML = `( ` + totalDeaths + ` )`;

      
      
    }
    getISS();
  }
  


