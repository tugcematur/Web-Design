
import React from 'react'
import ReactDOM from 'react-dom';

class Button extends React.Component{
 
    render(){ // render metodu her zamana parametresiz

        return (                               // renderın içinde return eder 
  
          <button>{this.props.label}</button>
        )
    }

}

ReactDOM.render(<Button label="Save"/>,/*mountNode*/ document.getElementedById('root'));

export default Button;