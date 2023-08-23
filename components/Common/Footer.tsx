import { FC, ReactNode, useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';

import MediaQueryContainer from '@components/Common/MediaQueryContainer';
import DiscordIcon from '@public/discord.svg';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface LinkProps {
  href: string;
  text: string;
  icon?: ReactNode;
}

const FooterLink: FC<LinkProps> = ({ href, text, icon }) => (
  <li className="mt-3 list-none">
    <div className="flex items-center">
      {icon && <div className="mr-2 flex items-center">{icon}</div>}
      <Link href={href}>
        <a
          href={href}
          className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      </Link>
    </div>
  </li>
);

interface ColProps {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

const FooterCol: FC<ColProps> = ({ title, children }) => (
  <div className="px-6">
    <h1 className="text-xl">{title}</h1>
    {children}
  </div>
);

const SignupForm: FC = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<string | null>('');
  return (
    <MailchimpSubscribe
      url={process.env.NEXT_PUBLIC_MAILCHIMP_URL || ''}
      render={({ subscribe, status, message }) => {
        setSubscribeStatus(status);
        return (
          <div className="w-72">
            {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
            {status === 'error' && (
              <div
                className="error-link"
                style={{ color: 'red' }}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: message as string }}
              />
            )}
            {status === 'success' && <div style={{ color: 'green' }}>Subscribed !</div>}
            <input
              className="appearance-none border-none w-full mt-3 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex justify-center md:justify-start">
              <Button
                variant="contained"
                className={classNames({
                  'bg-red-500': subscribeStatus === 'error',
                  'bg-yellow-400': subscribeStatus === 'sending',
                  'bg-green-400': subscribeStatus === 'success',
                })}
                onClick={() => subscribe({ EMAIL: email })}
              >
                Sign me up!
              </Button>
            </div>
          </div>
        );
      }}
    />
  );
};

const Footer: FC = () => {
  return (
    <div className="footer">
      <footer className="relative z-50 dark:bg-gray-900 mt-24 bg-gray-100">
        <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="w-full lg:w-4/5 mb-6 md:mb-16 lg:mb-0 flex justify-evenly">
              <FooterCol title="Get In Touch">
                <FooterLink text="mcss@utmsu.ca" href="mailto:mcss@utmsu.ca" />
                <p className="mt-3 text-xs lg:text-sm">
                  3359 Mississauga Rd, Mississauga, ON, Canada
                </p>
              </FooterCol>
              <FooterCol title="Social Media">
                <FooterLink text="Github" href="https://github.com/utmmcss" icon={<GitHubIcon />} />
                <FooterLink
                  text="Instagram"
                  href="https://www.instagram.com/utmmcss/"
                  icon={<InstagramIcon />}
                />
                <FooterLink
                  text="Discord"
                  href="https://discord.com/invite/wfJUZyXjfM"
                  icon={
                    <Image src={DiscordIcon} alt="Discord" layout="fixed" width={24} height={24} />
                  }
                />
              </FooterCol>
              <MediaQueryContainer hideOnMobile>
                <FooterCol title="Newsletter">
                  <SignupForm />
                </FooterCol>
              </MediaQueryContainer>
            </div>
            <MediaQueryContainer showOnMobile>
              <div className="flex justify-center">
                <FooterCol title="Newsletter">
                  <SignupForm />
                </FooterCol>
              </div>
            </MediaQueryContainer>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
