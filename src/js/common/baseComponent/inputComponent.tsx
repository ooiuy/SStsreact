import React from 'react'

interface IInputComponenProps {
    type: string, placeholder:string, value?:string,
    dispatch?: any, change?:any, blur?: any, focus?: any, update?:any,
    keyup?:any, id?: string, name?:string, attention?:string,
    any_data?: any, maxlength?: number    
}

interface IInputComponentState {focused: boolean}

export class InputComponent <T extends IInputComponenProps> extends React.Component<T, IInputComponentState>{
    constructor(props: any){
        super(props)
        this.state = {
            focused: false
        }
    }

    componentDidUpdate(){
        if (!!this.props.value && !this.state.focused)
            this.setState({ focused: true })
    }

    focus(){
        if (this.props.focus)
            this.props.focus()
        this.setState({ focused: true })
    }

    blur(e: React.FocusEvent<HTMLElement>){
        if(!(!!e.currentTarget.value))
            this.setState(focused:false)
    }
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id} className={this.state.focused ? 'label-focused' : ''}>{this.props.placeholder}</label>
                <input type={this.props.type} className="form-control" id={this.props.id} name={this.props.name}
                    onFocus={() => { this.focus() }}
                    onBlur={(e) => { this.blur(e) }}
                    onChange={this.props.change ? (e) => { this.props.change(e, this.props.dispatch) } : () => { }}
                    onKeyUp={this.props.keyup ? (e) => { this.props.keyup(e, this.props.dispatch) } : () => { }}
                    data-any={this.props.any_data}
                    value={this.props.value}
                    maxLength={this.props.maxlength ? this.props.maxlength : null} />
                <small className="invalid-feedback" style={{ display: this.props.attention ? 'block' : 'none' }}>{this.props.attention}</small>
            </div>
        )
    }
}