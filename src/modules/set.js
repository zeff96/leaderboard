const setData = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iVPLk6yWLbkOvkoG9vYp/scores/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      user: document.querySelector('#add-name').value,
      score: document.querySelector('#add-score').value,

    }),
  });

  const sentData = await res.json();

  if (!res.ok) return undefined;

  return sentData;
};

export default setData;