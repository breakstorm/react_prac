import React from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: "harper",
  lastName: "perez"
}
function getGreeting(user) {
    if(user){
        return <h1>hello, {formatName(user)}!</h1>
    }
    return <h1>Hello, Stranger.</h1>
}
const title = "response.potentiallyMaliciousInput;"
const element = <h1>{title}</h1>

class Introducing extends React.Component{
    constructor(){
        super();
        this.state={};
    }

    render() {
        return (
        <div>
            <h2> example2 : hello, {formatName(user)}</h2>
            {element}
            <getGreeting />
        </div>
        )
    }
}

export default Introducing;