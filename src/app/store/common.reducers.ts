import { createReducer, on } from "@ngrx/store"
import { Get_Company_Project_Details, Get_Selected_Skill, Get_User_data, show_skill_modal } from "./common.actions"

export interface InitialState {
    userData: any,
    experienceDetails: any;
    projects: any;
    selectedCompanyProjectDetails: any;
    skillDetials: any;
    primarySkills: any;
    secondarySkills: any;
    otherSkills: any;
    SkillModalDetails: any;
    educationDetails: any;
    contactDetails: any;
    isShowingSkillModal: boolean;
    error: any
}

export const initialState: InitialState = {
    userData: null,
    experienceDetails: null,
    projects: null,
    selectedCompanyProjectDetails: null,
    skillDetials: null,
    primarySkills: null,
    secondarySkills: null,
    otherSkills: null,
    SkillModalDetails: null,
    educationDetails: null,
    contactDetails: null,
    isShowingSkillModal: false,
    error: null
}

export const commonReducer = createReducer(
    initialState,
    on(
        Get_User_data,
        (state: InitialState, { userData }) => {
            const { details } = userData.experience;
            const allProjects = details.map((res: any) => res.projects).flat();

            return (
                {
                    ...state,
                    userData,
                    experienceDetails: userData.experience,
                    projects: allProjects,
                    primarySkills: userData.technicalSkills.primary.details,
                    secondarySkills: userData.technicalSkills.secondary.details,
                    otherSkills: userData.technicalSkills.others.details,
                    educationDetails: userData.education.details,
                    contactDetails: userData.contactDetails,
                    error: null
                })
        }
    ),
    on(
        Get_Company_Project_Details,
        (state: InitialState, { companyId }) => {
            const selectedCompanyProjectDetails = state.experienceDetails.filter((res: any) => res.id === companyId);
            return ({ ...state, selectedCompanyProjectDetails })
        }
    ),
    on(
        show_skill_modal,
        (state: InitialState, { isShowing }) => ({ ...state, isShowingSkillModal: isShowing })

    ),
    on(
        Get_Selected_Skill,
        (state: InitialState, { skill }) => {
            const skillModalDetails = state.projects.reduce((acc: any, el: any) => {
                const tech = el.projectDetails.technologies;
                const skills = tech.map((el: any) => el.toUpperCase());

                acc.label = skill;
                if (skills.includes(skill.toUpperCase())) {
                    acc.projects?.includes(el.name) ? '' : acc.projects = [...acc.projects, el.name];
                    acc.companies?.includes(el.serviceProvider) ? '' : acc.companies = [...acc.companies, el.serviceProvider];
                }

                return acc;
            }, { projects: [], companies: [] });

            return ({ ...state, SkillModalDetails: skillModalDetails })
        }
    )
)