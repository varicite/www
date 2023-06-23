import * as React from "react"
import '../style/style.css'

const FobListing = ({ title, imageURl, definitionList }) => {
  return (
    <article class="listing">
      <h3>{title}</h3>
      <article>
        <img src={imageURl} width="150" alt="listing image" />
        <dl>
          {definitionList.map(([term, definition]) => (
            <>
              <dt>{term}</dt>
              <dd>{definition}</dd>
            </>
          ))}
        </dl>
        <button>Add To Cart</button>
      </article>
    </article>
  );
};
const listings = [
  {
    title: "Fob One",
    imageURl: "https://ipfs.io/ipfs/bafkreidtoycctoduzsvjewhw24gmqhdpmrkbi5soffzh6urj2peb25dymy?filename=fob-spiral-clear.jpg",
    definitionList:
      [["Name", "Spiral Fob One"],
      ["Material", "Clear Acrylic"],
      ["Shape", "disk"],
      ["Radius", "40mm"],]
  },
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
]
const IndexPage = () => {
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
      <body>
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
