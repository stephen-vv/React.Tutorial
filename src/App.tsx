import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "London", "Paris"];
  let colourItems = ["Red", "Yellow", "Blue", "Green"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  let [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={colourItems}
        heading="Colours"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert>
          <h1>Hello, world!</h1>
        </Alert>
      )}
      <Button
        name="Click me!"
        onClick={() => setAlertVisible(!alertVisible)}
      ></Button>
    </div>
  );
}

export default App;
