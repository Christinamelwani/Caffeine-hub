import { useEffect, useState } from "react";
import Card from "../components/card";
import Detail from "../components/detail";
export default function Menu(props) {
  const [drinks, setDrinks] = useState([]);
  const [detailView, setDetailView] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/drinks");
      const fetchedDrinks = await response.json();
      setDrinks(fetchedDrinks);
    }
    fetchData();
  }, []);

  const showDetail = (e) => {
    async function fetchDetail() {
      const response = await fetch(
        `http://localhost:3000/drinks/${e.target.name}`
      );
      const fetchedDrink = await response.json();
      setDetails(fetchedDrink);
    }
    fetchDetail();
    setDetailView(true);
  };
  const listDrinks = drinks.map((drink) => (
    <Card drink={drink} showDetail={showDetail} key={drink.id}></Card>
  ));
  return detailView ? (
    <Detail drink={details} setDetailView={setDetailView} />
  ) : (
    <div className="text-yellow-900 mt-4 grid grid-cols-4 gap-4">
      {listDrinks}
    </div>
  );
}
