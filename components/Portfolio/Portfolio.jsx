import styles from "./Portfolio.module.css";
import Image from "next/image";

const Portfolio = () => {
    return (
        <section id={"portfolio"} className={styles.MainContainer}>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className={styles.container}>
                <article className={styles.item}>
                    {/*image*/}
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} objectFit={"cover"} src={"/images/airbnb.png"} layout={"fill"} />
                    </div>

                    {/*project description*/}
                    <p>Crypto currency site build with CoinGecko api.</p>
                    {/*buttons*/}

                    <div className={styles.linksContainer}>
                        <a className={styles.link} href="#">Github</a>
                        <a className={styles.link} href="#">Live Demo</a>
                    </div>
                </article>

                <article className={styles.item}>
                    {/*image*/}
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} objectFit={"cover"} src={"/images/blog.png"} layout={"fill"} />
                    </div>

                    {/*project description*/}
                    <p>Crypto currency site build with CoinGecko api.</p>
                    {/*buttons*/}

                    <div className={styles.linksContainer}>
                        <a className={styles.link} href="#">Github</a>
                        <a className={styles.link} href="#">Live Demo</a>
                    </div>
                </article>

                <article className={styles.item}>
                    {/*image*/}
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} objectFit={"cover"} src={"/images/bike-landing-page.png"} layout={"fill"} />
                    </div>

                    {/*project description*/}
                    <p>Crypto currency site build with CoinGecko api.</p>
                    {/*buttons*/}

                    <div className={styles.linksContainer}>
                        <a className={styles.link} href="#">Github</a>
                        <a className={styles.link} href="#">Live Demo</a>
                    </div>
                </article>

                <article className={styles.item}>
                    {/*image*/}
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} objectFit={"cover"} src={"/images/amazon.png"} layout={"fill"} />
                    </div>

                    {/*project description*/}
                    <p>Crypto currency site build with CoinGecko api.</p>
                    {/*buttons*/}

                    <div className={styles.linksContainer}>
                        <a className={styles.link} href="#">Github</a>
                        <a className={styles.link} href="#">Live Demo</a>
                    </div>
                </article>

                <article className={styles.item}>
                    {/*image*/}
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} objectFit={"cover"} src={"/images/hulu.png"} layout={"fill"} />
                    </div>

                    {/*project description*/}
                    <p>Crypto currency site build with CoinGecko api.</p>
                    {/*buttons*/}

                    <div className={styles.linksContainer}>
                        <a className={styles.link} href="#">Github</a>
                        <a className={styles.link} href="#">Live Demo</a>
                    </div>
                </article>

                <article className={styles.item}>
                    {/*image*/}
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} objectFit={"cover"} src={"/images/SikalCommerce.png"} layout={"fill"} />
                    </div>

                    {/*project description*/}
                    <p>Crypto currency site build with CoinGecko api.</p>
                    {/*buttons*/}

                    <div className={styles.linksContainer}>
                        <a className={styles.link} href="#">Github</a>
                        <a className={styles.link} href="#">Live Demo</a>
                    </div>
                </article>
            </div>

        </section>
    );
};

export default Portfolio;