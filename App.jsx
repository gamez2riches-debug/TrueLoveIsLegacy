import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Quiz from "./components/pages/Quiz";
import Results from "./components/pages/Results";
import "./themes/luxury.css";
import "./themes/family.css";
import "./App.css";


export default function App() {
const [theme, setTheme] = useState("family");
const [quizData, setQuizData] = useState({ answers: [], score: 0, leadInfo: null });


const toggleTheme = () => setTheme(theme === "family" ? "luxury" : "family");


return (
<div className={theme === "luxury" ? "luxury-bg" : "family-bg"}>
<Router>
<Header theme={theme} toggleTheme={toggleTheme} />
<main>
<Routes>
<Route path="/" element={<Home theme={theme} />} />
<Route path="/quiz" element={<Quiz theme={theme} setQuizData={setQuizData} />} />
<Route path="/results" element={<Results theme={theme} quizData={quizData} />} />
</Routes>
</main>
<Footer theme={theme} />
</Router>
</div>
);
}
