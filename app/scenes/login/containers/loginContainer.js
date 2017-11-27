import { connect } from 'react-redux';
import Login from '../components/login';
import { loginUser } from '../../../redux/auth/actions';

const mapStateToProps = (state) =>({

});

const mapActionCreators = { loginUser };

export default connect(mapStateToProps, mapActionCreators)(Login);
