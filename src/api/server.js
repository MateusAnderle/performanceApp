module.exports = () => {
  const data = {
    friends: [],
  };

  for (let index = 0; index < 500; index++) {
    const randomNumber = Math.floor(Math.random() * 1001);
    data.friends.push({
      id: index + 1,
      likes: randomNumber,
      name: `Friend ${index + 1}`,
    });
  }

  return data;
};
