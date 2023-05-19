export const getUsers = () => {
  return fetch("https://64673771ba7110b663b23d66.mockapi.io/users/users").then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error" + response.status);
    }
  );
};
