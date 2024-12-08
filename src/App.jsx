import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ProductsCom from  "./components/ProductsCom";
const array = ["a ", "b ", "c "];
const student = {
  //creating object
  name: "Mubasshir Naib",
  roll: "1904089",
  emoji: "😁",
  fav_foods: ["Kacchi", "Chicken chap"],
  fav_color: "Yellow",
};
const product = [
  {
    product_id: "89",
    name: "A",
    color: ["red", "Green"],
  },
  {
    product_id: "2",
    name: "B",
    color: ["red", "Green"],
  },
  {
    product_id: "3",
    name: "C",
    color: ["red", "Green"],
  },
];
function text() {
  return " Mubasshir";
}
function App() {
  return (
    <>
      {/* <FirstComponent name="Naib " id="12" emoji="😊"
      fruit={array} func={text()} cmponant={<SecondComponent/>}
      /> */}
      {/* <FirstComponent studentInfo={student} /> */}
      <SecondComponent products={product}/>
      <ProductsCom products={product}/>
    </>
  );
}

export default App;
