import React,{FC} from 'react'
import LatestPublications from './components/common/LatestPublications/LatestPublications'
import Workspaces from './components/common/Workspaces/Workspaces'
import ResumeYourWork from './components/common/ResumeYourWork/ResumeYourWork'




const MainPage: FC = () => {
    return(
        <div>
             <LatestPublications/>
             <Workspaces/>
             <ResumeYourWork/>
        </div>
    )
}

export default MainPage