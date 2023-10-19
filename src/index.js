import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';

const UserContext = createContext();

function Parent() {
  const [user, setUser] = useState("John");

  return (
    <UserContext.Provider value={{ user }}>
      {user}
      <Child />
    </UserContext.Provider>
  );
}

function Child() {
  const { user } = useContext(UserContext);

  return <>{user}</>;
}

const rootElement = document.getElementById("root");
const r = ReactDOM.createRoot(rootElement);
r.render(<Parent />);