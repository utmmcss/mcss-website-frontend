import { FC } from 'react';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface IProps {
  children: string;
}

const MarkdownDisplay: FC<IProps> = ({ children }) => (
  <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className="prose max-w-full">
    {children}
  </Markdown>
);

export default MarkdownDisplay;
