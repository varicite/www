import * as React from 'react';

export default function Component() {

  const getD = async (url) => {
    const dlTemplate = document.createElement('dl');
    let r = '';
    const response = await fetch(url);
    const jsonData = await response.json();
    const { shape, image, properties, ...rest } = { ...jsonData, ...jsonData.properties };
    Object.entries(rest).forEach(([key, value]) => {
      const label = [...key.replace(/_/g, ' ')];
      label[0] = label[0].toUpperCase();
      r += `${label.join('')} : ${value} ::: `;
    });
    dlTemplate.innerHTML = r;
    return r;
  }
  const url = 'https://ipfs.io/ipfs/bafkreibokytgnctky5qvqkr6tqm2ulg4w6dx62ghjdgulyz5437k3idz6a?filename=fob-a.json';
  const urlB = 'https://ipfs.io/ipfs/bafkreicaccdqssva3gszr2ufkdcmpulzixrdt4n5percnd4spr7qfshzkm?filename=fob-b.json';

  const [s, setS] = React.useState('XXX')
  const [b, setB] = React.useState('XXX')

  React.useEffect(() => {
    async function fetchData() {
      const htmlR = await getD(url)
      // domTargetA.appendChild(htmlR)
      setS(htmlR)
      const htmlB = await getD(urlB);
      // domTargetB.appendChild(htmlB);
      setB(htmlB)

    };
    fetchData();

    return () => { }
  }, [])
  return <>
    <header>
      <h1>
        <img src="https://ipfs.io/ipfs/bafkreie3coyvoqugh3xidoxhqj7wchtcxscrn6t4pcjhkzjsjohk7uzez4?filename=logo-a.svg"
          width="200" />
      </h1>
      <nav>
        <a href="/">Home</a>
      </nav>
    </header>
    <h2>Two examples of fobs as NFTs</h2>
    <article>
      <h3>Contract Information:</h3>
      <a target="new" href="https://hashscan.io/testnet/contract/0.0.14818770?p=1&k=1687018163.812945327">
        https://hashscan.io/testnet/contract/0.0.14818770?p=1&k=1687018163.812945327
      </a>
      <h3>Non Fungible Token Information:</h3>
      <a target="new" href="https://hashscan.io/testnet/token/0.0.14818771?p=1&k=2">
        https://hashscan.io/testnet/token/0.0.14818771?p=1&k=2
      </a>
    </article>
    <article>
      <img src="https://ipfs.io/ipfs/bafkreidtoycctoduzsvjewhw24gmqhdpmrkbi5soffzh6urj2peb25dymy?filename=fob-spiral-clear.jpg"
        width="300" />
      {s}
      <article id="a"></article>
    </article>
    <img src="https://ipfs.io/ipfs/bafybeibzj37obnksvsobrdpxcjlzzbgie7qcj3bb23jynnik6jc5rraaqm?filename=fob-spiral-black.jpg"
      width="300" />
    {b}
    <article id="b"></article>
  </>
}