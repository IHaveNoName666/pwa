import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Location from "./pages/Location";
import PWAPrompt from 'react-ios-pwa-prompt'

export const router = createBrowserRouter(

    createRoutesFromElements(
        <>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="/location" element={<Location/>} />
  
      </Route>
      <PWAPrompt copyTitles="Føj til hjemmeskærm"/>
    </>
    )
)