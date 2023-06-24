import * as React from "react"
import '../style/style.css'

const getD = async (url) => {
  const fetchResponse = await fetch(url);
  const jsonData = await fetchResponse.json();
  const { shape, image, properties, ...rest } = { ...jsonData, ...jsonData.properties };

  return jsonData;
}
const url = 'https://bafybeibuunoqpe65j3hu7ezjm3yqkn64y4tq7xdttc3lfcweg76bsjrixi.ipfs.w3s.link/fob-1.json';

const FobListing = ({ title, imageURl, definitionList }) => {

  return (
    <article class="listing">
      <h3>{title}</h3>
      <article>
        <img src={imageURl} width="150" alt="listing image" />
        <dl>
          {(definitionList).map(([term, definition]) => {
            const label = [...term.replace(/_/g, ' ')];

            return (
              <>
                <dt>{label.join('')}</dt>
                <dd>{definition}</dd>
              </>
            );
          })}
        </dl>
        <button>Add To Cart</button>
      </article>
    </article>
  );
};
const listings = [
  {
    title: "Fob Two",
    imageURl: "https://ipfs.io/ipfs/bafkreidtoycctoduzsvjewhw24gmqhdpmrkbi5soffzh6urj2peb25dymy?filename=fob-spiral-clear.jpg",
    definitionList:
      [["Name", "Spiral Fob Two"],
      ["Material", "Clear Acrylic"],
      ["Shape", "disk"],
      ["Radius", "40mm"],]
  },
  {
    title: "Fob Three",
    imageURl: "https://ipfs.io/ipfs/bafkreidtoycctoduzsvjewhw24gmqhdpmrkbi5soffzh6urj2peb25dymy?filename=fob-spiral-clear.jpg",
    definitionList:
      [["Name", "Spiral Fob Three"],
      ["Material", "Clear Acrylic"],
      ["Shape", "disk"],
      ["Radius", "40mm"],]
  },
  {
    title: "Fob Four",
    imageURl: "https://ipfs.io/ipfs/bafkreidtoycctoduzsvjewhw24gmqhdpmrkbi5soffzh6urj2peb25dymy?filename=fob-spiral-clear.jpg",
    definitionList:
      [["Name", "Spiral Fob Four"],
      ["Material", "Clear Acrylic"],
      ["Shape", "disk"],
      ["Radius", "40mm"],]
  },
  {
    title: "Fob Five",
    imageURl: "https://ipfs.io/ipfs/bafkreidtoycctoduzsvjewhw24gmqhdpmrkbi5soffzh6urj2peb25dymy?filename=fob-spiral-clear.jpg",
    definitionList:
      [["Name", "Spiral Fob Five"],
      ["Material", "Clear Acrylic"],
      ["Shape", "disk"],
      ["Radius", "40mm"],]
  },
  {
    title: "Fob Six",
    imageURl: "https://ipfs.io/ipfs/bafkreidtoycctoduzsvjewhw24gmqhdpmrkbi5soffzh6urj2peb25dymy?filename=fob-spiral-clear.jpg",
    definitionList:
      [["Name", "Spiral Fob Six"],
      ["Material", "Clear Acrylic"],
      ["Shape", "disk"],
      ["Radius", "40mm"],]
  },
  {
    title: "Fob Seven",
    imageURl: "https://ipfs.io/ipfs/bafkreidtoycctoduzsvjewhw24gmqhdpmrkbi5soffzh6urj2peb25dymy?filename=fob-spiral-clear.jpg",
    definitionList:
      [["Name", "Spiral Fob Seven"],
      ["Material", "Clear Acrylic"],
      ["Shape", "disk"],
      ["Radius", "40mm"],]
  },
  {
    title: "Fob Eight",
    imageURl: "https://ipfs.io/ipfs/bafkreidtoycctoduzsvjewhw24gmqhdpmrkbi5soffzh6urj2peb25dymy?filename=fob-spiral-clear.jpg",
    definitionList:
      [["Name", "Spiral Fob Eight"],
      ["Material", "Clear Acrylic"],
      ["Shape", "disk"],
      ["Radius", "40mm"],]
  },
  {
    title: "Fob Nine",
    imageURl: "https://ipfs.io/ipfs/bafkreidtoycctoduzsvjewhw24gmqhdpmrkbi5soffzh6urj2peb25dymy?filename=fob-spiral-clear.jpg",
    definitionList:
      [["Name", "Spiral Fob Nine"],
      ["Material", "Clear Acrylic"],
      ["Shape", "disk"],
      ["Radius", "40mm"],]
  },
  {
    title: "Fob Ten",
    imageURl: "https://ipfs.io/ipfs/bafkreidtoycctoduzsvjewhw24gmqhdpmrkbi5soffzh6urj2peb25dymy?filename=fob-spiral-clear.jpg",
    definitionList:
      [["Name", "Spiral Fob Ten"],
      ["Material", "Clear Acrylic"],
      ["Shape", "disk"],
      ["Radius", "40mm"],]
  },
]
const initData = {
  name: '',
  creator: '',
  type: '',
  image: '',
  description: '',
  definitionList: [['', '']]
}
const IndexPage = () => {
  const [fob1Data, setFob1Data] = React.useState(initData)

  React.useEffect(() => {
    async function fetchData() {
      const jsonPacket = await getD(url)
      const { properties, ...restJSONPacket } = jsonPacket;
      const { shape, ...restProperties } = properties;
      const lineFobData = { ...restJSONPacket, definitionList: Object.entries(restProperties) };
      setFob1Data(lineFobData)
    };
    fetchData();

    return () => { }
  }, [setFob1Data])

  return (
    <main >
      <header>
        <h1>
          <img src="https://ipfs.io/ipfs/bafkreie3coyvoqugh3xidoxhqj7wchtcxscrn6t4pcjhkzjsjohk7uzez4?filename=logo-a.svg"
            width="200" />
        </h1>
        <nav>
          <a href="about">About</a>
          <span>|</span>
          <a href="fobs-ab">Fobs AB</a>
        </nav>
      </header>
      <h1>The Spiral Series</h1>
      <body>
        <FobListing
          title={fob1Data.name}
          imageURl={fob1Data.image}
          definitionList={fob1Data.definitionList}
        />
        {listings.map(l => {
          return (<FobListing
            title={l.title}
            imageURl={l.imageURl}
            definitionList={l.definitionList}
          />)
        })}
      </body>
    </main>
  )
}

export default IndexPage
export const Head = () => <title>Varicite</title>
