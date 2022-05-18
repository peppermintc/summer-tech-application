import "@karrotframe/tabs/index.css";
import "@karrotframe/navigator/index.css";

import { Navigator, Screen } from "@karrotframe/navigator";
import ResumeScreen from "./screens/ResumeScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <Navigator
      onClose={() => {
        console.log("Close button is pressed");
      }}
    >
      <Screen path="/" component={HomeScreen} />
      <Screen path="/info" component={ResumeScreen} />
    </Navigator>
  );
};

export default App;
