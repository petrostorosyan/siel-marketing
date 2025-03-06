export const getMultipleRandom = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
};


const greenStar = () => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
        fill="#16A7A7"
      />
    </svg>
  );
};

const grayStar = () => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
        fill="#D9D9D9"
      />
    </svg>
  );
};

export const starsCount = (rate) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      stars.push(<span key={`green-star-${i}`}>{greenStar()}</span>);
    } else {
      stars.push(<span key={`gray-star-${i}`}>{grayStar()}</span>);
    }
  }
  return <div>{stars}</div>;
};