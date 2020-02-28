import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends React.Component {

    state={
        discountStart:0,
        discountEnd:30
    }

    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }

    }

    componentDidUpdate() {
        setTimeout(()=>{
            this.porcentage()

        },30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                <Fade 
                     onReveal={()=> this.porcentage()}
                     >
                    <div className="discount_porcentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>  


                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase tickets before 20th JUNE</h3>
                        <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web.</p>
                    
                        <MyButton
                           text="Purchase tickets"
                           bck="#ffa800"
                           color="#ffffff"
                           link="http://google.com"
                       />
                    </div>
                </Slide>    

                </div>
            </div>
        );
    }
}

export default Discount;