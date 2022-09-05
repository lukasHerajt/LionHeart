import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function BidCard({ bid, handleInputChange }) {
    const navigate = useNavigate()

    return (
        <div class="card shadow" >
            <div className="card-body">
                <h5 className="card-title">Place your Bid</h5>
                <div className="d-flex justify-content-center">
                    <p>+</p>
                    <h6 className="card-subtitle mb-2 text-muted px-5">${String(+bid + 3)}/h</h6>
                    <p>-</p>

                </div>
                <p className="card-text">Winner will pay the second highest bi!</p>
                <Button block className="btn-warning"
                    onClick={() => {
                        handleInputChange()
                        navigate('/Company/4')

                    }}
                >
                    Place bid
                </Button>
            </div>
        </div>
    )
}
