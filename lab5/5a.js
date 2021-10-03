const mushroom = {
  name: "Amanita Muscaria",
  genus: "Amanita",
  gills: "Ridged",
  id: 0,
  printFullInfo: () => {
    console.log("Amanita Muscaria, Amanita, Ridged");
  },
  setName: (newName) => {
    this.name = newName;
  },
  getGills: () => {
    return this.gills;
  },
};

const checkMushroom = (shroom) => {
  console.log(`id: ${shroom.id} | ${typeof shroom.id}`);
  console.log(`Name: ${shroom.name} | ${typeof shroom.name}`);
  console.log(`Genus: ${shroom.genus} | ${typeof shroom.genus}`);
  console.log(`Gills: ${shroom.gills} | ${typeof shroom.gills}`);
  console.log(`printFullInfo: ${typeof shroom.printFullInfo}`);
  console.log(`setName: ${typeof shroom.setName}`);
  console.log(`getGills: ${typeof shroom.getGills}`);
};

checkMushroom(mushroom);
