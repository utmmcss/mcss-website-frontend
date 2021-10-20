import React, { FC } from 'react';
import Link from 'next/link';
import CTAButton from './CTAButton';

interface LinkProps {
  href: string;
  text: string;
}

const FooterLink:FC<LinkProps> = ({ href, text }) => (
  <li className="mt-3 list-none">
    <Link href={href}>
      <a href={href} className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
        {text}
      </a>
    </Link>
  </li>
);

interface ColProps {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

const FooterCol:FC<ColProps> = ({ title, children }) => (
  <div className="px-6">
    <h1 className="text-xl">{title}</h1>
    {children}
  </div>
);

const Footer:FC = () => (
  <div className="pt-12">
    <footer id="footer" className="relative z-50 dark:bg-gray-900 mt-24">
      <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
        <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
          <div className="w-full lg:w-4/5 mb-16 lg:mb-0 flex justify-evenly">
            <FooterCol title="Get In Touch">
              <FooterLink text="mcss@utmsu.ca" href="mailto:mcss@utmsu.ca" />
            </FooterCol>
            <FooterCol title="More Pages">
              <FooterLink text="FAQ" href="/" />
              <FooterLink text="Something Else" href="/" />
            </FooterCol>
            <FooterCol title="Newsletter">
              <input
                className="appearance-none border-none w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
              />
              <CTAButton text="Sign me up!" />
            </FooterCol>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
