import React from 'react'

const styles = {
    color: "#ffffff",
    margin: "0.5em",
    padding: "0",
    fontWeight: "bolder",
    textDecoration: "none",
}

export default function Boton() {
    return (
            <a
          href="https://www.youtube.com/channel/UCd-5DyFo3FbRLUFGYk_N-xQ"
          target="_blank"
          rel="noopener noreferrer"
          style={styles}
        >
          Podes seguirla por su canal
        </a>
    )
}
