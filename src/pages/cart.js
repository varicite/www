import * as React from 'react';
import '../style/style.css'
import '../style/cart.css'

export default function Component() {
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
        <body className='cart'>
            <h2>Fob Cart</h2>
            <p>
                Complete the form to purchase a fob
            </p>
            <form>
                <textarea>
                    Enter shipping information
                </textarea>
                <button>Connect Cart</button>

                <button>Buy Fob</button>

            </form>

        </body>
    </>
}
