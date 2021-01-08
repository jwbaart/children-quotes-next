import { useQuery, gql } from '@apollo/client';

const ExchangeRatesQuery = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const ExchangeRates: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(ExchangeRatesQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
};
