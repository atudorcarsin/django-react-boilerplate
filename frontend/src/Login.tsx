import React from 'react';
import './Login.css';
import axios from 'axios';
import Cookies from 'js-cookie';

class Login extends React.Component<{}, { errorMessage: string }> {
  state = {
    errorMessage: '',
  }

  async componentDidMount() {
    try {
      await axios.get('/csrf/');
      axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken');
    } catch (error) {
      console.error(error);
    }
  }

  handleSubmit = async (formData: FormData) => {
    try {
      await axios.post('/login/', formData);
      window.location.href = '/';
    } catch (error) {
      console.error(error);
      this.setState({ errorMessage: 'Unable to log in' });
    }
  }

  render() {
    return (
        <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">Sign in to your account</h1>
          <form action={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <p className="error-message">{this.state.errorMessage}</p>
            <button type="submit" className="login-button">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;