import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ModalComp from '../common/ModalComp'
import SelectVessel from './SelectVessel'
import AlertDanger from '../common/AlertDanger'
import * as actions from '../store/actions'
import { allLabels } from '../constants/tankLabels'
import { displayNumberOfTanks } from '../utils/displayNumberOfTanks'
import { tables } from '../styles/tables.module.css'

const TankList = ({ tanks: { registeredTanks,
    flagConstraint, tankWithSameId },
    modal: { isModalToAssignTankToVesselVisible },
    toggleModalToAssignTankToVessel, selectTank,
    assignTankToVessel, vessel }) => {

    if (registeredTanks.length === 0)
        return (
            <p className="mt-2">
                No registered tanks.
            </p>
        )

    return (
        <Fragment>
            <h4 className="mt-4">
                Pool of Registered Oxygen Tanks
            </h4>
            <table className={`table mt-2 ${tables}`}>
                <thead>
                    <tr>
                        {allLabels.map((label, index) => {
                            return (
                                <th
                                    key={index}
                                    scope="col">
                                    {label}
                                </th>
                            )
                        })}
                        <th>Assign Tank To Vessel</th>
                    </tr>
                </thead>
                <tbody>
                    {registeredTanks.map(tank => {
                        return (
                            <Fragment key={tank.unimedId}>
                                <tr>
                                    <td>{tank.unimedId}</td>
                                    <td>{tank.cyclinderSerialNumber}</td>
                                    <td>{tank.cylinderSize}</td>
                                    <td>{tank.origin}</td>
                                    <td>{tank.owner}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => {
                                                selectTank(tank)
                                                toggleModalToAssignTankToVessel()
                                            }}>
                                            Assign
                                        </button>
                                    </td>
                                </tr>
                            </Fragment>
                        )
                    })}
                </tbody>
            </table>

            <div className="m-2">
                {displayNumberOfTanks(registeredTanks)}
            </div>

            <AlertDanger constraint={tankWithSameId}>
                There is already a tank with this Id
            </AlertDanger>

            <AlertDanger constraint={flagConstraint}>
                The selected vessel can not receive more tanks of this type
            </AlertDanger>

            <ModalComp
                header={'Assign Tank To Vessel'}
                modal={isModalToAssignTankToVesselVisible}
                toggle={() => toggleModalToAssignTankToVessel()}>
                <SelectVessel onSubmit={() => {
                    assignTankToVessel(vessel.values.selectVessel)
                    toggleModalToAssignTankToVessel()
                }} />
            </ModalComp>
        </Fragment>
    )
}

TankList.propTypes = {
    tanks: PropTypes.object.isRequired,
    modal: PropTypes.objectOf(Boolean).isRequired,
    cylinderSize: PropTypes.object,
    assignTankToVessel: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tanks: state.tanks,
    modal: state.modal,
    vessel: state.form.selectVessel
})

export default connect(mapStateToProps, actions)(TankList)