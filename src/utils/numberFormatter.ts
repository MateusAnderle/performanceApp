export function numberFormatter(number: number) {
  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
  }).format(number);

  return formattedValue;
}
