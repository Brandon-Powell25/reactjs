import {Component} from "react";

import BusinessCardDisplay from "./BusninessCardDisplay";
import BusinessCardForm from "./BusinessCardForm";


export default class BusinessCardParent extends Component {
    constructor(){
        super();

        this.state = {
            editMode: false,
            name: "Example name",
            email: "Example@email.com",
        }
    }

    render(){
        if (this.state.editMode){
            // if edit is true, show the form
            return(
                <BusinessCardForm></BusinessCardForm>
            )
        } else {
            return(
                <div>
                    <BusinessCardDisplay 
                    email={this.state.email}
                    name={this.state.name}
                    />
                </div>
            )
        }
    }
}


//  import react from "react";
// class BlahBlah extends react.Component {
   // constructor(){

   // }
//}