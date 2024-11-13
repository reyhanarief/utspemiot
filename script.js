fetch('http://localhost/hydroponic/getsummarydata.php')
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Terjadi kesalahan:', data.error);
            return;
        }

        document.getElementById('suhu_max').innerHTML = `<i class="fas fa-temperature-high"></i> Max Temperature: ${data.suhu_max}°C`;
        document.getElementById('suhu_min').innerHTML = `<i class="fas fa-temperature-low"></i> Min Temperature: ${data.suhu_min}°C`;
        document.getElementById('suhu_rata').innerHTML = `<i class="fas fa-thermometer-half"></i> Mean Temperature: ${data.suhu_rata}°C`;

        const suhuHumidList = document.getElementById('nilai_suhu_max_humid_max');

        data.nilai_suhu_max_humid_max.forEach(item => {
            const row = document.createElement('div');
            row.classList.add('data-row');
            
            row.innerHTML = `
                <div>${item.idx}</div>
                <div>${item.suhun}°C</div>
                <div>${item.humid}%</div>
                <div>${item.kecerahan}</div>
                <div>${item.timestamp}</div>
            `;
            
            suhuHumidList.appendChild(row);
        });

        const monthYearList = document.getElementById('month_year_max');
            data.month_year_max.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-calendar-alt"></i> Month/Year: ${item.month_year}`;
            monthYearList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Terjadi kesalahan saat mengambil data:', error);
    });