import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from '@material-ui/core';

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
    <Card variant="outlined">
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title={title}
        subheader="September 14, 2016"
      />
      <CardContent>
        <p>{text}</p>
        <p>Author: {authorName}</p>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
