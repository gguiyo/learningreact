import { useState } from "react"
export function TwitterFollowCard({ username, name, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    console.log('TwitterFollowCard render with username', username)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="avatar"
                    src={`https://unavatar.io/twitter/${username}`}></img>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{username}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}