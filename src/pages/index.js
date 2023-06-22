import * as React from "react"
import '../style/style.css'

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
      <article class="listing">
        <h3>Spiral Fob 1</h3>
        <article>
          <div class="fob-image">&nbsp; </div>
          <dl>
            <dt>Name</dt>
            <dd>Spiral Fob 1</dd>
            <dt>Material</dt>
            <dd>Clear Acrylic</dd>
            <dt>Shape</dt>
            <dd>disk</dd>
            <dt>Radius</dt>
            <dd>30mm</dd>
          </dl>
          <button>Add To Cart</button>
        </article>
      </article>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
