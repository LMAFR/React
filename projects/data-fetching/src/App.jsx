import './App.css'
import { CAT_ENDPOINT_IMAGE_PREFIX } from './endpoints'
import { useCatImage } from './hooks/catImage'
import { useCatFact } from './hooks/catFact'

export function App() {

    // Order is important here (states are synchronous)
    const { fact, refreshFact} = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={refreshFact}>New fact</button>
            <br />
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Image extracted using the next word: ${fact}`} />}
            </section>
        </main>
    )
}