import { useEffect } from "react";

const UserFunction = () => {
  useEffect(() => {
    const timer = setInterval(
      () => console.log("Namaste React from function"),
      1000
    );

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="user-class">
      <h1>Sagarika Jaiswal</h1>
      <h1>SDE</h1>
    </div>
  );
};

export default UserFunction;
