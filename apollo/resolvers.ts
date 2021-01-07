import _ from 'lodash';
// export const resolvers = {
//   Query: {
//     viewer(_parent, _args, _context, _info) {
//       return { id: 1, name: 'John Smith', status: 'cached' };
//     },
//   },
// };

export const resolvers = {
  Query: {
    rates: async (_root, { currency }) => {
      try {
        const results = await fetch(
          `https://api.coinbase.com/v2/exchange-rates?currency=${currency}`
        );
        const exchangeRates = await results.json();

        return _.map(exchangeRates.data.rates, (rate, currency) => ({
          currency,
          rate,
        }));
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
