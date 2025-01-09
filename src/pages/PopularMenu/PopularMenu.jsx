import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(item => item.category === 'popular');
    //             setMenu(popularItem);
    //         })
    // }, [])

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-24">
            <SectionTitle
                subHeading='Popular Items'
                heading='From Our Menu'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>
                    )
                }
            </div>
            <button className="flex mx-auto btn btn-outline border-0 border-b-4 mt-7">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;