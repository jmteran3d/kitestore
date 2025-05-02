export const UserStatus = ({ name, data, isOnline }) => {
    console.log(isOnline, data)
    return (
      <div>
        <h1>{name}</h1>
        <div>{isOnline ? "En linea" : "Fuera de linea"}</div>
      </div>
    );
  };