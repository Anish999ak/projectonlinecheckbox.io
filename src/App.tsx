//@ts-nocheck
import BasicCard from "./Components/Form";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from "./Components/Quiz";
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import { questions } from "./Data";
export const UserContext = createContext();
export const question = createContext();
export const question1 = createContext();
export const question2 = createContext();
export const question3 = createContext();
export const question4 = createContext();
function App() {
    const ques = useState(questions);
    const value = useState({
      one:true,
      two:false,
      three:false,
      four:false,
      five:false,
    })
const value1 = useState({
  one:false,
  two:false,
  three:false,
  four:false,
  five:false,
})    

const value2 = useState({
  one:false})

  const value3 = useState({
    one:false,
    two:false,
  })

  const value4 = useState({
    one:false,
  })
  return (
    <div className="App">
      <question4.Provider value={value4}>
        <question3.Provider value={value3}>
        <question2.Provider value = {value2}>
         <question1.Provider value={value1}>
      <question.Provider value={ques}>
        <UserContext.Provider value={value}>
       <Router>
    <Routes>
      <Route exact path="/" element={<BasicCard/>} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  </Router>
  </UserContext.Provider>
   </question.Provider>
   </question1.Provider> 
      </question2.Provider>
      </question3.Provider>
      </question4.Provider>
      
      
         
    </div>
  );
}

export default App;
