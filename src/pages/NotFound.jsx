import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <h2>404 error - Vi kunde inte hitta sidan!</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia alias cupiditate ad nostrum doloribus iste tempora
                quisquam excepturi repellat, fugit cumque dolore magni possimus
                inventore neque provident! Sunt, quo eos?
            </p>

            <p>
                Gå tillbaka till <NavLink to="/">Hemsidan</NavLink>.
            </p>
        </div>
    )
}
