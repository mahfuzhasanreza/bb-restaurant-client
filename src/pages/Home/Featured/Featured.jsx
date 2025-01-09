import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="text-white featured-item pt-8 my-20">
            <SectionTitle
                heading='Featured Item'
                subHeading='Check it out'
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Sep 24, 2024</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo suscipit itaque nisi aliquam laboriosam enim quibusdam officia voluptatum corrupti. Omnis animi rerum ab consequatur ullam veritatis delectus commodi inventore assumenda.</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;