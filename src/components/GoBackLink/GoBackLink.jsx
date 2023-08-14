import {useRef} from "react";
import css from './GoBackLink.module.css';
import { useLocation, Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

const GoBackLink =()=>{
    const location=useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

return(
    <div className={css.linkWrapper}>
        <Link to={backLinkLocationRef.current} className={css.link}><HiArrowNarrowLeft/> Go back</Link>
    </div>
)
}

export default GoBackLink;
