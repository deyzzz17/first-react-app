import Button from "./components/Button";
import Message from "./components/Message";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      {showAlert && <Alert children="You're not a good boy!" />}
      <div>
        <Button onClick={() => setShowAlert(true)}>
          <Message message="Don't click" />
        </Button>
      </div>
    </>
  );
}

export default App;
