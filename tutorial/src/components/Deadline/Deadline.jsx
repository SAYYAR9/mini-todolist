import './Deadline.css'
import { useState, useEffect } from 'react';


function Deadline(props) {
    const [dayCount, setDayCount] = useState(0)
    const [hourCount, setHourCount] = useState(0)

    // console.log('component rendered ');

    // useEffect(() => {
    //     console.log('did mount');
    // }, [] ) //didmount
    // //})
    
    // useEffect(() => {
    //     console.log('day count changed');
    // }, [dayCount])
    // useEffect(() => {
    //     console.log('hour count changed');
    // }, [hourCount])
    // useEffect(() => {
    //     console.log('day count or hour count changed');
    // }, [dayCount, hourCount])
    // useEffect(() => {
    //     console.log('something changed');
    // })
    // useEffect(() => {
    //     console.log('+++++++++++++++++++++++++++++++++++++++');
    // })

    const incHours = () => {
        setHourCount((prewState) => prewState + 1 )
    }
    const decHours = () => {
        setHourCount((prewState) => prewState - 1)
    }


    const incDays = () => {
        setDayCount((prewState) => prewState + 1)
    }
    const decDays = () => {
        setDayCount((prewState) => prewState - 1)
 
    }
    return (
        <div className="deadline" >
            <div className='times'>
            <div className="days">Days:{dayCount}</div>
            <div className="hours">Hours:{hourCount}</div>
            </div>
            <div className="controls">
                <button className="inc" onClick={incDays}>+</button>
                <button className="dec" onClick={decDays}>-</button>
            </div> 
            <div className="controls">
                <button className="inc" onClick={incHours}>+</button>
                <button className="dec" onClick={decHours}>-</button>
            </div> 

        </div>
    )
}

 
export default Deadline
