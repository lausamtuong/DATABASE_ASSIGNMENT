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
        link: './contacts',
        section: 'contact',
        icon: <FcKindle size={30} />,
        text: 'Contacts'
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
    {
        link: './clek',
        section: 'clek',
        icon: <FcConferenceCall size={30}/>,
        text: 'clek'
    },
   
]

export default sidebarNav