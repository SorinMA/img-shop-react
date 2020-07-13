import React, {useState, useEffect} from "react"

const PhotoContext = React.createContext()

function ProviderContext(props) {
    let [photos, setPhotos] = useState({})

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(response => response.json())
        .then(data => {setPhotos(data)})
            
    }, [])

    return (
        <>
            <PhotoContext.Provider value={{photos:photos}}>
                {props.children}
            </PhotoContext.Provider>
        </>
    )

}

export {PhotoContext, ProviderContext}