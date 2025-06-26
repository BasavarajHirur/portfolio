import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitialState } from "./common.reducers";

const selectState = createFeatureSelector<InitialState>('data');

export const selectUserData = createSelector(
    selectState,
    (state: InitialState) => state.userData
)

export const selectExperienceDetails = createSelector(
    selectState,
    (state: InitialState) => state.experienceDetails
)

export const selectAllProjectDetails = createSelector(
    selectState,
    (state: InitialState) => state.projects
)

export const selectedCompanyProjectDetails = createSelector(
    selectState,
    (state: InitialState) => state.selectedCompanyProjectDetails
)

export const selectSkillDetails = createSelector(
    selectState,
    (state: InitialState) => state.skillDetials
)

export const selectPrimarySkillsDetails = createSelector(
    selectState,
    (state: InitialState) => state.primarySkills
)

export const selectSecondarySkillDetails = createSelector(
    selectState,
    (state: InitialState) => state.secondarySkills
)

export const selectOtherSkillDetails = createSelector(
    selectState,
    (state: InitialState) => state.otherSkills
)

export const selectModalSkillDetails = createSelector(
    selectState,
    (state: InitialState) => state.SkillModalDetails
)

export const selectEducationDetails = createSelector(
    selectState,
    (state: InitialState) => state.educationDetails
)

export const selectSkillModalState = createSelector(
    selectState,
    (state: InitialState) => state.isShowingSkillModal
)

export const selectContactDetails = createSelector(
    selectState,
    (state: InitialState) => state.contactDetails
)