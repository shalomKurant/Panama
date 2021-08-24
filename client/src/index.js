import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
export const siteTypes = {
    Game: "Game",
    Regular: "regular"
}
export let siteState = siteTypes.Regular;
document.addEventListener("changeState" , () => {
    console.log('changed');
})
ReactDOM.render(<App />,document.getElementById('root'));
