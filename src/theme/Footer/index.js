/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useThemeConfig } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import isInternalUrl from "@docusaurus/isInternalUrl";
import ThemedImage from "@theme/ThemedImage";
import IconExternalLink from "@theme/IconExternalLink";

import { Popover } from "antd";
import { GithubOutlined, WechatOutlined } from "@ant-design/icons";

function FooterLink({
    to,
    href,
    label,
    prependBaseUrlToHref,
    isBlank,
    ...props
}) {
    const toUrl = useBaseUrl(to);
    const normalizedHref = useBaseUrl(href, {
        forcePrependBaseUrl: true,
    });
    if (isBlank) {
        return (
            <a
                className="footer__link-item"
                {...(href
                    ? {
                          href: prependBaseUrlToHref ? normalizedHref : href,
                      }
                    : {
                          to: toUrl,
                      })}
                {...props}
                target="_blank"
            >
                {href && !isInternalUrl(href) ? (
                    <span>
                        {label}
                        <IconExternalLink />
                    </span>
                ) : (
                    label
                )}
            </a>
        );
    }
    return (
        <Link
            className="footer__link-item"
            {...(href
                ? {
                      href: prependBaseUrlToHref ? normalizedHref : href,
                  }
                : {
                      to: toUrl,
                  })}
            {...props}
        >
            {href && !isInternalUrl(href) ? (
                <span>
                    {label}
                    <IconExternalLink />
                </span>
            ) : (
                label
            )}
        </Link>
    );
}

const FooterLogo = ({ sources, alt }) => (
    <ThemedImage className="footer__logo" alt={alt} sources={sources} />
);

function Footer() {
    const { footer } = useThemeConfig();
    const { copyright, links = [], logo = {} } = footer || {};
    const sources = {
        light: useBaseUrl(logo.src),
        dark: useBaseUrl(logo.srcDark || logo.src),
    };

    if (!footer) {
        return null;
    }

    useEffect(() => {
        const DesignW = 1920;
        const FontRate = document.body.offsetWidth === 1920 ? 15.875 : 16;

        document.getElementsByTagName("html")[0].style.fontSize =
            (document.body.offsetWidth / DesignW) * FontRate + "px";
        document.getElementsByTagName("body")[0].style.fontSize =
            (document.body.offsetWidth / DesignW) * FontRate + "px";

        window.addEventListener(
            "onorientationchange" in window ? "orientationchange" : "resize",
            () => {
                document.getElementsByTagName("html")[0].style.fontSize =
                    (document.body.offsetWidth / DesignW) * FontRate + "px";
                document.getElementsByTagName("body")[0].style.fontSize =
                    (document.body.offsetWidth / DesignW) * FontRate + "px";
            }
        );

        document.onscroll = (e) => {
            if (
                e.target &&
                e.target.scrollingElement &&
                e.target.scrollingElement.scrollTop
            ) {
                const navbar = document.getElementsByClassName("navbar")[0];
                const flag =
                    e.target.scrollingElement.scrollTop > navbar.offsetHeight;
                navbar.style.backgroundColor = flag
                    ? "#ffffff"
                    : "rgba(0,0,0,0)";
            }
        };
    }, []);

    return (
        <footer
            className={clsx("footer", {
                "footer--dark": footer.style === "dark",
            })}
        >
            <div className="container">
                {/* {links && links.length > 0 && (
          <div className="row footer__links">
            {links.map((linkItem, i) => (
              <div key={i} className="col footer__col">
                {linkItem.title != null ? (
                  <div className="footer__title">{linkItem.title}</div>
                ) : null}
                {linkItem.items != null &&
                Array.isArray(linkItem.items) &&
                linkItem.items.length > 0 ? (
                  <ul className="footer__items">
                    {linkItem.items.map((item, key) =>
                      item.html ? (
                        <li
                          key={key}
                          className="footer__item" // Developer provided the HTML, so assume it's safe.
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{
                            __html: item.html,
                          }}
                        />
                      ) : (
                        <li key={item.href || item.to} className="footer__item">
                          <FooterLink {...item} />
                        </li>
                      ),
                    )}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )} */}

                <div className="div--flex footer__bottom text--center ">
                    <div className="footer-logo-copyright-navigation">
                        {logo && (logo.src || logo.srcDark) && (
                            <div className="margin-bottom--sm">
                                {logo.href ? (
                                    <Link
                                        href={logo.href}
                                        className="footer-link"
                                    >
                                        <FooterLogo
                                            alt={logo.alt}
                                            sources={sources}
                                        />
                                        <div className="footer__logo__title">
                                            Yak
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="footer-link">
                                        <FooterLogo
                                            alt={logo.alt}
                                            sources={sources}
                                        />
                                        <div className="footer__logo__title">
                                            Yak
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {copyright ? (
                            <div
                                className="footer__copyright copyright-style" // Developer provided the HTML, so assume it's safe.
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{
                                    __html: copyright,
                                }}
                            />
                        ) : null}

                        {links && links.length > 0 && (
                            <div className="link-body">
                                {links.map((item, index) => {
                                    return (
                                        <FooterLink
                                            key={index}
                                            isBlank={index === 0}
                                            {...item.items[0]}
                                        />
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <div className="footer-contact-me">
                        <a
                            href="https://github.com/yaklang/yakit"
                            target="_blank"
                            className="contact-icon-body"
                        >
                            <GithubOutlined className="icon-style github-icon" />
                        </a>

                        <div className="contact-icon-body">
                            <Popover
                                overlayClassName="wechat-code-popover"
                                content={
                                    <div>
                                        <img
                                            src="/img/wechat.png"
                                            className="wechat-code-img"
                                        />
                                        <div className="wechat-code-title">
                                            微信扫码关注公众号
                                        </div>
                                    </div>
                                }
                            >
                                <WechatOutlined className="icon-style wechat-icon" />
                            </Popover>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
