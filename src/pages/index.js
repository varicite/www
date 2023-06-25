import * as React from "react"
import '../style/style.css'

const getD = async (url) => {
  const fetchResponse = await fetch(url);
  const jsonData = await fetchResponse.json();

  return jsonData;
}
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
  const follow = (local) => {
    window.location.href = '/cart?id=3'
  }
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
        <button onClick={follow}>Add To Cart</button>
      </article>
    </article>
  );
};
const initData = {
  name: '',
  creator: '',
  type: '',
  image: '',
  description: '',
  definitionList: [['', '']]
}
const jsonToDispaly = (jsonPacket, tokenInformation) => {
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
  const [fob2, setFob2] = React.useState(initData)
  const [fob3, setFob3] = React.useState(initData)
  const [fob4, setFob4] = React.useState(initData)
  const [fob5, setFob5] = React.useState(initData)
  const [fob6, setFob6] = React.useState(initData)
  const [fob7, setFob7] = React.useState(initData)
  const [fob8, setFob8] = React.useState(initData)
  const [fob9, setFob9] = React.useState(initData)
  const [fob10, setFob10] = React.useState(initData)

  React.useEffect(() => {
    async function fetchData() {
      getD(wireInfo[0][0])
        .then(jsonPacket => setFob1Data(jsonToDispaly(jsonPacket, wireInfo[0][1])));
      getD(wireInfo[1][0])
        .then(jsonPacket => setFob2(jsonToDispaly(jsonPacket, wireInfo[1][1])));
      getD(wireInfo[2][0])
        .then(jsonPacket => setFob3(jsonToDispaly(jsonPacket, wireInfo[2][1])));
      getD(wireInfo[3][0])
        .then(jsonPacket => setFob4(jsonToDispaly(jsonPacket, wireInfo[3][1])));
      getD(wireInfo[4][0])
        .then(jsonPacket => setFob5(jsonToDispaly(jsonPacket, wireInfo[4][1])));
      getD(wireInfo[5][0])
        .then(jsonPacket => setFob6(jsonToDispaly(jsonPacket, wireInfo[5][1])));
      getD(wireInfo[6][0])
        .then(jsonPacket => setFob7(jsonToDispaly(jsonPacket, wireInfo[6][1])));
      getD(wireInfo[7][0])
        .then(jsonPacket => setFob8(jsonToDispaly(jsonPacket, wireInfo[7][1])));
      getD(wireInfo[8][0])
        .then(jsonPacket => setFob9(jsonToDispaly(jsonPacket, wireInfo[8][1])));
      getD(wireInfo[9][0])
        .then(jsonPacket => setFob10(jsonToDispaly(jsonPacket, wireInfo[9][1])));
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
        <FobListing
          title={fob2.name}
          imageURl={fob2.image}
          definitionList={fob2.definitionList}
        />
        <FobListing
          title={fob3.name}
          imageURl={fob3.image}
          definitionList={fob3.definitionList}
        />
        <FobListing
          title={fob4.name}
          imageURl={fob4.image}
          definitionList={fob4.definitionList}
        />
        <FobListing
          title={fob5.name}
          imageURl={fob5.image}
          definitionList={fob5.definitionList}
        />
        <FobListing
          title={fob6.name}
          imageURl={fob6.image}
          definitionList={fob6.definitionList}
        />
        <FobListing
          title={fob7.name}
          imageURl={fob7.image}
          definitionList={fob7.definitionList}
        />
        <FobListing
          title={fob8.name}
          imageURl={fob8.image}
          definitionList={fob8.definitionList}
        />
        <FobListing
          title={fob9.name}
          imageURl={fob9.image}
          definitionList={fob9.definitionList}
        />
        <FobListing
          title={fob10.name}
          imageURl={fob10.image}
          definitionList={fob10.definitionList}
        />
      </body>
    </main>
  )
}

export default IndexPage
export const Head = () => <title>Varicite</title>
