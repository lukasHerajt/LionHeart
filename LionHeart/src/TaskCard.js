import React from 'react'
import { Card, CardText, CardBody, CardSubtitle, CardTitle, Button } from 'reactstrap'


export default function TaskCard({ completed }) {
    console.log('completed: ', completed)
    return (
        <Card
        >

            <CardBody>
                <CardTitle>
                    <h1>Google analytics dashboard</h1>
                </CardTitle>
                <CardSubtitle>
                    <p className="text-sm-start">Due July 4th, 2022</p>
                </CardSubtitle>
                <CardSubtitle>
                    <p className="text-sm-start">{completed ? <div class="container text-start">
                        <div class="starrating risingstar d-flex justify-content-end flex-row-reverse">
                            <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="5 star"></label>
                            <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="4 star"></label>
                            <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="3 star"></label>
                            <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="2 star"></label>
                            <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="1 star"></label>
                        </div>
                    </div> : ''}</p>
                </CardSubtitle>
                <CardText>
                    This is some text within a card body.his is some text within a card body.his is some text within a card body.his is some text within a card body.
                </CardText>
                {completed ? '' : (

                    <CardText className="container">
                        <div className="row">
                            <Button className=" col-5 btn-info mx-auto">
                                Edit
                            </Button>
                            <Button className="col-5 btn-warning mx-auto">
                                Delete
                            </Button>
                        </div>
                    </CardText>
                )}
            </CardBody>
        </Card>
    )
}
