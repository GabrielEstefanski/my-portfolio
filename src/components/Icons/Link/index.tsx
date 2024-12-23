import React from 'react';
import LinkIconProps from '../../../interfaces/LinkIconProps';
import styled from 'styled-components';

const Link = styled.a`
  font-weight: 400;
  font-size: 18px;
  border: none;
  color: #1A8CFF;
  cursor: pointer;
  text-decoration: none;
  -webkit-transition: all .2s ease-in-out;
  `;
  
  const Span = styled.span`
  background-color: #EBF5FF;
  color: #0068D1;
  font-size: 1rem;
  align-items: center;
  height: 2.5em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  white-space: nowrap;
`;

const Svg = styled.svg`
  overflow: visible;
  box-sizing: content-box;
  margin-right: 0.5rem !important;
  height: 1em;
`;


export default function LinkIcon({ href, text }: LinkIconProps) {
  return (
      <Link
        href={href}
        target="_blank"
      >
      <Span>
      <Svg
        className="svg-inline--fa fa-arrow-up-right-from-square mr-2"
        aria-hidden="true"
        focusable="false"
        data-prefix="fal"
        data-icon="arrow-up-right-from-square"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M336 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l121.4 0L212.7 276.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 54.6 480 176c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160c0-8.8-7.2-16-16-16L336 0zM64 32C28.7 32 0 60.7 0 96L0 448c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 144c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 32z">
        </path>
      </Svg>
        {text}
      </Span>
    </Link>
  );
};