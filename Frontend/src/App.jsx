
import { useState } from "react";
import './App.css'

import Authpage from "./pages/Authpage";
import ChatsPage from "./pages/ChatPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <Authpage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
  
}

export default App;