import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import {BrowserRouter as Router} from "react-router-dom"
import {ProviderContext} from "./context/photosContext"

ReactDOM.render(<ProviderContext>
                    <Router>
                        <App />
                    </Router>
                </ProviderContext>, document.getElementById("root"))