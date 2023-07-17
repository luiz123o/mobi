export type CurrentObject = {
  [key: string]: any;
};

export type NewDataObject = {
  [key: string]: any;
};

export function updateData(
  currentObject: CurrentObject,
  newDataObject: NewDataObject
): CurrentObject {
  const updatedData: CurrentObject = { ...currentObject };

  for (const key in newDataObject) {
    if (updatedData.hasOwnProperty(key)) {
      updatedData[key] = newDataObject[key];
    }
  }

  return updatedData;
}
