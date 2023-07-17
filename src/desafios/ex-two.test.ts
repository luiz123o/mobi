import { CurrentObject, NewDataObject, updateData } from "./ex-two";

test("updateData correctly updates the object", () => {
  const currentObject: CurrentObject = {
    name: "Marcos",
    country: "Brasil",
    age: 22,
  };
  const newDataObject: NewDataObject = {
    country: "Japão",
    age: 33,
  };

  const updatedData = updateData(currentObject, newDataObject);

  expect(updatedData).toEqual({ name: "Marcos", country: "Japão", age: 33 });
});

test("does not include properties not present in currentObject", () => {
  const currentObject: CurrentObject = {
    name: "Rafael",
    country: "Chile",
    age: 42,
  };
  const newDataObject: NewDataObject = {
    name: "Camiseta Polo",
    price: 59.9,
    amount: 30,
  };

  const updatedData = updateData(currentObject, newDataObject);

  expect(updatedData).toEqual({
    name: "Camiseta Polo",
    country: "Chile",
    age: 42,
  });
});
