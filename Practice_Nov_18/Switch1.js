function matchCase(item) {
  var data = {
    Mobile: {
      name1: "Apple",
      name2: "SamSung",
      name3: "oppo",
    },
    Tv: {
      name1: "LG",
      name2: "Videocon",
      name3: "Samsung Tv",
    },
    foodItem: {
      name1: "Pizza", //   mobile or tv or fooditem
      name2: "Burger",
      name3: "Cold Drinks",
    },
  };

  switch (
    item //LG
  ) {
    case data.Mobile.name1: //Apple
      console.log("This is Mobile Brand");
      break;

    case data.Mobile.name2:
      console.log("This is Mobile Brand");
      break;

    case data.Tv.name1: //LG
      console.log("Its is Tv Brand");
      break;

    case data.foodItem.name1:
      console.log("It is a Food Item");
      break;

    default:
      console.log("Data is not Matching");
  }
}

matchCase("apple");
