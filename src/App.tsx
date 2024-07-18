import ListGroup from "./components/ListGroup";



let items = [
  'New york',
  'Los Angeles',
  'Chicago',
  'Houston',
];
function App() {

  return <div><ListGroup items={items} heading="Cities" /></div>

}

export default App;