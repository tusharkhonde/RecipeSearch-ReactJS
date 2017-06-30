import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class SearchRecipes extends Component{

    constructor(){
        super();

        this.state={
            ingredients :'',
            dish:''
        }
    }
    search(){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const url = `http://www.recipepuppy.com/api/?i=${this.state.ingredients}&q=${this.state.dish}`;    
        fetch(proxy+url,{
            method:'GET'
        }).then(response => response.json())
          .then(json => console.log('recipes',json));
    }

    render(){
        return(
            <Form inline>
                <FormGroup>
                    <ControlLabel>Ingredients</ControlLabel>
                    {' '}
                    <FormControl 
                            type="text" 
                            placeholder="garlic, chicken"
                            onChange={event => this.setState({ingredients: event.target.value})}

                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                    {' '}
                    <FormControl 
                            type="text" 
                            placeholder="adobo"
                            onChange={event => this.setState({dish: event.target.value})}        
                    />
                </FormGroup>
                {' '}
                <Button onClick={() => this.search()}> Submit </Button>
            </Form>
        )
    }
}

export default SearchRecipes;