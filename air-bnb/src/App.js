import Torso from "./components/torso"
import Card from "./components/card"
import info from "./db"

export default function App() {
    // pass info to data props of Card element
    return (
        <div>
            <Torso />
            <div className="card-rack">
                {info.map(item => (
                    (!isNaN(item.openSpots) && item.openSpots !== "") && <Card key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}