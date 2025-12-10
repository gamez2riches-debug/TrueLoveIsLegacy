import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Section from "../ui/Section";


export default function Home({ theme }) {
const navigate = useNavigate();


return (
<Section>
<h2>{theme === "luxury" ? "Build Your Own Bank" : "Secure Your Family’s Future"}</h2>
<p>
{theme === "luxury"
? "Design a custom wealth blueprint that helps you build assets, grow income, and create generational power."
: "Discover the smartest financial path for your household with our simple guided quiz."}
</p>
<Button onClick={() => navigate("/quiz")}>Start Quiz</Button>
</Section>
);
}
