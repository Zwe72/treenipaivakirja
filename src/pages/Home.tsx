import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Treenipäiväkirja</h1>

      <p>
        Tällä sovelluksella voit tallentaa omat treenisi ja seurata kehitystäsi.
      </p>

      <h3>Mitä voit tehdä:</h3>
      <ul>
        <li>Lisätä uusia treenejä</li>
        <li>Tarkastella aiempia treenejä</li>
        <li>Seurata omaa kehitystä</li>
      </ul>

      <div style={{ marginTop: "20px" }}>
        <Link to="/add">
          <button>Lisää treeni</button>
        </Link>

        <Link to="/trainings" style={{ marginLeft: "10px" }}>
          <button>Näytä treenit</button>
        </Link>
      </div>
    </div>
  );
}