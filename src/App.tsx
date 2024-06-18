

import HeaderPublic from "./components/HeaderPublic"
import FrequentlyQuestions from "./components/FrequentlyQuestions"
import ApresentationDoctor from "./components/ApresentationDoctor"
import PlansGlobal from "./components/PlansGlobal"
import Footer from "./components/Footer"
export default function App() {
  return (

    <div className="overflow-hidden">
      <HeaderPublic />
      <PlansGlobal />
      <ApresentationDoctor />
      <FrequentlyQuestions />
      <Footer />
    </div>

  )
}