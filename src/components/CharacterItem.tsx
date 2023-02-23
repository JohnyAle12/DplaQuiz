
type Props = {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const CharacterItem = ({
  id,
  name,
  description,
  image
}: Props) => {
  return (
    <div className="col-3 mt-3" key={id}>
      <div className="card">
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Show more</a>
        </div>
      </div>
    </div>
  )
}
