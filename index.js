const express = require("express");
const app = express();
app.set("view engine", "ejs");

const itemsList = [
  {
    id: 1,
    name: "Item 1",
    price: 10.09,
  },
  {
    id: 2,
    name: "Item 2",
    price: 29.09,
  },
  {
    id: 3,
    name: "Item 3",
    price: 30.09,
  },
];

app.get("/", function (request, response) {
  //  request , response TO CE QUE JE RECOIS ET CE QUE J'ENVOIE
  response.render("home", {
    title: "hello from node",
    itemsList: itemsList,
  });
});
app.get("/items/:id", function (req, res) {
  //find item into itemsList with id=1    // Найти элемент в itemsList с указанным id
  //render with item (object)      // Отобразить представление с этим элементом (объектом)
  const id = Number(req.parems.id);
  console.log(id);
  const item = itemsList.find((item) => item.id === id);
  if (item) {
    res.render("single", {});
  } else {
    res.status(404).send("Item not found");
  }
});
app.get("/about", function (request, response) {
  response.send("this is about page from node");
});
app.listen(3000, function () {
  console.log("Serber iis running on port 3000");
});
