const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

const randomBgColor = () => ({
  backgroundColor: getRandomHexColor(),
});

export default randomBgColor;
