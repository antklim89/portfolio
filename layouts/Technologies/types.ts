import { BlurData, TechnologyType } from '~/types';


export interface TechnologiesProps {
     technologies: BlurData<TechnologyType>[]
}

export interface TechnologyProps {
     technology: BlurData<TechnologyType>
}
