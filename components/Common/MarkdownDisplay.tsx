import { FC } from 'react';
import Markdown from 'react-markdown';

import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface IProps {
  children: string;
}

const MarkdownDisplay: FC<IProps> = ({ children }) => (
  <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className="prose max-w-full">
    {children}
  </Markdown>
);

export default MarkdownDisplay;
