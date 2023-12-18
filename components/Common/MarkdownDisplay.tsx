import { FC } from 'react';
import Markdown from 'react-markdown';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface IProps {
  children: string;
}

const MarkdownDisplay: FC<IProps> = ({ children }) => (
  <Card sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
    <CardContent>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        className="prose max-w-full"
      >
        {children}
      </Markdown>
    </CardContent>
  </Card>
);

export default MarkdownDisplay;
