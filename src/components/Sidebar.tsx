import styles from '../styles/components/Sidebar.module.css';

export function Sidebar(){

    function darkMode() {
        const html = document.querySelector('html')
        const button = document.querySelector('#buttonToggleDark')
        html.classList.toggle('dark-mode')
    }

    return(
        <div className={styles.SidebarContainer}>
            <header>
                <img src="favicon.png" alt=""/>
                <button id="buttonToggleDark" onClick={darkMode}>
                    <img src="./lampada.png" alt=""/>
                </button>
            </header>
        </div>
    )
}


