import React from 'react'
import styles from "../stayles/choose.module.scss"
import { WiTime4 } from "react-icons/wi";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa6";

const Choose = () => {
    return (
        <div className={styles.container}>
            <div className={styles.first_componet}>
                <h2 className={styles.title}>Ինչու՞ ընտրել մեզ</h2>
                <ol className={styles.list_container}>
                    <li className={styles.list_item}>Արագ և հուսալի առաքում</li>
                    <li className={styles.list_item}>Ճկուն լուծումներ</li>
                    <li className={styles.list_item}>Հաճախորդամետ սպասարկում</li>
                    <li className={styles.list_item}>Ֆինանսական աջակցություն</li>
                    <li className={styles.list_item}>Անվտանգություն և վերահսկում</li>
                </ol>
                <button className={styles.btn}>Ավելին մեր մասին
                </button>
            </div>
            <div className={styles.secnd_componet}>
                <div className={styles.text_container}>
                    <div className={styles.first_text_container}>
                        <WiTime4 className={styles.icon} /> <h3 className={styles.icon_text}>99.8%</h3>
                    </div>
                    <p className={styles.magin_text}>Ճիշտ ժամանակին առաքում</p>
                </div>
                <div className={styles.text_container}>
                    <div className={styles.first_text_container}>
                        <PiAirplaneTiltLight className={styles.icon} /> <h3 className={styles.icon_text}>10,000+</h3>
                    </div>
                    <p className={styles.magin_text}>Հաջողված բեռնափոխադրումներ</p>
                </div>
                <div className={styles.text_container}>
                    <div className={styles.first_text_container}>
                        <FaHandshake className={styles.icon} /> <h3 className={styles.icon_text}>50+</h3>
                    </div>
                    <p className={styles.magin_text}>Գործընկերներ</p>
                </div>
            </div>
        </div>
    )
}

export default Choose