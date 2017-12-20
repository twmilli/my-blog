import React from 'react';
import './email-newsletter.scss';

export default class EmailNewsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
    };
  }

    render() {
        return (
            <div className="email-form-wrap">
                <form action="https://medium.us15.list-manage.com/subscribe/post?u=5c9abfe8a527c62bb03f94833&amp;id=504169905a" method="POST" noValidate>
                    <input 
                        type="email" 
                        name="EMAIL" 
                        id="email-input"
                        value={this.state.emailValue} 
                        placeholder="Email address"
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                        autoCapitalize="off" 
                        autoCorrect="off"
                     />
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
              </form>
            </div>
        )
    }
}