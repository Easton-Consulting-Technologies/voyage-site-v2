'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const handleClick = (id) => {
	console.log(id);
	// var element = document.getElementById("box");
	// element.scrollIntoView();
	// element.scrollIntoView(false);
	// element.scrollIntoView({block: "end"});
	// element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  };
  return (
    <header className="header">
			<picture className="header_bg"
				><source media="(min-width: 768px)" srcSet="/images/header_bg.jpeg" type="image/jpeg" />
				<source media="(max-width: 767px)" srcSet="/images/header_bg_mob.jpeg" type="image/jpeg" />
				<Image
					className="header_bg__img"
					src="/images/header_bg.jpeg"
					alt="Gradient background"
					loading="eager"
					aria-hidden="true"
					priority
					fill
			/></picture>
			<div className="header__in">
				<div className="header__logo">
					<a className="header__logo_link" href="https://voyagemarkets.net/"
						><Image className="header__logo_img" src='/images/logo.svg' alt="Voyage markets logo" loading="lazy" width={300} height={81}
					/></a>
				</div>
				<ul className="header__list">
					<li className="header__item">
						<Link className="header__link" href="/" onClick={handleClick}>
							HOME
						</Link>
					</li>
					<li className="header__item">
						<Link className="header__link" href="/#features"
						// onClick={intercomUpdate()}
						>FEATURES</Link>
					</li>
					<li className="header__item">
						<Link
							className="header__link dropdown-toggle unstyled"
							href="#"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							>TRADING PLATFORMS<span className="sr-only"></span
						></Link>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
							<li>
								<Link className="dropdown-item" href="http://trade.voyagemarkets.net/" target="blank"
									>DXtrade Web Trader</Link>
							</li>
						</ul>
					</li>
					<li className="header__item">
						<Link className="header__link" href="/#instruments" 
						// onClick="intercomUpdate()"
						>trading instruments</Link>
					</li>
				</ul>
			</div>
		</header>
  )
}

export default Header