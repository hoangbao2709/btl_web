import { Header } from "./header/header";
import { Images } from "./review/image";
import Sliders from "react-slick";
import { Total } from "./total/total";
import { BrowserRouter, Routes, Route } from "react-router";


export function Main(){
      return (
        <div>
          <BrowserRouter>

            <Header/>
            <div className="flex">
              <Images/>
            </div>
            <div className="flex justify-center mt-[50px]">
            <Routes>
              <Route path="/" element={<Total/>} />
            </Routes>
              
            </div>
          </BrowserRouter>
        </div>
      );
}