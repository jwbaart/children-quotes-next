import { useQuery } from '@apollo/client';
import { QUOTES } from '../../apollo/quotes/queries';
import { QuoteCard } from './QuoteCard';

export const Quotes: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(QUOTES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!loading && !error)
    return data.quotes.map(({ title, text, author }, i) => {
      return (
        <QuoteCard
          title={title}
          text={text}
          authorName={author.name}
          key={i}
        ></QuoteCard>
      );
    });
};
