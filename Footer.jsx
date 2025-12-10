import React from "react";


export default function Footer({ theme }) {
return (
<footer className={theme === "luxury" ? "luxury-footer" : "family-footer"}>
<p>© 2026 Wealth Blueprint Systems</p>
</footer>
);
}
