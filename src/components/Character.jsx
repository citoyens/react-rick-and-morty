function Character({ character }) {
  return (
    <div className="text-center p-3">
      <h5>{character.name}</h5>
      <img
        className="img-fluid rounded-pill"
        src={character.image}
        alt={character.name}
      ></img>
      <h6>{character.origin.name}</h6>
    </div>
  );
}

export default Character;
