
import PropTypes from 'prop-types';

const List = ({route}) => {
    return (
        <li className='md:mr-10 hover:bg-slate-900 hover:px-2 text-white'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

List.propTypes = {
    route: PropTypes.object
};

export default List;