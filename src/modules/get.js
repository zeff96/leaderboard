const getData = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iVPLk6yWLbkOvkoG9vYp/scores/');

  const returnData = await res.json();

  if (!res.ok) return undefined;

  return returnData;
};

export default getData;