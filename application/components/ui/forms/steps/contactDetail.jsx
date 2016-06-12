import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, BasicStep } from './basicStep.jsx'

class ContactDetail extends BasicStep {

    constructor(props) {
        super(props);
        this.state = {
            postcode: (props.data && props.data.postcode) ? props.data.postcode : '',
            contactNumber: (props.data && props.data.contactNumber) ? props.data.contactNumber : '',
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit(this.onSubmit)}>
                <div>
                    <div className="row">
                        <div className="six columns">
                        <label>Postcode</label>
                        <input className="u-full-width required" placeholder="AB12 3CD"
                                                        type="text"
                                                        {...this.props.fields.postcode}
                                                        value={this.state.postcode}
                                                        autoFocus/>
                        </div>
                        <div className='help-block'>
                            {this.props.fields.postcode.touched ? this.props.fields.postcode.error : ''}
                        </div>
                    </div>
                    <div className="row">
                        <div className="six columns">
                        <label>Contact number</label>
                        <input className="u-full-width" placeholder=""
                                                        type="text"
                                                        {...this.props.fields.contactNumber}
                                                        value={this.state.contactNumber}/>
                        </div>
                        <div className='help-block'>
                            {this.props.fields.contactNumber.touched ? this.props.fields.contactNumber.error : ''}
                        </div>
                    </div>
                    {this.renderButtons()}
                </div>
            </form>
        )
    }
}

export default connect(mapStateToProps)(ContactDetail)