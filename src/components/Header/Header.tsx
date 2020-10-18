import React from "react";
import { Link } from "gatsby";
import { Link as CustomLink } from "../Link/Link";
import styles from "./Header.module.scss";
import { Logo } from "../Logo/Logo";
import { FormattedMessage, useIntl } from "gatsby-plugin-intl";

export const Header = () => {
  const intl = useIntl();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.headerTop}>
            <Link to="/">
              <Logo />
            </Link>
            <nav>
              <ul className={styles.list}>
                <li>
                  <Link
                    to="/"
                    title={intl.formatMessage({
                      id: "header.nav.products.title",
                    })}
                  >
                    <FormattedMessage id="header.nav.products.content" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    title={intl.formatMessage({
                      id: "header.nav.services.title",
                    })}
                  >
                    <FormattedMessage id="header.nav.services.content" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://courses.nestjs.com"
                    title={intl.formatMessage({
                      id: "header.nav.standards.title",
                    })}
                  >
                    <FormattedMessage id="header.nav.standards.content" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.mainWrapper}>
            <h1>
              <FormattedMessage id="general.site_name" />
            </h1>
            <h2>
              <FormattedMessage id="main_page.slogan" />
            </h2>
            <div className={styles.buttonsWrapper}>
              <CustomLink variation="solid">Products</CustomLink>
              <CustomLink variation="outline">Services</CustomLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
