import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRobots, searchFilter } from "../Redux/actions";

const Robots = (props) => {
    const robots = useSelector(state => state.robots);
    const text = useSelector(state => state.search)
    // const robots = useSelector(state => state.robots);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRobots());
    }, [])

    const handleChange = (e) => dispatch(searchFilter(e.target.value))


    return (
        <>
            <nav>
                <h1>ROBOCATS</h1>
                <input onChange={(e) => handleChange(e)} type="text" placeholder="Search Robots" className="br4 b--light-purple bg--lightest-blue pa2"/>
            </nav>
            <div>
            {
                robots.map((robot, i) => {
                    if (robot.name.toLowerCase().includes(text)){
                        return (
                            <div key={i} className="bg-light-green dib br3 ma3 grow bw2  shadow-5">
                                <img src={`https://robohash.org/set_set4/1${robot.name}}?size=300x300`} alt='robot' />
                                <h4>{robot.name}</h4>
                                <h4>{robot.email}</h4>
                            </div>
                        )
                    }
                })
            }
            </div>
        </>
    )
}

export default Robots