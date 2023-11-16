import { Navigate, Route, Routes} from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { NavBar } from "./components/NavBar"

export const MainApp =() => {
  return (
    <>
        <h1>MainApp</h1>
        <hr />

        <NavBar/>

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/*" element={<Navigate/>}/>
        </Routes>
    </>
  )
}
