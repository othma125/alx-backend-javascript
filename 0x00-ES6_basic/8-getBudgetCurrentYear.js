function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetCurrentYear(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };
  const year = getCurrentYear();
  return {
    ...budget,
    year,
  };
}
