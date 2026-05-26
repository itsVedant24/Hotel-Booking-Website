export function fetchHotels() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Royal Palace", price: 4500 },
        { id: 2, name: "Ocean View", price: 6000 },
      ]);
    }, 1000);
  });
}
