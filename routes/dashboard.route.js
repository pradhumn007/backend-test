const { authMiddleware } = require("../middleware/auth.middleware");

const router = require("express").Router();

router.post("/chart", authMiddleware, (req, res) => {
  const data = [
    {
      name: "Jan",
      buy: 4000,
      sell: 2400,
    },
    {
      name: "Feb",
      buy: 3000,
      sell: 1398,
    },
    {
      name: "Mar",
      buy: 2000,
      sell: 9800,
    },
    {
      name: "Apr",
      buy: 2780,
      sell: 3908,
    },
    {
      name: "May",
      buy: 1890,
      sell: 4800,
    },
    {
      name: "Jun",
      buy: 2390,
      sell: 3800,
    },
    {
      name: "Jul",
      buy: 3490,
      sell: 4300,
    },
  ];

  res.status(200).json({ data });
});

router.post("/table", authMiddleware, (req, res) => {
  function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
  }

  const rows = [
    createData(
      0,
      "16 Mar, 2019",
      "Elvis Presley",
      "Tupelo, MS",
      "VISA ⠀•••• 3719",
      312.44
    ),
    createData(
      1,
      "16 Mar, 2019",
      "Paul McCartney",
      "London, UK",
      "VISA ⠀•••• 2574",
      866.99
    ),
    createData(
      2,
      "16 Mar, 2019",
      "Tom Scholz",
      "Boston, MA",
      "MC ⠀•••• 1253",
      100.81
    ),
    createData(
      3,
      "16 Mar, 2019",
      "Michael Jackson",
      "Gary, IN",
      "AMEX ⠀•••• 2000",
      654.39
    ),
    createData(
      4,
      "15 Mar, 2019",
      "Bruce Springsteen",
      "Long Branch, NJ",
      "VISA ⠀•••• 5919",
      212.79
    ),
  ];

  res.status(200).json({ data: rows });
});

module.exports = router;
