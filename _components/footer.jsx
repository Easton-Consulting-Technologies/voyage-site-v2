import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer" data-id="footer">
      <div className="footer__in">
        <div className="footer__content">
          <Link className="footer__logo" href="/">
            <Image
              className="footer__logo_img"
              src="/images/logo.svg"
              alt="logo"
              loading="lazy"
              width={300}
              height={81}
            />
          </Link>
          <div className="footer__info">
            <p>
              <span>© </span>
              <span className="js-year">2024</span>
              <span>&nbsp;VOYAGE MARKETS SPC</span>
            </p>
            <address className="footer__address">
              Cra. 25 #40-27, Calarcá, Quindío, Colombia
            </address>
          </div>
        </div>
        <Link className="footer__anchor" href="/#features">
          <sup>1</sup>
        </Link>
        <div className="footer__text_w">
          <p>
            Risk warning: Use of information contained on this website is at
            your own risk and the Company assumes no responsibility or liability
            for any use or misuse of such information. Nothing contained herein
            is an offer or solicitation of an offer to buy or sell stock,
            futures, options, or forex. The trading referenced herein is not
            live trading, it is fully simulated trading utilizing real market
            quotes from liquidity providers. Past simulated performance is not
            necessarily indicative of future results. Hypothetical or simulated
            performance results have certain limitations. Unlike an actual
            performance record, simulated results do not represent actual
            trading. In addition, because the virtual trades have not been
            executed in the live market, results may have under- or
            over-compensated for the impact of certain market factors, such as
            lack of liquidity. Simulated trading programs, in general, are
            designed with the benefit of hindsight and as such may be subject to
            hindsight biases. No representation is hereby made that any virtual
            account will or is likely to achieve virtual profit or losses
            similar to those shown. Financial instrument trading involves
            substantial risk of loss and is not suitable for every Person.
            Simulated trading activities referenced on this website may not be
            suitable for all Persons.
          </p>
          <p>
            Simulated trading platforms provided herein by Voyage Markets SPC
            are offered solely for use with demo accounts and simulated trading
            environments. Users of this platform acknowledge and understand that
            simulated trading does not involve actual market orders or financial
            transactions, as referenced herein, and is intended to approximate
            real-world trading conditions uniformly for all users, subject to
            product guidelines. Users are trading select markets through demo
            accounts in a simulated environment, and therefore any order, trades
            or trading results are considered hypothetical or simulated.
          </p>
          <p>
            Voyage Markets SPC has established the simulated conditions and
            pricing engine of the platform in consultation with regulated
            brokers. Users are advised that simulated trading may not accurately
            reflect actual market conditions, including but not limited to
            liquidity, slippage, execution timing and market volatility. By
            using this simulated trading platform, users acknowledge and agree
            to the terms and conditions described in the Terms of Use and
            elsewhere throughout the site as applicable. Voyage Markets SPC and
            its affiliates are not liable for any losses, damages, or other
            liabilities of any kind, including direct, indirect or
            consequential, arising from or in connection with the use of this
            platform or reliance on the information provided herein.
          </p>
          <p>
            Disclaimer on jurisdiction where do/don&apos;t offer services: Due
            to restrictions with our payment exchange accounts, we are unable to
            offer services, including but not limited to trading and affiliate
            services, to persons residing in the following countries: Cuba,
            Iran, North Korea, Syria. While we are able to service traders who
            reside in the below countries, including but not limited to trading
            and affiliate services, because of U.S. sanctions programs,
            customers from these countries may be subject to further scrutiny.
            We reserve the right to not offer services to persons subject to
            applicable sanctions. Lebanon, Libya, Sudan, Somalia, Russia,
            Crimea, Donetsk and Luhansk regions of Ukraine. Additionally, we are
            unable to offer services to those on the Specially Designated
            Nationals and Blocked Persons list (“SDN List”) of OFAC, with no
            exceptions.
          </p>
          <p>
            Simulated trading platform provided herein by Voyage Markets SPC is
            offered solely for use with demo accounts and simulated trading
            environments. Users of the platform understand and acknowledge that
            simulated trading does not involve actual market orders or financial
            transactions and is intended to approximate real-world trading
            conditions uniformly for all users, subject to product guidelines.
            Users are trading on select markets through demo accounts in a
            simulated environment, and therefore any orders, trades or trading
            results are hypothetical or simulated.
          </p>
          <p>
            Voyage Markets SPC has established the simulated conditions and
            pricing engine of the platform in consultation with PropGuru. Users
            are advised that simulated trading may not accurately reflect actual
            market conditions, including but not limited to liquidity, slippage,
            execution timing, and market volatility. By using this simulated
            trading platform, users acknowledge and agree to the terms and
            conditions described in the Terms of Use and elsewhere throughout
            the site as applicable. Voyage Markets SPC and its affiliates are
            not liable for any losses, damages, or other liabilities of any
            kind, including direct, indirect or consequential, arising from or
            in connection with the use of this platform or reliance on the
            information provided herein.
          </p>
          <p>
            Voyage Markets SPC is registered in the Cayman Islands. Registered
            address: 94 Solaris Avenue, Camana Bay, PO Box 1348, Grand Cayman
            KY1-1108, Cayman Islands.
          </p>
        </div>
        <div className="footer__link_container">
          <Link className="footer__link" href="mailto:support@voyagemarkets.net">
            <Image
              className="footer__link_icon"
              src="/images/mail.svg"
              alt="envelope"
              loading="lazy"
              width={20}
        height={20}
            />
            support@voyagemarkets.net
          </Link>
          <Link className="footer__link" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="footer__link" href="/terms-of-use">
            Terms of Use
          </Link>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
