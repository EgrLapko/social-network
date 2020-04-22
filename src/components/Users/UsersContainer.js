import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { followUserAC, unfollowUserAC, setUsersAC } from '../../redux/reducers/usersReducer'

const mapStateToProps = state => ({
    users: state.usersPage.users
})

const mapDispatchToProps = dispatch => ({
    followUser: userId => dispatch(followUserAC(userId)),
    unfollowUser: userId => dispatch(unfollowUserAC(userId)),
    setUsers: users => dispatch(setUsersAC(users))
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);