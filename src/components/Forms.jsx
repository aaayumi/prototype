import React from 'react';
import classNames from 'classnames';

class FormRow extends React.Component {

    render() {
    return (
        <div className={classNames({"form-group": true,
                                    "has-danger": this.props.error})} >
          <input type={this.props.fieldType}
             value={this.props.value}
             onChange={this.props.onChange}
             className={classNames({"form-control": true,
                                        "form-control-danger": this.props.error})}
             placeholder={this.props.placeholder}
             autoFocus={this.props.autoFocus}/>
              <div className="form-control-feedback">{this.props.error}</div>

        </div>
    );
    }
}

class BigButton extends React.Component {
    render() {
    return (<input className="btn btn-lg btn-primary btn-block"
               type="submit"
               value={this.props.text}
               onClick={this.props.onClick} />);
    }
}

export { FormRow, BigButton };
