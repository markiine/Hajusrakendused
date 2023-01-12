const myCars = [
    {
      Car: {
        Color: "Rose red",
        "Tinted windows": false,
        Wheels: 4,
        "Roof cargo": null,
        Entertainment: [
          "FM Radio",
          " MP3, MP4 and MKV player",
          " harman/kardon speakers"
        ],
        Accessories: ["satnav", " cruise control"]
      }
    },
    {
      Car: {
        Color: "Navy Blue",
        "Tinted windows": true,
        Wheels: 4,
        "Roof cargo": "Thule",
        Entertainment: [
          "FM Radio",
          " Apple CarPlay/Android Auto",
          " Bowers & Wilkins Premium Sound speakerss"
        ],
        Accessories: ["self drive system", " luggage cover"]
      }
    }
  ];
  
  let result = `
  <div id-"json">
    <h1>Car properties</h1>`;
  
  myCars.forEach((element) => {
    result += `
    <h2>Car</h2>
    <p>Color: ${element.Car.Color}</p>
    <p>Tinted windows: ${element.Car["Tinted windows"]}</p>
    <p>Wheels: ${element.Car.Wheels}</p>
    <p>Roof cargo: ${element.Car["Roof cargo"]}</p>
    <p>Entertainment: ${element.Car.Entertainment}</p>
    <p>Accessories: ${element.Car.Accessories}</p>
    `;
  });
  
  result += `</div>`;
  
  document.getElementById("app").innerHTML = result;
  