export function formatPrice(price: string) {
  const priceTranslated = Number.parseFloat(price);
  if (typeof priceTranslated !== "number") {
    return "0";
  }

  if (Math.floor(priceTranslated) === priceTranslated) {
    return priceTranslated.toString();
  } else if (Math.floor(priceTranslated * 10) === priceTranslated * 10) {
    return priceTranslated.toFixed(2);
  } else {
    return priceTranslated.toFixed(2);
  }
}
