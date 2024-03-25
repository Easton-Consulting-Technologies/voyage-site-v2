'use client';
import Image from "next/image";
import TradingViewWidget from "../_components/trading-widget";
import KonamiCode from "../_components/konami";
export default function Home() {
	const handleKonami = () => {
		const audio = new Audio('/sounds/Overworld.mp3');
		audio.play();
	  };
  return (
    <div className="base">
				<section className="section hero" data-id="home">
					<div className="section_in">
						<div className="hero__row">
							<div className="hero__column">
								<div className="hero__content">
									<h1>TAKE YOUR <a href="#footer">trading</a> TO THE <strong>NEXT LEVEL</strong></h1>
									<p>Low Spread. High Leverage. Fast Execution.</p>
								</div>
							</div>
							<div className="hero__column">
								<div className="hero__widget">
									<TradingViewWidget />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section platforms features" id="features">
					<div className="section_in">
						<div className="platforms__row">
							<div className="platforms__column">
								
									<Image
										className="platforms__img"
										src="/images/platforms.png"
										alt="platforms illustration"
                    width={673}
                    height={541}
                    priority
								/>
							</div>
							<div className="platforms__column">
								<div className="platforms__content">
									<h2>
										ACCESS THE <strong>MOST POPULAR</strong> INSTRUMENTS IN SELECT MARKETS in a simulated,
										virtual environment <a href="#footer"><sup>1</sup></a>
									</h2>
									<p>
										We work with trusted providers to enable simulated trading on Forex, Commodities, Indices
										and Cryptocurrencies.
									</p>
									<ul>
										<li>Award winning trading platforms</li>
										<li>Risk Management Tools</li>
										<li>Average Execution Speeds Under 40ms</li>
										<li>Low Latency</li>
									</ul>
								</div>
								<div className="platforms__footer">
									<div className="platforms__label">Available platforms</div>
									<ul className="platforms__list">
										<li className="platforms__item">
											<div className="platforms__wrap">
												<div className="platforms__icon">
													<Image
														className="platforms__icon_img"
														src="/images/icons/other-icons/windows.svg"
														alt="platform windows"
														loading="lazy"
                            width={54}
							height={54}
													/>
												</div>
											</div>
											<div className="platforms__text">Windows</div>
										</li>
										<li className="platforms__item">
											<div className="platforms__wrap">
												<div className="platforms__icon">
													<Image
														className="platforms__icon_img"
														src="images/icons/other-icons/android.svg"
														alt="platform android"
														loading="lazy"
                            width={54}
							height={54}
													/>
												</div>
											</div>
											<div className="platforms__text">Android</div>
										</li>
										<li className="platforms__item">
											<div className="platforms__wrap">
												<div className="platforms__icon">
													<Image
														className="platforms__icon_img"
														src="/images/icons/other-icons/apple.svg"
														alt="platform apple"
														loading="lazy"
                            width={54}
							height={54}
													/>
												</div>
											</div>
											<div className="platforms__text">IOS | MacOs</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section instruments" id="instruments">
					<div className="section_in">
						<div className="instruments__content">
							<h2 className="instruments__title">
								More instruments <br /><span className="instruments__title instruments__title--accent"
									>less spread</span
								>
							</h2>
							<div className="instruments__info">
								<p className="instruments__subtitle">
									We work with trusted brokers to enable simulated trading on Forex, Commodities, Indices and
									Cryptocurrencies.
								</p>
								<ul className="instruments__list">
									<li className="instruments__list_wrap">
										<div className="instruments__list_item">Online Simulated Services</div>
									</li>
									<li className="instruments__list_wrap">
										<div className="instruments__list_item">Simulated Leverage</div>
									</li>
									<li className="instruments__list_wrap">
										<div className="instruments__list_item">Full Simulation</div>
									</li>
								</ul>
							</div>
							<ul className="instruments__features">
								<li className="instruments__feature">
									<div className="instruments__feature_decor">
										<div className="instruments__feature_icon_w">
											<div className="instruments__feature_icon">
												<Image
													className="instruments__feature_img"
													src="/images/icons/other-icons/forex.svg"
													alt="FOREX*"
													loading="lazy"
                          width={54}
                          height={54}
												/>
											</div>
										</div>
									</div>
									<h3 className="instruments__feature_title">FOREX*</h3>
									<p className="instruments__feature_text">
										Trade with over 40 major and minor Forex pairs. Use your own strategies in our fully
										simulated environment that closely mimics live market.
									</p>
								</li>
								<li className="instruments__feature">
									<div className="instruments__feature_decor">
										<div className="instruments__feature_icon_w">
											<div className="instruments__feature_icon">
												<Image
													className="instruments__feature_img"
													src="/images/icons/other-icons/crypto.svg"
													alt="CRYPTO CFDs*"
													loading="lazy"
                          width={54}
                          height={54}
												/>
											</div>
										</div>
									</div>
									<h3 className="instruments__feature_title">CRYPTO CFDs*</h3>
									<p className="instruments__feature_text">Trade leading cryptocurrencies with low spread.</p>
								</li>
								<li className="instruments__feature">
									<div className="instruments__feature_decor">
										<div className="instruments__feature_icon_w">
											<div className="instruments__feature_icon">
												<Image
													className="instruments__feature_img"
													src="/images/icons/other-icons/metals.svg"
													alt="COMMODITIES &amp; METALS*"
													loading="lazy"
                          width={54}
                          height={54}
												/>
											</div>
										</div>
									</div>
									<h3 className="instruments__feature_title">COMMODITIES &amp; METALS*</h3>
									<p className="instruments__feature_text">
										Trade spot gold and spot silver contracts against the US dollar with tight spreads, on our
										raw account.
									</p>
								</li>
								<li className="instruments__feature">
									<div className="instruments__feature_decor">
										<div className="instruments__feature_icon_w">
											<div className="instruments__feature_icon">
												<Image
													className="instruments__feature_img"
													src="/images/icons/other-icons/indices.svg"
													alt="INDICES*"
													loading="lazy"
                          width={54}
                          height={54}
												/>
											</div>
										</div>
									</div>
									<h3 className="instruments__feature_title">INDICES*</h3>
									<p className="instruments__feature_text">
										Trade popular indices with competitive spreads across our cash Indices like the UK 100 and
										S&amp;P 500.
									</p>
								</li>
							</ul>
							<p className="instruments__disclaimer">
								* All trading referenced above is virtual, simulated trading. No actual trades are executed on
								the live market.
							</p>
						</div>
					</div>
				</section>
				<KonamiCode onKonami={handleKonami} />
			</div>
  );
}
