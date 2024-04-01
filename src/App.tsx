import { useState } from "react";
import Alert from "./components/Alerts";
import Button from "./components/Button";

function App() {
  const [alertVisable, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisibility(false)}> My Alert </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        my Button
      </Button>
    </div>
  );
}

export default App;
