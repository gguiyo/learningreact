import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        username: 'gguiyo',
        name: 'Guillermo Bermeo',
        isFollowing: false

    },
    {
        username: 'RedHat',
        name: 'RedHat',
        isFollowing: true
    },
    {
        username: 'taws',
        name: 'TAWS',
        isFollowing: true
    }
]

export function App() {
    return (
        <section className='App'>
            {
                users.map(user => {
                    return (
                        <TwitterFollowCard
                            key={user.username}
                            username={user.username}
                            name={user.name}
                            initialIsFollowing={user.isFollowing} />
                    )
                })
            }
        </section>
    )
}