export interface QuoteCardProps {
  title: string;
  text: string;
  authorName: string;
}

export const QuoteCard: React.FunctionComponent<QuoteCardProps> = ({
  title,
  text,
  authorName,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <p>Author: {authorName}</p>
    </div>
  );
};
