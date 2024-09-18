import { createReducer, on } from "@ngrx/store"
import { Get_User_data, show_skill_modal } from "./common.actions"

export interface InitialState {
    userData: any,
    experienceDetails: any;
    skillDetials: any;
    primarySkills: any;
    secondarySkills: any;
    otherSkills: any;
    educationDetails: any;
    contactDetails: any;
    isShowingSkillModal: boolean;
    error: any
}

export const initialState: InitialState = {
    userData: null,
    experienceDetails: null,
    skillDetials: null,
    primarySkills: null,
    secondarySkills: null,
    otherSkills: null,
    educationDetails: null,
    contactDetails: null,
    isShowingSkillModal: false,
    error: null
}

export const commonReducer = createReducer(
    initialState,
    on(
        Get_User_data,
        (state: InitialState, { userData }) => (
            {
                ...state,
                userData,
                experienceDetails: userData.experience,
                skillDetials: userData.technicalSkills,
                primarySkills: userData.technicalSkills.primary.details,
                secondarySkills: userData.technicalSkills.secondary.details,
                otherSkills: userData.technicalSkills.others.details,
                educationDetails: userData.education.details,
                contactDetails: userData.contactDetails,
                error: null
            })
    ),
    on(
        show_skill_modal,
        (state: InitialState, { isShowing }) => ({ ...state, isShowingSkillModal: isShowing })
    )
)