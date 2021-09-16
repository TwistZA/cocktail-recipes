import Cocktails from "./components/Cocktails/Cocktails";
import SocialMediaShare from "./components/SocialMediaShare/SocialMediaShare";
import styles from "./styles/Home.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Cocktails />
      <SocialMediaShare />

      <div className={styles.lessonLearned}>
        <div className={styles.listImage}>
          <img src="/images/lessons.png" alt="lessons learnt"></img>
        </div>

        <div className={styles.listItems}>
          <h4>Concepts learned and demonstrated</h4>
          <ul>
            <li>Responsive web design</li>
            <li>Mobile friendly layout</li>
            <li>React functional components</li>
            <li>Components designed for re-use</li>
            <li>Social Media Integration</li>
            <li>Using fetch for getting JSON from API</li>
            <li>All data is fetched async from API: www.thecocktaildb.com </li>
            <li>Using template literals for parsing dynamic json properties</li>
            <li>React hooks for managing state</li>
            <li>CSS Neomorphism box shadows</li>
            <li>CSS display:grid layout design pattern</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBlock}>
        <h3>2021 Web Dev Project Concept only, by Avinash Ganga</h3>
        <p>This website is project for demo and self studies only!!!!</p>
        <p>Drink responsibly and do not drink and drive!!!!</p>
        <p>Dedicated to Meg ☘</p>
      </div>
    </div>
  );
}

export default App;
