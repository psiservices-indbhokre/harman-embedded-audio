import React from "react";
import Button from "@src/components/CustomButtons/Button.jsx";

interface NavigationButtonProps {
    className?: string
    color?: string
    onMouseEnter?:any
    onClick:(ref:string) => any,
    children?: any
    value: string
}

export default class NavigationButton extends React.Component <NavigationButtonProps> {

    private onClickCb() {
        this.props.onClick(this.props.value)
    }

    constructor (props:NavigationButtonProps) {
        super(props);
        this.onClickCb = this.onClickCb.bind(this)
    }

    public render(){
        return(
            <Button
                    className={this.props.className}
                    color={this.props.color}
                    onMouseEnter={this.props.onMouseEnter}
                    onClick={this.onClickCb}
                >
                    {this.props.children}
                    </Button>
        )
    }
}