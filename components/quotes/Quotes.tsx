import { useQuery, gql } from '@apollo/client';
import { QUOTES } from '../../apollo/quotes/queries';

export const Quotes: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(QUOTES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!loading && !error)
    return data.quotes.map(({ title }) => (
      <div key={title}>
        <p>{title}</p>
      </div>
    ));
};
