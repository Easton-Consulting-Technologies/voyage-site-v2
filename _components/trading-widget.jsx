'use client'
import React, { Component } from 'react';

class TradingViewWidget extends Component {
  componentDidMount() {
    this.setupWidget();
  }

  setupWidget() {
    const TABS_DATA = [
        {
            title: 'Forex',
            symbols: [
                {
                    s: 'FX:AUDCAD',
                    d: 'Australian Dollar/Canadian Dollar',
                },
                {
                    s: 'FX:AUDCHF',
                    d: 'Australian Dollar/Swiss Franc',
                },
                {
                    s: 'FX:AUDJPY',
                    d: 'Australian Dollar/Japanese Yen',
                },
                {
                    s: 'FX:AUDNZD',
                    d: 'Australian Dollar/New Zealan Dollar',
                },
                {
                    s: 'FX:AUDUSD',
                    d: 'Australian Dollar/US Dollar',
                },
                {
                    s: 'FX:CADCHF',
                    d: 'Canadian Dollar/Swiss Franc',
                },
                {
                    s: 'FX:CADJPY',
                    d: 'Canadian Dollar/Japanese Yen',
                },
                {
                    s: 'FX:CHFJPY',
                    d: 'Swiss Franc/Japanese Yen',
                },
                {
                    s: 'FX:EURAUD',
                    d: 'Euro/Australian Dollar',
                },
                {
                    s: 'FX:EURCAD',
                    d: 'Euro/Canadian Dollar',
                },
                {
                    s: 'FX:EURCHF',
                    d: 'Euro/Swiss Franc',
                },
                {
                    s: 'FX:EURGBP',
                    d: 'Euro/Great Britain Pound',
                },
                {
                    s: 'FX:EURHUF',
                    d: 'Euro/Hungarian Forint',
                },
                {
                    s: 'FX:EURJPY',
                    d: 'Euro/Japanese Yen',
                },
                {
                    s: 'FX:EURNOK',
                    d: 'Euro/Norwegian Krone',
                },
                {
                    s: 'FX:EURNZD',
                    d: 'Euro/New Zealand Dollar',
                },
                {
                    s: 'FOREXCOM:EURPLN',
                    d: 'Euro/Poland złoty',
                },
                {
                    s: 'FOREXCOM:EURSGD',
                    d: 'Euro/Singapore Dollar',
                },
                {
                    s: 'FX:EURTRY',
                    d: 'Euro/Turkish lira',
                },
                {
                    s: 'FX:EURUSD',
                    d: 'Euro/US Dollar',
                },
                {
                    s: 'FX:GBPAUD',
                    d: 'Great Britain Pound/Australian Dollar',
                },
                {
                    s: 'FX:GBPCAD',
                    d: 'Great Britain Pound/Canadian Dollar',
                },
                {
                    s: 'FX:GBPCHF',
                    d: 'Great Britain Pound/Swiss Franc',
                },
                {
                    s: 'FX:GBPJPY',
                    d: 'Great Britain Pound/Japanese Yen',
                },
                {
                    s: 'FX:GBPNZD',
                    d: 'Great Britain Pound/New Zealeand Dollar',
                },
                {
                    s: 'FX:GBPUSD',
                    d: 'Great Britain Pound/US Dollar',
                },
                {
                    s: 'FX:NZDCAD',
                    d: 'New Zealand Dollar/Canadian Dollar',
                },
                {
                    s: 'FX:NZDCHF',
                    d: 'New Zealand Dollar/Swiss Franc',
                },
                {
                    s: 'FX:NZDJPY',
                    d: 'New Zealand Dollar/Japanese Yen',
                },
                {
                    s: 'FX:NZDUSD',
                    d: 'New Zealan Dollar/US Dollar',
                },
                {
                    s: 'FX:USDCAD',
                    d: 'US Dollar/Canadian Dollar',
                },
                {
                    s: 'FX:USDCHF',
                    d: 'US Dollar/Swiss Franc',
                },
                {
                    s: 'FX:USDJPY',
                    d: 'US Dollar/Japanese Yen',
                },
                {
                    s: 'FX:USDMXN',
                    d: 'US Dollar/Mexican Peso',
                },
                {
                    s: 'FX:USDNOK',
                    d: 'US Dollar/Norwegian Krone',
                },
                {
                    s: 'FX:USDSEK',
                    d: 'US Dollar/Swedish Krona',
                },
                {
                    s: 'FOREXCOM:USDSGD',
                    d: 'US Dollar/Singapore Dollar',
                },
                {
                    s: 'FX:USDTRY',
                    d: 'US Dollar/Turkish lira ',
                },
                {
                    s: 'FX:USDZAR',
                    d: 'US Dollar/South African Rand ',
                },
            ],
            originalTitle: 'Forex',
        },
        {
            title: 'Metals',
            symbols: [
                {
                    s: 'FOREXCOM:XAGUSD',
                    d: 'Silver/US Dollar',
                },
                {
                    s: 'FOREXCOM:XAUUSD',
                    d: 'Gold/US Dollar',
                },
            ],
            originalTitle: 'Metals',
        },
        {
            title: 'Indices',
            symbols: [
                {
                    s: 'AUS200',
                    t: 'AUS200',
                    d: 'Australia 200 Index',
                },
                {
                    s: 'EUSTX50',
                    t: 'EUSTX50',
                    d: 'Euro Stoxx 50 Index',
                },
                {
                    s: 'FRA40',
                    t: 'FRA40',
                    d: 'France 40 Index',
                },
                {
                    s: 'GER30',
                    t: 'GER30',
                    d: 'Germany 30 Index',
                },
                {
                    s: 'JPN225',
                    t: 'JPN225',
                    d: 'Japan 225 Index',
                },
                {
                    s: 'NDX100',
                    t: 'NDX100',
                    d: 'NASDAQ 100 Index',
                },
                {
                    s: 'SPX500',
                    t: 'SPX500',
                    d: 'S&P 500 Index',
                },
                {
                    s: 'UK100',
                    t: 'UK100',
                    d: 'UK 100 Index',
                },
                {
                    s: 'US30',
                    t: 'US30',
                    d: 'Wall Street 30 Index',
                },
            ],
            originalTitle: 'Indices',
        },
        {
            title: 'Crypto',
            symbols: [
                {
                    s: 'FX:BCHUSD',
                    d: 'Bitcoin Cash/US Dollar',
                },
                {
                    s: 'FX:BTCUSD',
                    d: 'Bitcoin/US Dollar',
                },
                {
                    s: 'FX:ETHUSD',
                    d: 'Ethereum/US Dollar',
                },
                {
                    s: 'FX:LTCUSD',
                    d: 'Litecoin/US Dollar',
                },
            ],
            originalTitle: 'Crypto',
        },
        {
            title: 'Commodities',
            symbols: [
                {
                    s: 'UKOUSD',
                    t: 'UKOUSD',
                    d: 'Spot Light Crude Oil',
                },
                {
                    s: 'USOUSD',
                    t: 'USOUSD',
                    d: 'Spot Light Crude Oil',
                },
            ],
            originalTitle: 'Commodities',
        },
    ];

    const WIDGET_SETTINGS_DATA = {
      colorTheme: 'light',
      dateRange: '12M',
      showChart: false,
      locale: 'en',
      largeChartUrl: '',
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: '100%',
      height: '465',
      tabs: TABS_DATA,
    };

    const SCRIPT_DATA = {
      type: 'text/javascript',
      src: 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js',
      async: true,
    };

    const widgetSettings = () => {
      const $parent = window.document.querySelector('.js-tradingview-widget');
      if (!$parent || !Array.isArray(TABS_DATA) || TABS_DATA.length === 0) return;

      const $script = window.document.createElement('script');
      $script.type = SCRIPT_DATA.type;
      $script.src = SCRIPT_DATA.src;
      $script.async = SCRIPT_DATA.async;
      $script.textContent = JSON.stringify(WIDGET_SETTINGS_DATA);

      $parent.appendChild($script);

      this.cleanupScript = () => {
        if ($parent) {
          const $script = $parent.querySelector('script');
          if ($script) {
            $parent.removeChild($script);
          }
        }
      };
    };

    widgetSettings();
  }

  componentWillUnmount() {
    if (typeof this.cleanupScript === 'function') {
      this.cleanupScript();
    }
  }

  render() {
    return <div className="js-tradingview-widget"></div>;
  }
}

export default TradingViewWidget;
