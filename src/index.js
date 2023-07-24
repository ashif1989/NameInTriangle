let typeNameInTriangle = (name) => {
  for (let i = 0; i < name.length; i++) {
    let namesplit = "";
    let count = i;
    for (let j = i; j < name.length - i; j++) {
      while (count > 0) {
        namesplit += " ";
        count--;
      }
      namesplit += name[j];
    }
    console.log(namesplit);
  }
};

typeNameInTriangle("Mohamed");
