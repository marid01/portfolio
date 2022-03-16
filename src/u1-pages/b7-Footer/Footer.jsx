import React from 'react'

import github from './../../u0-common/u0.1-assets/images/footer/github_icon_128848.svg'
import codewars from './../../u0-common/u0.1-assets/images/footer/codewars_logo_icon_145389.svg'
import telega from './../../u0-common/u0.1-assets/images/footer/telegram_icon-icons.com_53603.svg'

import s from './Footer.module.scss'
import Fade from 'react-reveal/Fade'

export const Footer = () => {

   return (
       <footer className={s.footerWrapper}>
          <div className={s.container}>
             <div className={s.wrapper}>
                <div className={s.innerText}>
                   <ul className={s.socialShare}>
                      <Fade bottom>
                         <li>
                            <a href="https://github.com/marid01?tab=repositories" target="_blank" rel="noopener noreferrer">
                               <img src={github} alt=""/>
                            </a>
                         </li>
                      </Fade>
                      <Fade bottom>
                         <li>
                            <a href="https://www.codewars.com/users/Marid" target="_blank" rel="noopener noreferrer">
                               <img src={codewars} alt=""/>
                            </a>
                         </li>
                      </Fade>
                      <Fade bottom>
                         <li>
                            <a href="https://t.me/marid0101" target="_blank" rel="noopener noreferrer">
                               <img src={telega} alt=""/>
                            </a>
                         </li>
                      </Fade>
                   </ul>
                </div>
                <p>© 2022. All rights reserved by Marid Shikhkerimov</p>
             </div>
          </div>
       </footer>
   )
}
