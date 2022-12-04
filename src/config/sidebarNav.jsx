import {
  FcHome,
  FcKindle,
  FcConferenceCall,
  FcVoicePresentation,
  FcRadarPlot,  
} from "react-icons/fc";
const sidebarNav = [
    {
        link: '/admin',
        section: 'home',
        icon: <FcHome size={30} />,
        text: 'Home'
    },
    {
        link: './customers',
        section: 'customers',
        icon: <FcVoicePresentation size={30}/>,
        text: 'Customers'
    },
    {
        link: './product',
        section: 'product',
        icon: <FcRadarPlot size={30}/>,
        text: 'Product'
    },
   
]

export default sidebarNav