import React from "react";
import Button from "../ui/Button";


export default function Header({ theme, toggleTheme }) {
return (
<header className={theme === "luxury" ? "luxury-header" : "family-header"}>
<h1>Wealth Blueprint Quiz</h1>
<Button onClick={toggleTheme}>
Switch to {theme === "luxury" ? "Family" : "Luxury"} Mode
</Button>
</header>
);
}
