import { Link, useRouteError } from 'react-router-dom'
export default function ProfilesError() {
    const error = useRouteError()

    return (
        <div className="profile-error">
            <h2>Error!</h2>
            <p>{error.message}</p>
            <Link to="/profiles">Gå tillbaka profilerna</Link>
        </div>
    )
}
