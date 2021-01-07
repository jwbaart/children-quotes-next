import { useQuery, gql } from '@apollo/client';
// import { initializeApollo } from '../apollo/client';

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`;

export const Viewer: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(ViewerQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <p>
      You&apos;re signed in as {data.viewer.name} and you&apos;re{' '}
      {data.viewer.status} goto{' '}
    </p>
  );
};

// export async function getStaticProps() {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: ViewerQuery,
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   };
// }
