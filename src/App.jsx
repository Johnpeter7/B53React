import React from 'react'
import Card from './Card'
function App() {

  const data = [
    {
      plan:"FREE",
      price:0,
      user:"Single User",
      isUser:true,
      storage:"5GB Storage",
      isStorage:true,
      publicProject:"Unlimited Public Projects",
      isPublicProject:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProject:"Unlimited Private Projects",
      isPrivateProject:false,
      support:"Dedicated Phone Support",
      isSupport:false,
      subDomain:"Free Subdomain",
      isSubdomain:false,
      reports:"Monthly Status Reports",
      isReports:false
    },
    {
      plan:"PLUS",
      price:9,
      user:"5 Users",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      publicProject:"Unlimited Public Projects",
      isPublicProject:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProject:"Unlimited Private Projects",
      isPrivateProject:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subDomain:"Free Subdomain",
      isSubdomain:true,
      reports:"Monthly Status Reports",
      isReports:false
    },
    {
      plan:"PRO",
      price:49,
      user:"Users",
      isUser:true,
      storage:"150GB Storage",
      isStorage:true,
      publicProject:"Unlimited Public Projects",
      isPublicProject:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProject:"Unlimited Private Projects",
      isPrivateProject:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subDomain:"Free Subdomains",
      isSubdomain:true,
      reports:"Monthly Status Reports",
      isReports:true
    }
  ]

  return <>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
         {
            data.map((e,i)=>{
              return <Card details={e} key={i}/>
            })
         }
        </div>
      </div>
    </section>
  </>
}

export default App