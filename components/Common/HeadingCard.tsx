import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Tag from '@components/Common/Tag';
import Image from 'next/image';

type Details = {
  subHeading: string;
  info: string;
}[];

type Props = {
  title: string;
  details: Details;
  categories: string[];
  coverImageUrl: string;
  buttonProps?: {
    text: string;
    url: string;
  };
};

const HeadingCard = (props: Props) => {
  const { title, details, categories, coverImageUrl, buttonProps } = props;
  return (
    <Card
      sx={{
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        minHeight: '24rem',
      }}
    >
      <CardMedia>
        <Tag categories={categories} />
        <Image
          src={coverImageUrl}
          layout="fill"
          objectFit="contain"
          alt={`${title} Cover Image`}
          priority
        />
      </CardMedia>
      <CardContent sx={{ width: { md: '50%' } }}>
        <Box>
          <Typography variant="h1">{title}</Typography>
          {details.map((detail) => {
            return (
              <Box marginBottom="0.5rem">
                <Typography variant="h2">{detail.subHeading}</Typography>
                <Typography>{detail.info}</Typography>
              </Box>
            );
          })}
        </Box>
        {buttonProps && (
          <Button variant="contained" href={buttonProps.url}>
            {buttonProps.text}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default HeadingCard;
