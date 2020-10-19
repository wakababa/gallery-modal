import React from 'react'
import List from './List'
import Logo from "./Logo"
import styles from "../main.module.scss"
export default function Sidebar({currentPage,setcurrentPage}) {
    return (
        <div className={styles.sidebarDiv}>
            <Logo  className={styles.svg}/>
            <List setcurrentPage={setcurrentPage} currentPage={currentPage} lista={styles.lista} className={styles.list} lists={["HOME","COMPONENTS","API"]}  />
        </div>
    )
}
