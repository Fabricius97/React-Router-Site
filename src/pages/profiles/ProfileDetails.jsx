import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const ProfileDetails = () => {
    const profile = useLoaderData()

    return (
        <div>
            <div className="profile-details">
                <h2>{profile.name}</h2>
                <p>Email: {profile.email}</p>
                <p>Tel: {profile.phone}</p>
                <p>Adress: {profile.address.city}</p>
            </div>
            <div>
                <Link to="/profiles">Tillbaka</Link>
            </div>
        </div>
    )
}

export const profileDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!res.ok) {
        throw Error(`Det gick inte att hämta profilen med id: ${id}`)
    }
    return await res.json()
}
export default ProfileDetails
