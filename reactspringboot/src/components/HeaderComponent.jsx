import React, {Component} from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="text-center">
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-brand" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                            <a href="https://javaguides.net">Employee Management App</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;