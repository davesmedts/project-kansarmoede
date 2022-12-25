import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import AccordeonStimuleren from './AccordeonStimuleren'
import AccordeonSignaleren from './AccordeonSignaleren'
import AccoredeonOndersteunen from './AccordeonOndersteunen'


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Signaleren
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Ondersteunen
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Stimuleren
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <AccordeonSignaleren />
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <AccoredeonOndersteunen />
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <AccordeonStimuleren />

                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}
