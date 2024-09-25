/* get items to the localStorage */
function getItems(name) {
  const savedItems = localStorage.getItem(name);
  if (name === "donationId") {
    if (savedItems) {
      return JSON.parse(savedItems);
    }
    return [];
  } else if (name === "donationAmount") {
    if (savedItems) {
      return JSON.parse(savedItems);
    }
    return 0;
  }
}
/* save item in the localStorage */
function saveThisItem(name, getId, getPrice) {
  const prevIds = getItems("donationId"); //get ids from localStorage() for existence checking
  const itemExist = prevIds.find((prevItemId) => prevItemId == getId);
  if (!itemExist) {
    if (name === "donationId") {
      prevIds.push(getId);
      console.log(prevIds);
      localStorage.setItem(name, JSON.stringify(prevIds));
    } else if (name === "donationAmount") {
      const prevAmount = getItems(name);
      const totalDonationAmount = prevAmount + getPrice;
      localStorage.setItem(name, JSON.stringify(totalDonationAmount));
    }
  }
}

export { getItems, saveThisItem};
