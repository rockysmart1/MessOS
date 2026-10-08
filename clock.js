function clock(){
            const currentTime = new Date().toLocaleTimeString();
            const currentDate = new Date().toLocaleDateString();
            const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

            const d = new Date();
            let name = month[d.getMonth()];
            //const month = new Date.toLocaleDateString('default', { month: 'long' });
            document.getElementById("dateDay").innerText = currentDate;
            document.getElementById("dateName").innerText = name;
            document.getElementById("dateTime").innerText = currentTime;
            setTimeout(clock, 1000);
          }
