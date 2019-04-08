import { TYPES } from '../types'
import {
    registerTank, toggleModalToRegisterTank,
    toggleModalToAssignTankToVessel,
    selectTank
} from '..'

const tank = {
    unimedId: "666",
    cyclinderSerialNumber: "6",
    cylinderSize: "MOX-40",
    origin: "US",
    owner: "UNIMED"
}

describe('actions', () => {
    it('should toggle the modal state to register a tank', () => {
        const expectedAction = {
            type: TYPES.TOGGLE_MODAL_TO_REGISTER_TANK
        }
        expect(toggleModalToRegisterTank()).toEqual(expectedAction)
    })

    it('should create an action to add a tank', () => {
        const expectedAction = {
            type: TYPES.REGISTER_TANK,
            tank
        }
        expect(registerTank(tank)).toEqual(expectedAction)
    })

    it('should toggle the modal state to assign a tank to a vessel', () => {
        const expectedAction = {
            type: TYPES.TOGGLE_MODAL_TO_ASSIGN_TANK_TO_VESSEL
        }
        expect(toggleModalToAssignTankToVessel()).toEqual(expectedAction)
    })

    it('should select a tank', () => {
        const expectedAction = {
            type: TYPES.SELECTED_TANK,
            tank
        }
        expect(selectTank(tank)).toEqual(expectedAction)
    })
})