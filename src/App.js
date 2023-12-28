import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {data.map((d) => (
          <div className="card">
            <div className="img-container">
              <img src={d.img} alt="" className="img" />
            </div>
            <div className="text">
              <p>{d.name}</p>
              <p>{d.review}</p>
              <button className="btn">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    name: `Human`,
    img: `/students/img1.svg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Mountain`,
    img: `/students/img2.svg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Sun`,
    img: `/students/img3.svg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Rocket`,
    img: `/students/img4.svg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Tree`,
    img: `/students/img5.svg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];
