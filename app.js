

  function myfuncttion(){

    const  apiUrl = 'https://api.covid19api.com/summary';
    async function getISS() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);

      var Greece = data.Countries[65].Country;
      var confirmed = data.Countries[65].NewConfirmed;
      var confirmedCases = data.Countries[65].TotalConfirmed;
      var newDeaths = data.Countries[65].NewDeaths;
      var totalDeaths = data.Countries[65].TotalDeaths;
      var newRecovered = data.Countries[65].NewRecovered;
      var totalRecovered = data.Countries[65].TotalRecovered;
      var day = data.Countries[65].Date;

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
  


