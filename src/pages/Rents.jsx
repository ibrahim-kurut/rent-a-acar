import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// import data from "../data.json"
import HeaderHero from '../components/HeaderHero';
import TableRents from '../components/TableRents';
import { useDispatch, useSelector } from 'react-redux';
import { getUserReservations } from '../redux/Slices/reserveSlice';


const Rents = () => {


    // const { id } = useParams()

    // Search for a car in the data by id
    const dispatch = useDispatch()
    const { userReservations } = useSelector(state => state.reservations)


    useEffect(() => {
        dispatch(getUserReservations())
    }, [dispatch])
    return (
        <div>
            <HeaderHero />
            <div className="container mx-auto">
                <TableRents userReservations={userReservations} />
            </div>

        </div>
    )
}

export default Rents