import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap'
import FaAngle from './FaAngle'
import { allLabelsAbbreviation } from '../constants/tankLabels'
import '../styles/Accordion.css'

class Accordion extends Component {
    state = {
        collapse: true
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse })
    }

    render() {
        const { header, children } = this.props
        return (
            <div className="row no-gutters">
                <div className="col">
                    <Card id='card'>
                        <CardHeader
                            id='cardHeader'
                            onClick={this.toggle}>
                            <FaAngle isAccordionCollapsed={this.state.collapse} />
                            &nbsp; {header}
                        </CardHeader>
                        <Collapse isOpen={this.state.collapse}>
                            <CardBody>
                                <table className="table">
                                    <thead style={{ fontSize: '16px' }}>
                                        <tr>
                                            {allLabelsAbbreviation.map((label, key) => {
                                                return (
                                                    <th
                                                        key={key}
                                                        scope="col">
                                                        {label}
                                                    </th>
                                                )
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {children}
                                    </tbody>
                                </table>
                            </CardBody>
                        </Collapse>
                    </Card>
                </div>
            </div>
        )
    }
}

Accordion.propTypes = {
    isAccordionCollapsed: PropTypes.bool,
    header: PropTypes.string,
    children: PropTypes.array.isRequired
}

export default Accordion