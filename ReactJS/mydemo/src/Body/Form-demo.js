import React from 'react';
class formInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: '', password: ''};
      this.handleChangeUsername = this.handleChangeUsername.bind(this);
      this.cPassword = this.handleChangePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(event) {
      // this.setState({cart: {
      //   items: [{sku: event.target.value}]
      // }});
      const target = event.target
      this.setState({username: target.value})
      
    }

    handleChangePassword(event){
      console.log(event)
      //this.setState({password: target.value})
    }
    
    handleSubmit(event) {
      event.preventDeafult();
      return(
        <div>
          <div>Username: {this.state.username}</div>
          <div>Password: {this.state.password}</div>
        </div>
      )
    }
    
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Username:
              <input name="username" value={this.state.username} type="text" onChange={this.handleChangeUsername}/>
            </label>
          </div>
          <div>
            <label>
              Password:
              <input name="password" type="password" value={this.state.password} onChange={this.handleChangePassword}/>
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
//onChange={this.handleChange}
export default formInput