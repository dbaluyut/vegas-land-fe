import React from 'react'
import Highlights from '../features/highlights/Highlights'

import { Navbar } from '../ui/Navbar'
import { Footer } from '../ui/Footer'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.splashContainer}>
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <img
            src={'./assets/logo-062.svg'}
            style={{
              height: '70vh',
              width: '50vw',
            }}
          />
          <div className={styles.chevron}>
            <i class='fas fa-chevron-down fa-5x'></i>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(
              'https://img.sunset02.com/sites/default/files/styles/medium_2x/public/image/2016/09/main/las-vegas-nv-downtown-fremont-east-0213.jpg'
            )`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            filter: 'brightness(0.5)',
            width: '100%',
            height: '100%',
            zIndex: '-10',
            position: 'absolute',
            top: '0',
          }}
        ></div>
      </div>
      <div
        // style={{
        //   backgroundImage: `url(${'./assets/footer-bg1.svg'})`,
        //   backgroundPosition: 'center bottom',
        //   width: '100vw',
        //   backgroundRepeat: 'no-repeat',
        // }}
        className={styles.contentWrapper}
      >
        <Navbar />
        <div className={styles.homeBanner}>
          <h1>Welcome to VegasLand</h1>
          <img
            className={styles.bannerImg1}
            src='./assets/hoverMarker-01.svg'
          ></img>
          <img
            className={styles.bannerImg4}
            src='./assets/hoverMarker-01.svg'
          ></img>
          <img
            className={styles.bannerImg2}
            src='./assets/hoverMarker-02.svg'
          ></img>
          {/* <img className={styles.bannerImg5} src="./assets/hoverMarker-02.svg"></img> */}
          <img
            className={styles.bannerImg3}
            src='./assets/hoverMarker-03.svg'
          ></img>
        </div>
        <Highlights></Highlights>
        <Footer />
      </div>
    </div>
  )
}
