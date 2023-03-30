import React from 'react'

const CostComparison = () => {
    return (
        <>
        <div className="row mt-5 mb-4 justify-content-center">
            <div><h3 className="sblue text-center fw-bold">Cost Comparison</h3></div>
            <div className="col-8 mt-2">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Work Performed</th>
                        <th scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Haul, Move & Block</td>
                        <td>$50</td>
                    </tr>
                    <tr>
                      
                        <td>Lift, Move & Launch</td>
                    
                        <td>$50</td>
                    </tr>
                    <tr>
                        <td>Wash & prep pontoons</td>
                        <td>$45</td>
                    </tr>
                    <tr>
                        <td>Apply 4 coats Alumetron</td>
                        <td>$271</td>
                    </tr>
                    <tr className="fw-bold text-danger">
                        <td>Subtotal</td>
                        <td>$471</td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
        </>
    )
}

export default CostComparison