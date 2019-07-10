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

module.exports = {
  getWishes
};
