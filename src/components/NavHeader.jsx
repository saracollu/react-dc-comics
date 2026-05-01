export default function Nav() {

    const menuHeader = [
        {
            id: 1,
            text: "CHARACTERS",
            path: "/characters"
        },
        {
            id: 2,
            text: "COMICS",
            path: "/comics"
        },
        {
            id: 3,
            text: "MOVIES",
            path: "/movies"
        },
        {
            id: 4,
            text: "TV",
            path: "/tv"
        },
        {
            id: 5,
            text: "GAMES",
            path: "/games"
        },

        {
            id: 6,
            text: "COLLECTIBLES",
            path: "/characters"
        },
        {
            id: 7,
            text: "VIDEOS",
            path: "/comics"
        },
        {
            id: 8,
            text: "FANS",
            path: "/movies"
        },
        {
            id: 9,
            text: "NEWS",
            path: "/tv"
        },
        {
            id: 10,
            text: "SHOP",
            path: "/games"
        },
    ]
    return (
        <nav>
            {menuHeader.map((item) => (
                <a href={item.path} key={item.id}>{item.text}</a>
            ))}
        </nav>
    )
}