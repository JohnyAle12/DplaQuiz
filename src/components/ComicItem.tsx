
type Props = {
  id: string;
  title: string;
  description?: string;
  image: string;
}

export const ComicItem = ({
  id,
  title,
  description,
  image
}: Props) => {
  return (
    <div className="col-3 mt-3" key={id}>
      <div className="card">
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Show more</a>
        </div>
      </div>
    </div>
  )
}
