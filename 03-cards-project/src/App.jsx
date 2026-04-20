import React from 'react'
import Carrd from './components/Carrd'
import User from './components/User'

const App = () => {
  const jobs = [
  {
    brandlogo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
    company: "Google",
    posted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://thumbs.dreamstime.com/b/apple-store-uk-logo-american-multinational-technology-company-140568601.jpg",
    company: "Apple",
    posted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://i.pinimg.com/originals/ce/b3/ed/ceb3ed2c5164d73a601536f934711983.png",
    company: "Meta",
    posted: "1 week ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    company: "Amazon",
    posted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Chennai, India"
  },
  {
    brandlogo: "https://tse1.mm.bing.net/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?pid=Api&P=0&h=180",
    company: "Netflix",
    posted: "10 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/previews/028/339/965/original/microsoft-icon-logo-symbol-free-png.png",
    company: "Microsoft",
    posted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://tse1.mm.bing.net/th/id/OIP.s2qnKGj8R9kTsbv6IANlEgHaIe?pid=Api&P=0&h=180",
    company: "Adobe",
    posted: "1 month ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$52/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://clipground.com/images/uber-logo-png.jpg",
    company: "Uber",
    posted: "6 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$47/hr",
    location: "Delhi, India"
  },
  {
    brandlogo: "https://tse1.mm.bing.net/th/id/OIP.2X1z9ec9_oX1zOZVhCnrtQHaFj?pid=Api&P=0&h=180",
    company: "Airbnb",
    posted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://tse4.mm.bing.net/th/id/OIP.H836RvDYYgQZcZn0TC8qBAHaHa?pid=Api&P=0&h=180",
    company: "X (Twitter)",
    posted: "8 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Remote"
  }
];
  return (
    <div className='parent'>
      {jobs.map(function(elem){
        return <Carrd company={elem.company} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandlogo={elem.brandlogo} location={elem.location} posted={elem.posted}/>
      })}
      

    </div>
  )
}

export default App
