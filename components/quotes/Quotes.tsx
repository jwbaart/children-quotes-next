import { useQuery } from '@apollo/client';
import { Grid } from '@material-ui/core';
import { QUOTES } from '../../apollo/quotes/queries';
import { QuoteCard } from './QuoteCard';

export const Quotes: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(QUOTES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!loading && !error)
    return (
      <Grid container spacing={3}>
        {data.quotes.map(({ title, text, author }, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={i}>
              <QuoteCard
                title={title}
                text={text}
                authorName={author.name}
              ></QuoteCard>
            </Grid>
          );
        })}
      </Grid>
    );
};
