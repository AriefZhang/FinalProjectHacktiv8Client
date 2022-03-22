export const priceFormatter = (price) => {
  return price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
};

export const yearFormatter = year => {
  return year.split("-")[0]
}

export const mileageFormatter = mileage => {
  return `${mileage.toLocaleString("id-ID")} km`
}