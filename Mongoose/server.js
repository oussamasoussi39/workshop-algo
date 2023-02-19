const mongoose = require("mongoose");


require("dotenv").config({ path: "./mongo.env" });
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO, () => console.log("databaseCreated"));

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: {
    type: [String],
    default: ["Lasagna"],
  },
});

const person = mongoose.model("person", schema);

const newPerson = new person({
  name: "John",
  age: 30,
  favoriteFoods: ["Pizza", "Burger"],
});

newPerson.save((err, doc) => {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
});

const arrayOfPeople = [
  { name: "Alex", age: 37 },
  { name: "Sarah", age: 25, favoriteFoods: ["Burritos", "Tiramisu"] },
  { name: "Mike", age: 35, favoriteFoods: ["Pizza", "Sushi"] },
  { name: "Mary", age: 25 },
];

person.create(arrayOfPeople, function (error, people) {
  if (error) {
    console.error(error);
  } else {
    console.log(people);
  }
});

person.find({ name: "John" }, function (err, people) {
  if (err) {
    console.log(err);
  } else {
    console.log(people, "findbyname");
  }
});
person.findOne({ favoriteFoods: { $in: ["Sushi"] } }, function (err, people) {
  if (err) {
    console.log(err);
  } else {
    console.log(people, "Find one");
  }
});

person.findById({ _id: "63f17625a6358255dc1eb44a" }, function (err, people) {
  if (err) {
    console.log(err);
  } else {
    console.log(people, "id");
  }
});
person.findById({ _id: "63f1764ad7bad55daee5da68" }, (err, person) => {
  if (err) {
    console.error("Error finding person:", err);
  } else {
    console.log("Found person:", person);
    person.favoriteFoods.push("Hamburger"); // add "hamburger" to the person's favoriteFoods array
    person.markModified("favoriteFoods"); // mark the favoriteFoods array as edited (if necessary)
    person.save((err, updatedPerson) => {
      // save the updated person
      if (err) {
        console.error("Error saving person:", err);
      } else {
        console.log("Saved updated person:", updatedPerson);
      }
    });
  }
});

person .findOneAndUpdate({ name: "Alex" }, { age: 20 }, { new: true })
  .exec()
  .then((updatedPerson) => {
    console.log("Updated person:///", updatedPerson);
    return updatedPerson;
  })
  .catch((error) => {
    console.error("Error updating person:", error);
    throw error;
  });

person.findByIdAndRemove("63f1768d8c7b1747e4c33a22")
  .exec()
  .then((removedPerson) => {
    console.log("Removed person:////", removedPerson);
    return removedPerson;
  })
  .catch((error) => {
    console.error("Error removing person:", error);
    throw error;
  });
  person.remove({ name: "Mary" }, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log(response);
    }
  });
  person
  .find({ favoriteFoods: "Burritos" })
  .sort({ name: 1 })
  .limit(2)
  .select("-age")
  .exec(function done(err, data)  {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
