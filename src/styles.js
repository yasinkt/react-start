import styles from "./App.module.css";
import {Title} from "./Components";
import Test from "./Test";
import logo from "./logo.svg";
import Bootstrap from "./Bootstrap";
import Tailwind from "./Tailwind";
import './App.css';
import './tailwind.css'

function Styles() {
    return (
        <div className={styles.App}>
            <Title>{process.env.NODE_ENV}</Title>
            <Title theme={'dark'}>{process.env.NODE_ENV}</Title>

            <p className="env">
                {process.env.REACT_APP_API_URL}
                <span>
              test
          </span>
            </p>
            <Test></Test>
            {process.env.NODE_ENV === 'production' && (
                <>
                    <img src='/logo192.png' alt=''></img>
                    <img src={logo} alt=''></img>
                </>
            )}
            <Bootstrap/>
            <Tailwind/>
        </div>
    )
}

export default Styles