import _ from 'lodash';

export const tryOutResolvers = {
  Query: {
    rates: async (_root, { currency, numberOfItems = 5 }) => {
      try {
        const results = await fetch(
          `https://api.coinbase.com/v2/exchange-rates?currency=${currency}`
        );
        const response = await results.json();
        const exchangeRates = _.map(response.data.rates, (rate, currency) => ({
          currency,
          rate,
        }));
        return exchangeRates.length > numberOfItems
          ? exchangeRates.slice(0, numberOfItems)
          : exchangeRates;
      } catch (e) {
        console.error(e);
      }
    },
    viewer(_parent, _args, _context, _info) {
      return { id: 1, name: 'John Smith', status: 'cached' };
    },
  },
  ExchangeRate: {
    name: async ({ currency }) => {
      try {
        const results = await fetch('https://api.coinbase.com/v2/currencies');
        const currencyData = await results.json();

        const currencyInfo = currencyData.data.find(
          (c) => c.id.toUpperCase() === currency
        );
        return currencyInfo ? currencyInfo.name : null;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
