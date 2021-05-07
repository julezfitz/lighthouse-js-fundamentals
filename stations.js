const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// stations = [
//   ['A', 10, 'school'],
//   ['B', 9, 'restaurant'],
//   ['C', 21, 'community centre'],
//   ['D', 15, 'school'],
//   ['E', 50, 'restaurant'],
//   ['F', 20, 'school'],
//   ['G', 40, 'community centre'],
//   ['H', 50, 'school'],
// ]


function chooseStations() {
  let goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    const type = station[2];
    if (capacity >= 20) {
      if ((type === "school") || (type === "community centre")) {
        console.log(station[0]);
        goodStations.push(station[0]);
      }

    }
  }
  return goodStations;
}

chooseStations(stations);

