import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import AccordeionGeneratieArmoede from './AccordeonGeneratieArmoede'
import AccordeonMigratieArmoede from './AccordeonMigratieArmoede'
import AccordeonSituationeleArmoede from './AccordeonSituationeleArmoede'


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
                            Generatiearmoede
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Migratiearmoede
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Situationele armoede
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <AccordeionGeneratieArmoede />

                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <AccordeonMigratieArmoede />
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <AccordeonSituationeleArmoede />
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}
