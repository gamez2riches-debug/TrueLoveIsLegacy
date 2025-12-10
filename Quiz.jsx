import React, { useState } from "react";
{
q: "How soon do you want to scale your income?",
options: ["ASAP", "1–3 months", "3–6 months", "Just exploring"],
},
{
q: "How confident are you with managing money?",
options: ["Very", "Somewhat", "Learning", "Need help"],
},
];


const familyQuestions = [
{
q: "What best describes your home goals?",
options: ["Upgrade", "Downsize", "Investment", "Not sure"],
},
{
q: "What is your time frame?",
options: ["Immediately", "1–3 months", "3–6 months", "Just looking"],
},
{
q: "How would you rate your financial readiness?",
options: ["Excellent", "Good", "Fair", "Need improvement"],
},
];


const questions = theme === "luxury" ? luxuryQuestions : familyQuestions;


const [index, setIndex] = useState(0);
const [answers, setAnswers] = useState([]);


const handleSelect = (option) => {
const updated = [...answers, option];
setAnswers(updated);


if (index + 1 < questions.length) {
setIndex(index + 1);
} else {
setQuizData({ answers: updated, score: updated.length });
navigate("/results");
}
};


return (
<Section>
<h2>{questions[index].q}</h2>
{questions[index].options.map((opt, i) => (
<Button key={i} onClick={() => handleSelect(opt)}>{opt}</Button>
))}
<p>
Question {index + 1} of {questions.length}
</p>
</Section>
);
}
