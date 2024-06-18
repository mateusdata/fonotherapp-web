import React from 'react'
import HeaderPublic from '../components/HeaderPublic'
import PlansGlobal from '../components/PlansGlobal'
import ApresentationDoctor from '../components/ApresentationDoctor'
import FrequentlyQuestions from '../components/FrequentlyQuestions'
import Footer from '../components/Footer'

export default function GlobalPage() {
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
