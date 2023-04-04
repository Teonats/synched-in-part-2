import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Person (props) {
    let fullName = props.person.fullName
    let company = props.person.company
    let devLevel = props.person.devLevel
    let favoriteColor = props.person.favoriteColor
    let bio = props.person.bio

    return (
        <Card style={ {backgroundColor:"antiquewhite"} } className="person-card col-2" >
      <Card.Body>
        <Card.Subtitle style={{borderBottom: "1px solid black"}}>{ devLevel }</Card.Subtitle>
        <Card.Title style={ {color: favoriteColor} }>{ fullName }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{ company }</Card.Subtitle>
        <Card.Text>
          { bio }
        </Card.Text>
        </Card.Body>
        </Card>
    )

}