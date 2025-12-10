import React, { useState } from "react";
import Section from "../ui/Section";
import Button from "../ui/Button";


export default function Results({ theme, quizData }) {
const [lead, setLead] = useState({ name: "", email: "", phone: "" });
const [submitted, setSubmitted] = useState(false);


const handleSubmit = () => {
setSubmitted(true);
console.log("Lead Captured:", lead, quizData);
};


return (
<Section>
<h2>{theme === "luxury" ? "Your Wealth Blueprint" : "Your Family Financial Path"}</h2>


<p>Your answers: {quizData.answers.join(", ")}</p>


{!submitted ? (
<>
<h3>Get Your Personalized Plan</h3>
<input
placeholder="Name"
onChange={(e) => setLead({ ...lead, name: e.target.value })}
/>
<input
placeholder="Email"
onChange={(e) => setLead({ ...lead, email: e.target.value })}
/>
<input
placeholder="Phone"
onChange={(e) => setLead({ ...lead, phone: e.target.value })}
/>
<Button onClick={handleSubmit}>Submit</Button>
</>
) : (
<h3>Thank you! Your plan is on the way.</h3>
)}
</Section>
);
}
