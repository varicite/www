import * as React from "react"
import '../style/style.css'

const getD = async (url) => {
  const fetchResponse = await fetch(url);
  const jsonData = await fetchResponse.json();

  return jsonData;
}
const url = 'https://bafybeibuunoqpe65j3hu7ezjm3yqkn64y4tq7xdttc3lfcweg76bsjrixi.ipfs.w3s.link/fob-1.json';
const tokenInformation = 'https://hashscan.io/testnet/token/0.0.14974334';
// URL of JSON , token information
const wireInfo = [
  ['https://bafybeibuunoqpe65j3hu7ezjm3yqkn64y4tq7xdttc3lfcweg76bsjrixi.ipfs.w3s.link/fob-1.json',
    'https://hashscan.io/testnet/token/0.0.14974334'
  ],
  ['https://bafybeihpi35eflottxk3owr2446bsj2j7lxul5nyfv5mndinvyophcmwxa.ipfs.w3s.link/fob-2.json',
    'https://hashscan.io/testnet/token/0.0.14978344'
  ],
  ['https://bafybeiasq6cied7z4kqfgntz75tmwuxmetk36egskyiy55vrpuvgpjs4xu.ipfs.w3s.link/fob-3.json',
    'https://hashscan.io/testnet/token/0.0.14978348'
  ],
  ['https://bafybeidxujycq7gewgnkq3yk5uthjl75dtf2tocyr5cbqzgi3dwe6dv64q.ipfs.w3s.link/fob-4.json',
    'https://hashscan.io/testnet/token/0.0.14978350'
  ],
  ['https://bafybeicza3mx6muda2clg3dns2jvwytuykr2q27olguth4teja4gyvrlum.ipfs.w3s.link/fob-5.json',
    'https://hashscan.io/testnet/token/0.0.14978351'
  ],
  ['https://bafybeic2djms4o5z6y7sw33byhlsdglyq3l4atff7llr543s3kjg6dqx7y.ipfs.w3s.link/fob-6.json',
    'https://hashscan.io/testnet/token/0.0.14978352'
  ],
  ['https://bafybeifcj5nxbqyw4snr2nagx4syc4zm5tyohltrthmdl5ylif5abmsytm.ipfs.w3s.link/fob-7.json',
    'https://hashscan.io/testnet/token/0.0.14978353'
  ],
  ['https://bafybeiaugopkaguenxbsua6iskzx6ndedtndhggtpliyaf7dqk5k2r4pqu.ipfs.w3s.link/fob-8.json',
    'https://hashscan.io/testnet/token/0.0.14978354'
  ],
  ['https://bafybeigyhqply7eus65s4dvqhvfjoq3jmk7ntxzub6fw4vxadpnde4mvhu.ipfs.w3s.link/fob-9.json',
    'https://hashscan.io/testnet/token/0.0.14978355'
  ],
  ['https://bafybeiefjgiushfledt3vooqxvygc6pexs2dtm7flsqqu3nfoqrsx6w3k4.ipfs.w3s.link/fob-10.json',
    'https://hashscan.io/testnet/token/0.0.14978356'
  ],
]
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
const jsonToDispaly = (jsonPacket) => {
  const { properties, ...restJSONPacket } = jsonPacket;
  const { shape, ...restProperties } = properties;
  const lineFobData =
  {
    ...restJSONPacket,
    definitionList: Object.entries({
      ...restProperties,
      tokenInformation: <a target="new" href={tokenInformation}>{tokenInformation}</a>
    })
  };
  return lineFobData;
}
const IndexPage = () => {
  const [fob1Data, setFob1Data] = React.useState(initData)

  React.useEffect(() => {
    async function fetchData() {
      getD(url)
        .then(jsonPacket => setFob1Data(jsonToDispaly(jsonPacket)));

      };
    fetchData();

    return () => { }
  }, [setFob1Data])

  return (
    <main >
      <header>
        <h1>xx
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
      <p>Contract Information <a
        target="new"
        href="https://hashscan.io/testnet/contract/0.0.14971695" >
        https://hashscan.io/testnet/contract/0.0.14971695
      </a>
      </p>
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
