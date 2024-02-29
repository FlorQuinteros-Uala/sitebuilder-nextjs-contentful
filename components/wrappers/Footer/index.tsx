import { Footer as FooterComponent } from '@uala-labssupport/ui';
import { nibPro } from 'fonts';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import { footerContentCoverter } from '@/lib/parsers';
import type { FooterProps } from '@/types';

const ClaimCoral = ({ children }) => (
  <em className={`text-[#FF5874] ${nibPro.className}`}>{children}</em>
);

const Disclaimer = ({ children }) => (
  <p className="text-[#757575] text-justify text-sm not-italic font-normal leading-[18px]">
    {children}
  </p>
);

export const Footer = ({ componentName, ...rest }) => {
  const { logo, claim, disclaimers, legalImages, columns }: FooterProps =
    footerContentCoverter(rest);

  const TITLE_CLASSNAME =
    'uppercase text-[15px] font-semibold tracking-[0.13em] leading-[22px] not-italic';

  const LINK_CLASSNAME =
    'hover:underline hover:text-[#022A9B] focus:underline focus:text-[#0054EA]';

  return (
    <FooterComponent brand="uala">
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[15px]">
          <Image
            src={logo.url}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            style={{ width: logo.width, height: logo.height }}
          />
          <ReactMarkdown
            components={{ p: 'h5', em: ClaimCoral }}
            className="font-semibold text-xl"
          >
            {claim}
          </ReactMarkdown>
        </div>
        <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-[40px]">
          {columns.map((c, i) => (
            <div
              className="flex flex-row gap-[40px] min-w-full lg:min-w-0 max-w-[280px] w-full flex-wrap h-fit"
              key={i}
            >
              {c.map((a) => (
                <nav className="flex flex-col gap-[7px] w-full" key={a.id}>
                  {a.url === null ? (
                    <p className={TITLE_CLASSNAME}>{a.title}</p>
                  ) : (
                    <a
                      href={a.url}
                      className={`${TITLE_CLASSNAME} ${LINK_CLASSNAME}`}
                    >
                      {a.title}
                    </a>
                  )}
                  <ul
                    className={`list-style-none p-0 m-0 gap-[12px] ${
                      a.withImages ? 'flex items-center' : ''
                    }`}
                  >
                    {a.items.map((item, index) => (
                      <li
                        key={item.id}
                        className={`${
                          a.withImages
                            ? 'mb-0'
                            : index === a.items.length - 1
                            ? 'mb-0'
                            : 'mb-[12px]'
                        } ${
                          item.tag ? 'flex items-center justify-between' : ''
                        }`}
                      >
                        {item.url && item.image === null && (
                          <>
                            <a href={item.url} className={LINK_CLASSNAME}>
                              {item.name}
                            </a>
                            {item.tag && (
                              <span className="bg-[#E0EDFF] rounded-[56px] text-[#0047C7] py-[3px] px-2 text-sm cursor-default">
                                Nuevo
                              </span>
                            )}
                          </>
                        )}
                        {item.image !== null && (
                          <a href={item.url} target="_blank" rel="noreferrer">
                            <Image
                              src={item.image.src}
                              alt={item.image.alt}
                              width={item.image.width}
                              height={item.image.width}
                            />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[30px]">
          <ReactMarkdown components={{ p: Disclaimer }}>
            {disclaimers}
          </ReactMarkdown>
          <div className="flex gap-[30px] md:gap-x-[25px] flex-wrap">
            {legalImages.map(({ id, url, src, alt }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center w-max"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={80}
                  height={40}
                  style={{ width: 80, height: 40 }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </FooterComponent>
  );
};
