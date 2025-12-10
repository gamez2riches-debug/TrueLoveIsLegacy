import React from "react";


export default function Button({ children, ...props }) {
return (
<button className="ui-btn" {...props}>
{children}
</button>
);
}
