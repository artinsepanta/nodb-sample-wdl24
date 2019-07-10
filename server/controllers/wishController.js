const wishes = [
  {
    name: "Germany",
    image:
      "https://1dib1q3k1s3e11a5av3bhlnb-wpengine.netdna-ssl.com/wp-content/uploads/2013/04/cochem-town-germany.jpg"
  }
];

const getWishes = (req, res) => {
  res.json(wishes);
};

const addWish = (req, res) => {
  const { name, image } = req.body;
  if (!name || !image) {
    return res.status(417).json("Name and image are required");
  }
  wishes.push({ name, image: image });
  res.json(wishes);
};

const updateWish = (req, res) => {
  const { name } = req.params;
  const selectedElement = wishes.find(wish => wish.name === name);
  selectedElement.name = req.body.name;
  res.json(wishes);
};

module.exports = {
  getWishes,
  addWish,
  updateWish
};
