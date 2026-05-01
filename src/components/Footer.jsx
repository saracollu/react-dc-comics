export default function Footer() {

    const menuFooter = [
        {
            id: 1,
            text: "Characters",
            path: "/characters"
        },
        {
            id: 2,
            text: "Comics",
            path: "/comics"
        },
        {
            id: 3,
            text: "Movies",
            path: "/movies"
        },
        {
            id: 4,
            text: "TV",
            path: "/tv"
        },
        {
            id: 5,
            text: "Games",
            path: "/games"
        },
        {
            id: 6,
            text: "Videos",
            path: "/videos"
        },
        {
            id: 7,
            text: "News",
            path: "/news"
        },

    ]

    return (
        <footer>
            {menuFooter.map((item) => (
                <li> <a href={item.path} key={item.id}>{item.text} </a></li>
            ))
            }
        </footer >
    )
}