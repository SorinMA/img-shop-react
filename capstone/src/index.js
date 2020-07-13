import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import {BrowserRouter as Router} from "react-router-dom"
import {ProviderContext} from "./context/photosContext"
import {ProviderFavAndCartContext} from "./context/cartAndLikeContext"

ReactDOM.render(
                <ProviderFavAndCartContext>
                    <ProviderContext>
                        <Router>
                            <App />
                        </Router>
                    </ProviderContext>
                </ProviderFavAndCartContext>, document.getElementById("root"))