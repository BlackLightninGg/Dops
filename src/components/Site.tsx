import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./pages/Error404";
import {Page} from "./pages/Page";
import {dataState} from "../dataState/dataState";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div>
                        <NavLink className={({isActive})=> isActive ? styles.active : styles.navLink} to={'/page/0'}>Page 1</NavLink>
                    </div>
                    <div>
                        <NavLink className={({isActive})=> isActive ? styles.active : styles.navLink} to={'/page/1'}>Page 2</NavLink>
                    </div>
                    <div>
                        <NavLink className={({isActive})=> isActive ? styles.active : styles.navLink} to={'/page/2'}>Page 3</NavLink>
                    </div>

                    <p><a href="/page2">Нативная ссылка</a></p>
                </div>
                <div className={styles.content}>

                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page/0'}/>}/>

                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>
                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>
                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>

                        <Route path={'*'} element={<Error404/>}/>
                    </Routes>

                    content
                </div>
            </div>
        </div>
    );
};

