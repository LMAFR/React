import { useState, useEffect } from "react"
import { CAT_ENDPOINT_IMAGE_PREFIX } from "../endpoints"

// Let's create a custom hook to store the image fetch logic
export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {

        // The first time the effect is executed, fact is null, so nothing will be done in that case:
        if (!fact) return
            // In other case (fact is resetted):
        const firstWord = fact.split(' ')[0]
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })

    }, [fact])

    return { imageUrl: `${CAT_ENDPOINT_IMAGE_PREFIX}${imageUrl}` }
}