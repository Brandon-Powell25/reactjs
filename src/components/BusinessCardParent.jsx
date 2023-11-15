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

    
    /**
     * Description placeholder
     * 
     * @param stateKeyId - String, should match a key in this.state for BusinessCardParent
     * @param newStateValue - String, should be the new value we want to set for the state key in BusinessCardParent
     *
     */

    updateState =(stateKeyId, newStateValue) => {
       // this.setState({
       //     name: newStateValue
       // })

       if (Object.keys(this.state).includes(stateKeyId)){
        console.log("state contains the input field of " + stateKeyId );
        
        if (stateKeyId === "name"){
            // Validation and sanitisation for name here
        } else if (stateKeyId === "email"){
            // Validation and sanitisation for email here
        }

        
        
        this.setState({
            [stateKeyId]: newStateValue
        })



       } else {
            console.warn("Incorrect state was almost created or edited. Nothing else happened!");
       }


       // updateState("name", "some new name");
       // udateState("email", "some new email");
    }


    render(){
        if (this.state.editMode){
            // if edit is true, show the form
            return(
                <BusinessCardForm 
                 name={this.state.name} 
                 email={this.state.email} 
                 setParentState={this.updateState}
                 />
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