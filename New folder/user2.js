var res = {
  results: [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Jacob",
        last: "Ek",
      },
      location: {
        street: {
          number: 6386,
          name: "Tokerudberget", //  res.results[0].location.street.name
        },
        city: "Finnbråtan",
        state: "Akershus",
        country: "Norway",
        postcode: "1089",
        coordinates: {
          latitude: "53.7148",
          longitude: "-7.6550",
        },
        timezone: {
          offset: "0:00",
          description: "Western Europe Time, London, Lisbon, Casablanca",
        },
      },
      email: "jacob.ek@example.com",
      login: {
        uuid: "626ae20d-26b8-4618-8039-f067d07d108e",
        username: "bluemeercat983",
        password: "909090",
        salt: "kBUGxgFq",
        md5: "27a0d2ebcbba25b2dcc6724858e08b3e",
        sha1: "ac0d3c8eec0773f60802c3ddeabf934cc27371bc",
        sha256:
          "8b0a139988d1c83bfa34392418b1f2e11ed60041520c95ae862a24bbd32c0742",
      },
      dob: {
        date: "1944-08-29T03:33:50.110Z",
        age: 77,
      },
      registered: {
        date: "2009-02-05T15:21:23.044Z",
        age: 12,
      },
      phone: "70480058",
      cell: "42749760",
      id: {
        name: "FN",
        value: "29084420792",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/45.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/45.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
      },
      nat: "NO",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Encarnacion",
        last: "Morales",
      },
      location: {
        street: {
          number: 1524,
          name: "Ronda de Toledo",
        },
        city: "Hospitalet de Llobregat",
        state: "Castilla y León",
        country: "Spain",
        postcode: 43910,
        coordinates: {
          latitude: "-67.8214",
          longitude: "-86.5139",
        },
        timezone: {
          offset: "-12:00",
          description: "Eniwetok, Kwajalein",
        },
      },
      email: "encarnacion.morales@example.com",
      login: {
        uuid: "b7fb9091-6a59-4b02-b556-b8b1ac777b58",
        username: "silverfrog562",
        password: "jason",
        salt: "QGTeQWCC",
        md5: "ede586a99bc9736588f3f2e920c9a7b2",
        sha1: "e1a3f170557f9f6955bb81e808efa4e52e79d84b",
        sha256:
          "603f55ba3bb064488a6ff2988b4aed8dd754e44df8f356a604d3f7e870e64216",
      },
      dob: {
        date: "1957-05-22T14:09:49.208Z",
        age: 64,
      },
      registered: {
        date: "2018-04-15T17:59:09.842Z",
        age: 3,
      },
      phone: "920-051-595",
      cell: "694-912-087",
      id: {
        name: "DNI",
        value: "39017133-R",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/23.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/23.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/23.jpg",
      },
      nat: "ES",
    },
  ],
};

console.log(res.results[1].name.first);
console.log(res.results[0].location.street.name1);
