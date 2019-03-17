import Link from 'next/link';

const Navbar = () => (
    <div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/sell">
            <a>Sell</a>
        </Link>
    </div>
)
export default Navbar;