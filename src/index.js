import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import sizeMe from "react-sizeme";
import Confetti from "react-confetti";
import Boton from "./boton"
import kairo from './kairo.png'
import './App.css';

const styles = {
  fontFamily: "sans-serif",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
};

const botonStyle = {
    zIndex: "99999", 
    color: "#c04db6",
    position: "absolute",
    left: "0px",
    top: "0px",
    color: "#c04db6"
  }

const divBoton = {
  zIndex: "6",
  alignItems: "baseline",
  display: "flex",
  justifyContent: "center",
  left: "43%",
  top: "85%",
  position: "absolute",
  backgroundColor: "#c04db6",
  borderRadius: "10px"
}

const DimensionedExample = sizeMe({
  monitorHeight: true,
  monitorWidth: true
})(
  class Example extends React.PureComponent {
    state = {
      animationDone: true
    };

    static propTypes = {
      size: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number
      })
    };

    componentDidMount() {
      setTimeout(() => {
        this.toggleConfetti();
      }, 9000);
    }

    toggleConfetti = () => {
      this.setState({ animationDone: !this.state.animationDone });
    };

    render() {
      return (
        <div
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <Confetti
            gravity={0.4}
            run={this.state.animationDone}
            numberOfPieces={400}
            {...this.props.size}
          />
        </div>
      );
    }
  }
);

const App = () => (
  <div style={styles}>
    <div style={divBoton}><Boton style={botonStyle}/></div>
    
    <DimensionedExample />
    <div className="App"> 
    <header className="App-header">
        <img src={kairo} className="App-logo" alt="logo" />
        <p>
         MUY MUY FELIZ CUMPLE AMOR!!
        </p>
        <p>
        🥳 sip, es el cumple de la mejor TBS 🥳
        </p>        
      </header>
    </div>
    
  </div>
);

render(<App />, document.getElementById("root"));
