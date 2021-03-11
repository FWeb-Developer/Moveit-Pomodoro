import styles from '../styles/components/Sidebar.module.css';

export function Sidebar(){

    return(
        <div className={styles.SidebarContainer}>
            <header>
                <img src="favicon.png" alt=""/>
                <button id="buttonDarkMode">
                    <img src="lampada.png" alt=""/>
                </button>
            </header>
        </div>
    )
}


