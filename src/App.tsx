import React, { useEffect } from "react";
import { getSelfRoleList } from "./api/role";

const App: React.FC = () => {
  useEffect(() => {
    getSelfRoleList();
  }, []);
  return <div>App</div>;
};

export default App;
