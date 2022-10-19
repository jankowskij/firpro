
import UsersAPI from "./UsersAPI";
import { connect } from "react-redux";
import { setUsers, preloader, setCurrentPage, setTotalCounts } from "../../../redux/reducers/usersReduser";



const mapStateToProps = (state) => {
    return {
        content: state.users,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         preloader: (data) => {
//             dispatch(preloaderAC(data));
//         },
//         setCurrentPage: (data) => {
//             dispatch(setCurrentPageAC(data));
//         },
//         setTotalCounts: (data) => {
//             dispatch(setTotalCountsAC(data));
//         }
//     }
// }


const UsersContainer = connect(mapStateToProps, {
    setUsers,
    preloader,
    setCurrentPage,
    setTotalCounts
})(UsersAPI);

export default UsersContainer;