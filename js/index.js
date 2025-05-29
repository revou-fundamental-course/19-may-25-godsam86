// fungsi konversi suhu
    function convert() {
      const input = document.getElementById("input").value.trim();
      const scale = document.getElementById("scale").value;
      const resultDiv = document.getElementById("result");
      const errorDiv = document.getElementById("error");

      // validasi input suhu
      if (input === "" || isNaN(input)) {
        resultDiv.style.display = "none";
        errorDiv.innerText = "⚠️ Masukkan angka suhu yang valid.";
        return;
      }

      errorDiv.innerText = "";
      const temp = parseFloat(input);
      let c, f, k;
      let rumus = "";

      // proses berdasarkan skala
      if (scale === "C") {
        c = temp;
        f = (temp * 9 / 5) + 32;
        k = temp + 273.15;
        rumus = `
          Fahrenheit = (${temp} × 9/5) + 32 = ${f.toFixed(2)} °F<br>
          Kelvin = ${temp} + 273.15 = ${k.toFixed(2)} K
        `;
      } else if (scale === "F") {
        f = temp;
        c = (temp - 32) * 5 / 9;
        k = c + 273.15;
        rumus = `
          Celsius = (${temp} - 32) × 5/9 = ${c.toFixed(2)} °C<br>
          Kelvin = ${c.toFixed(2)} + 273.15 = ${k.toFixed(2)} K
        `;
      } else if (scale === "K") {
        k = temp;
        c = temp - 273.15;
        f = (c * 9 / 5) + 32;
        rumus = `
          Celsius = ${temp} - 273.15 = ${c.toFixed(2)} °C<br>
          Fahrenheit = (${c.toFixed(2)} × 9/5) + 32 = ${f.toFixed(2)} °F
        `;
      }

      // menampilkan hasil
      resultDiv.innerHTML = `
        <strong>Hasil Konversi:</strong><br>
        Celsius: ${c.toFixed(2)} °C<br>
        Fahrenheit: ${f.toFixed(2)} °F<br>
        Kelvin: ${k.toFixed(2)} K<br><br>
        <strong>Rumus Perhitungan:</strong><br>
        ${rumus}
      `;
      resultDiv.style.display = "block";
    }

    //  reverse skala suhu
    function reverse() {
      const scale = document.getElementById("scale");
      const options = ["C", "F", "K"];
      const current = scale.value;
      const next = options[(options.indexOf(current) + 1) % options.length];
      scale.value = next;
    }

    // reset semua input dan hasil
    function resetAll() {
      document.getElementById("input").value = "";
      document.getElementById("scale").value = "C";
      document.getElementById("result").style.display = "none";
      document.getElementById("error").innerText = "";
    }